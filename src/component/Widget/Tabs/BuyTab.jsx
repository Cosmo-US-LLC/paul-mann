import { useContext, useEffect, useMemo, useState } from "react";
import dollarIcon from "../../../assets/walletsec/btnicns (3).svg";
import placeholderImg from "../../../assets/walletsec/gg.svg";
import { ApiContext } from "../../../presale-gg/context/ApiContext";
import {
  getConfig,
  getAbi,
  getChainIdFromLabel,
  getContractAddress,
  getDecimals,
  isCurrencyNative,
  sendGenericTransaction,
} from "../../../presale-gg/web3";
import { useStore } from "@nanostores/react";
import { tokenImageMap } from "../../../presale-gg/assets/img/tokens";
import toast from "react-hot-toast";

import { formatDollar, minMax, parseNum } from "../../../presale-gg/util";
import TokenInput from "../../TokenInput";
import { useAccount } from "../../../presale-gg/web3";
import { showConnectionModal } from "../../../presale-gg/stores/modal.store";
import TransactionModal from "../../TransactionModal";
import { api } from "../../../presale-gg/api";
import clsx from "clsx";
import {
  resetUserBonusCode,
  userApplyBonusCode,
  userResetReferralCode,
  userUpdateReferralCode,
} from "../../../presale-gg/stores";
import infoIcon from "../../../assets/walletsec/info.webp";

const walletBuyTokens = new Set([
  "ETH-ERC-20",
  "USDT-ERC-20",
  "BNB-BEP-20",
  "BUSD-BEP-20",
  "USDT-BEP-20",
]);

/**
 * @template T
 * @typedef {[T, import("react").Dispatch<import("react").SetStateAction<T>>]} State
 */

const BuyTab = () => {
  const projectData = useContext(ApiContext);
  const apiState = useStore(projectData.$apiState);

  const stageCurrent = parseNum(apiState.stage?.cumulative_usd_raised);
  const stageTarget = parseNum(apiState.stage?.next_stage_target_usd);

  /** @type {State<import("../../TokenInput").InputRef>} */
  const [paymentTokenRef, setPaymentTokenRef] = useState(null);
  const [paymentTokenValue, setPaymentTokenValue] = useState(1);

  /** @type {State<import("../../TokenInput").InputRef>} */
  const [receiveTokenRef, setReceiveTokenRef] = useState(null);
  const [receiveTokenValue, setReceiveTokenValue] = useState(1);

  /** @type {State<import("../../../presale-gg/api/api.types").API.PaymentToken | null>} */
  const [selectedPaymentToken, setSelectedPaymentToken] = useState(null);

  useEffect(() => {
    if (!selectedPaymentToken && apiState.paymentTokens?.[0])
      setSelectedPaymentToken(apiState.paymentTokens[0]);
  }, [apiState.paymentTokens]);

  useEffect(() => {
    const receiveAmount =
      (paymentTokenValue * parseNum(selectedPaymentToken?.price)) /
      (parseNum(apiState.stage?.token_price) || 1);
    receiveTokenRef?.setVal(receiveAmount);
  }, [selectedPaymentToken, receiveTokenRef]);

  const acceptingTokens = useMemo(() => {
    let acceptingTokens = [];
    (apiState.paymentTokens ?? []).forEach((token) => {
      if (acceptingTokens.length >= 6) return;
      const img = tokenImageMap[token.symbol.toLowerCase()];
      if (!img) return;
      if (
        acceptingTokens.find(
          (currToken) => tokenImageMap[currToken.symbol.toLowerCase()] === img
        )
      )
        return;
      acceptingTokens.push(token);
    });
    return acceptingTokens;
  });

  const accountData = useAccount();

  const minimum = (() => {
    const currency = selectedPaymentToken;
    if (!currency || !currency.nowpayments_minimum) return null;
    return (
      Math.ceil(
        (parseNum(currency.nowpayments_minimum) / parseNum(currency.price)) *
          10 ** 6
      ) /
      10 ** 6
    );
  })();

  const [createdTransaction, setCreatedTransaction] = useState(null);
  const [transactionModalVisible, setTransactionModalVisible] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleIconClick = () => {
    setShowInfo(!showInfo);
  };

  const buy = async () => {
    if (apiState.presaleEnded) return toast.error("Presale has ended");
    const { config } = await getConfig();
    const currency = selectedPaymentToken;
    if (!currency) return;
    const min = minimum;
    if (paymentTokenValue === 0)
      return toast.error(
        `Must pay more than 0 ${currency.symbol.toUpperCase()}`
      );
    if (min !== null && paymentTokenValue < min)
      return toast.error(`Cannot pay less than ${min} ${currency.symbol}`);
    const address = accountData.address;
    if (!address) return;
    try {
      setTransactionLoading(true);
      await toast.promise(
        (async () => {
          const walletTransfer = walletBuyTokens.has(
            currency.symbol.toUpperCase() + "-" + currency.chain.toUpperCase()
          );
          if (walletTransfer) {
            const chainId = getChainIdFromLabel(currency.chain);
            if (!chainId)
              return toast.error(
                `Invalid chain id for chain ${currency.chain}`
              );
            const abi = getAbi(chainId);
            if (!abi) return toast.error(`Invalid ABI for chain id ${chainId}`);
            const native = isCurrencyNative(currency.symbol, chainId);
            const contractAddress =
              getContractAddress(chainId, currency.symbol) ?? undefined;
            const decimals = currency.symbol
              ? getDecimals(chainId, currency.symbol)
              : 18;
            if (!native && !contractAddress)
              return toast.error(
                `Invalid contract address for token ${currency.symbol}`
              );
            toast("Confirm in your wallet");
            const transactionHash = await sendGenericTransaction(config, {
              to: apiState.info.main_payment_wallet_address,
              value: paymentTokenValue,
              abi,
              chainId,
              contractAddress,
              decimals: decimals,
              native,
            });
            toast.success("Transaction successfully completed", {
              duration: 10000,
            });
            api.createTransactionMetadata(
              apiState.project,
              address ?? "",
              transactionHash
            );
            return "submitted";
          } else {
            const res = await api.createTransaction(apiState.project, {
              payment_token_id: currency.id,
              usd_amount: (
                paymentTokenValue * parseNum(currency.price)
              ).toString(),
              wallet_address: address ?? "",
              token_amount: paymentTokenValue.toString(),
            });
            setCreatedTransaction(res.data);
            setTimeout(() => {
              setTransactionModalVisible(true);
              setTransactionLoading(false);
            }, 100);
            return "created";
          }
        })(),
        {
          loading: "Processing transaction",
          error: (err) => api.getApiErrorMessage(err, "Transaction errored"),
          success: (res) => `Successfully ${res} transaction`,
        }
      );
    } catch (_) {}
    setTransactionLoading(false);
  };
  console.log({acceptingTokens});

  return (
    <>
      <div className="space-y-[8px]">
        <h3 className="text-[38.258px] font-[700] text-center leading-[88%] text-[#00]">
          {apiState.presaleEnded
            ? "Presale Ended"
            : `TEAM ${projectData.symbol}`}
        </h3>
        <h5 className="text-[#000] leading-[133.333%] text-[18.364px] font-[700] text-center">
          1 {projectData.symbol} ={" "}
          {formatDollar(parseNum(apiState.stage?.token_price))}
        </h5>
      </div>
      <div className=" pb-2 space-y-[8px]">
        {/* start */}
        <div className="relative flex items-center justify-between w-full px-4 py-1 bg-[#FFFFFF47] rounded-full">
          <div className="w-4"></div>
          <span className="text-sm font-semibold text-black">
            Token Price Increases
          </span>

          
          <div
            className="flex items-center justify-center w-4 h-4 rounded-full cursor-pointer"
            onClick={handleIconClick}
          >
            <img src={infoIcon} alt="Info Icon" className="" />
          </div>

           
          {showInfo && (
            <div className="w-[156px] h-[60px] absolute p-2 text-[10px] text-white bg-black rounded-md shadow-lg top-7 right-4">
              Price increases at $250k, $500k, and $750k. The first to hit $1M
              wins and launches.
            </div>
          )}
        </div>
        {/* end */}
        {/* <div className="bg-[#FFFFFF47] w-[100%] h-[16px] rounded-[30px]">
					<div
						className="bg-[#000] h-[16px] rounded-[30px]"
						style={{width: `${minMax(stageCurrent / (stageTarget || 1), 0, 1) * 100}%`}}
					/>
				</div> */}
        <div className="flex justify-between">
          <h4 className="text-[18.364px] font-[600] text-[#000]">USD Raised</h4>
          <h5 className="text-[18.364px] font-[600] text-[#000]">
			$0
            {/* {formatDollar(stageCurrent, true, 0, 0)} /{" "}
            {formatDollar(stageTarget, true, 0, 0)} */}
          </h5>
        </div>
      </div>
      <TokenInput
        label="You pay"
        defaultValue={paymentTokenValue}
        selectedToken={
          selectedPaymentToken
            ? {
                id: selectedPaymentToken.id,
                chain: selectedPaymentToken.chain,
                symbol: selectedPaymentToken.symbol.toUpperCase(),
                imgSrc:
                  tokenImageMap[selectedPaymentToken.symbol.toLowerCase()],
              }
            : null
        }
        onChange={(newVal) => {
          setPaymentTokenValue(newVal);
          const receiveTokenNum =
            (newVal * parseNum(selectedPaymentToken?.price)) /
            (parseNum(apiState.stage?.token_price) || 1);
          receiveTokenRef?.setVal(receiveTokenNum);
        }}
        onTokenChange={(token) =>
          setSelectedPaymentToken(
            apiState.paymentTokens.find(
              (currToken) => currToken.id === token.id
            ) ?? null
          )
        }
        tokenOptions={(apiState.paymentTokens ?? []).map((token) => ({
          id: token.id,
          chain: token.chain,
          symbol: token.symbol.toUpperCase(),
          imgSrc: tokenImageMap[token.symbol.toLowerCase()],
        }))}
        style={{ zIndex: 11 }}
        inputRef={setPaymentTokenRef}
      />
      <TokenInput
        label="You receive"
        defaultValue={receiveTokenValue}
        decimals={2}
        selectedToken={{
          id: 0,
          chain: "ERC-20",
          symbol: projectData.symbol,
          imgSrc: placeholderImg,
        }}
        onChange={(newVal) => {
          setReceiveTokenValue(newVal);
          const paymentTokenNum =
            (newVal * (parseNum(apiState.stage?.token_price) || 1)) /
            parseNum(selectedPaymentToken?.price);
          paymentTokenRef?.setVal(paymentTokenNum);
        }}
        inputRef={setReceiveTokenRef}
      />
      {accountData.isConnected && <ShareLabel />}
      {/* <CodeInputs /> */}
      <div className="pb-[10px] space-y-[5px] -my-1">
        <h5 className="text-[#000] text-[18.364px] font-[700] text-center">
          Accepting
        </h5>
        <div className="flex justify-center space-x-6">
          {acceptingTokens.map((token) => (
            <img
              key={token.id}
              src={tokenImageMap[token.symbol.toLowerCase()]}
              className="h-[29px] w-[29px]"
              alt={token.name}
            />
          ))}
        </div>
      </div>

      <button
        className={clsx(
          "bg-[#000] text-[#FFF] w-[100%] h-[41.319px] text-[21.425px] font-[700] rounded-[50px] transition-all duration-300 hover:bg-[#0184E2] hover:text-[#FFFFFF] hover:opacity-90 cursor-pointer",
          { "bg-[#888]": transactionLoading }
        )}
        onClick={() => {
          if (!accountData.isConnected) showConnectionModal();
          else buy();
        }}
      >
        {accountData.isConnected
          ? apiState.presaleEnded
            ? "Presale Ended"
            : "Buy"
          : "Connect Wallet"}
      </button>
      <div className="flex items-center justify-center ">
        <p className="text-[15px] font-normal text-black font-k2d capitalize leading-normal">
          Max Buy-in $25,000
        </p>
      </div>
      {createdTransaction && (
        <TransactionModal
          open={transactionModalVisible}
          onClose={() => setTransactionModalVisible(false)}
          transaction={createdTransaction}
        />
      )}
    </>
  );
};

export default {
  component: BuyTab,
  label: "Buy",
  icon: dollarIcon,
};

const ShareLabel = () => {
  const projectData = useContext(ApiContext);
  const userData = useStore(projectData.$userState);

  const fullCode = userData.user?.referral_code
    ? `${projectData.project.toUpperCase()}-${userData.user?.referral_code}`
    : "";
  const share = () => {
    const text = `Use my referral code for bonus tokens on ${projectData.project.toUpperCase()}`;
    const url = `${window.location.origin}?referral_code=${fullCode}`;
    try {
      navigator.share({
        text,
        url,
      });
    } catch (err) {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="flex px-4 py-2 gap-4 text-sm font-bold bg-[#00000078] text-[#fff] rounded-[14px]">
      <div className="flex flex-col flex-1 w-0">
        <p className="text-sm leading-3">Your Referral Code</p>
        <input
          readOnly
          value={fullCode ?? ""}
          size={0}
          className="p-0 text-lg font-bold bg-transparent rounded-lg "
        />
      </div>
      <button
        className="flex self-center items-center justify-between space-x-2 py-1 px-3 rounded-full border-[0.8px] border-[#8ED0FF3A] bg-[#0077D64A] hover:brightness-110"
        onClick={share}
      >
        Share
      </button>
      <div className="relative self-center cursor-pointer group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#fff"
            d="m13.683 10.08.63.407zM9.25 9a.75.75 0 0 0 1.5 0zm2 4.5a.75.75 0 0 0 1.5 0zm1.5 2.5a.75.75 0 0 0-1.5 0zm-1.5 1a.75.75 0 0 0 1.5 0zm10-5A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zM13.25 9c0 .25-.073.48-.198.675l1.262.812A2.74 2.74 0 0 0 14.75 9zm-2.5 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM11.25 13v.5h1.5V13zm1.802-3.325a8 8 0 0 1-.468.628c-.178.22-.386.473-.573.73-.369.507-.761 1.168-.761 1.967h1.5c0-.305.15-.64.474-1.084.159-.219.334-.43.528-.672.187-.232.389-.489.562-.757zM11.25 16v1h1.5v-1z"
          />
        </svg>
        <div className="transition-opacity pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 bg-[#191f1f] p-2 absolute top-full right-0 text-[#fff] w-48 sm:w-56 text-sm leading-4 rounded-lg z-[10]">
          If people buy using your referral code, both you and the purchaser get
          bonus tokens.
        </div>
      </div>
    </div>
  );
};

let loaded = false;

const CodeInputs = () => {
  const projectData = useContext(ApiContext);
  const userData = useStore(projectData.$userState);
  const [defaultBonusCode, setDefaultBonusCode] = useState("");
  const [defaultReferralCode, setDefaultReferralCode] = useState("");
  const [codeInputRef, setCodeInputRef] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const bonusCode = url.searchParams.get("bonus_code");
    if (bonusCode) setDefaultBonusCode(bonusCode);
    const referralCode = url.searchParams.get("referral_code");
    const projectPrefix = projectData.project.toUpperCase() + "-";
    if (referralCode && referralCode.startsWith(projectPrefix)) {
      setDefaultReferralCode(referralCode);
    } else if (!bonusCode) return;

    const timeout = setTimeout(() => {
      if ((bonusCode || referralCode) && !loaded) {
        const el = codeInputRef;
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      loaded = true;
    }, 500);
    return () => clearTimeout(timeout);
  }, [codeInputRef]);

  return (
    <div ref={setCodeInputRef} className="flex gap-3">
      <CodeInput
        label="Bonus Code"
        onApply={(code) =>
          userApplyBonusCode(projectData.$userState, code, { noToast: true })
        }
        onReset={() => resetUserBonusCode(projectData.$userState)}
        applied={userData.appliedBonusCode}
        appliedText={`Applied (+${userData.appliedBonusCode?.percentage.toFixed(
          0
        )}%)`}
        defaultValue={defaultBonusCode}
      />
      <CodeInput
        label="Referral Code"
        errorGetter={(fullCode) => {
          const projectPrefix = projectData.project.toUpperCase() + "-";
          if (!fullCode.startsWith(projectPrefix))
            return `Invalid code, must start with ${projectPrefix}`;
          return null;
        }}
        onApply={async (fullCode) => {
          const projectPrefix = projectData.project.toUpperCase() + "-";
          const code = fullCode.split(projectPrefix)[1] ?? "";
          await userUpdateReferralCode(projectData.$userState, code, {
            noToast: true,
          });
        }}
        onReset={() => {
          userResetReferralCode(projectData.$userState);
        }}
        applied={!!userData.user?.referred_by}
        defaultValue={defaultReferralCode}
      />
    </div>
  );
};

/**
 * @param {object} props
 * @param {string} props.label
 * @param {boolean} props.applied
 * @param {string} [props.appliedText]
 * @param {string} [props.defaultValue]
 * @param {(code: string) => Promise<unknown} props.onApply
 * @param {() => unknown} props.onReset
 * @param {(code) => string | null} [props.errorGetter]
 * @returns
 */
const CodeInput = ({
  label,
  applied,
  defaultValue,
  appliedText,
  onApply,
  onReset,
  errorGetter,
}) => {
  const [code, setCode] = useState(defaultValue ?? "");
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    if (!code) setCode(defaultValue);
  }, [defaultValue]);

  const apply = () => {
    if (!code) return toast.error("No code provided");
    const error = errorGetter(code);
    if (error) return toast.error(error);
    if (applying) return;
    setApplying(true);
    toast
      .promise(onApply(code), {
        loading: `Applying ${label.toLowerCase()}`,
        error: (err) =>
          api.getApiErrorMessage(err, `Error applying ${label.toLowerCase()}`),
        success: `Successfully applied ${label.toLowerCase()}`,
      })
      .finally(() => setApplying(false));
  };

  const hasDefault = !!defaultValue;

  return (
    <div className="flex items-center flex-1 h-10 gap-1">
      <div className="relative cursor-pointer group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#000"
            d="m13.683 10.08.63.407zM9.25 9a.75.75 0 0 0 1.5 0zm2 4.5a.75.75 0 0 0 1.5 0zm1.5 2.5a.75.75 0 0 0-1.5 0zm-1.5 1a.75.75 0 0 0 1.5 0zm10-5A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zM13.25 9c0 .25-.073.48-.198.675l1.262.812A2.74 2.74 0 0 0 14.75 9zm-2.5 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 9zM12 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 6.25zM11.25 13v.5h1.5V13zm1.802-3.325a8 8 0 0 1-.468.628c-.178.22-.386.473-.573.73-.369.507-.761 1.168-.761 1.967h1.5c0-.305.15-.64.474-1.084.159-.219.334-.43.528-.672.187-.232.389-.489.562-.757zM11.25 16v1h1.5v-1z"
          />
        </svg>
        <div className="transition-opacity pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 bg-[#191f1f] p-2 absolute top-full -left-4 md:left-0 text-[#fff] w-40 md:w-56 text-sm leading-4 rounded-lg">
          To successfully apply the {label.toLowerCase()}, input the{" "}
          {label.toLowerCase()} you wish to use, click on the submit button and
          confirm the message with your wallet.
        </div>
      </div>
      <div className="flex-1 gap-2 font-bold flex items-center self-stretch bg-[#00000078] rounded-lg text-[0.875rem]">
        {applied ? (
          <p className="flex-1 pl-2 text-[#30b047]">
            {appliedText ?? "Applied Code"}
          </p>
        ) : (
          <input
            className="bg-transparent self-stretch pl-2 w-0 flex-1 placeholder:text-[#ddd] text-[#fff] rounded-lg"
            placeholder={label}
            size={0}
            value={code}
            onInput={(e) => {
              setCode(e.currentTarget.value);
            }}
          />
        )}
        <button
          className={clsx(
            "text-[0.75rem] h-[1.75rem] min-w-[1.75rem] items-center justify-center flex-shrink-0 px-1.5 py-1.5 mr-1 bg-[#000] text-[#fff] flex self-center rounded-lg hover:bg-[#111] transition-colors",
            { "animate-pulse": hasDefault }
          )}
          onClick={() => {
            if (!applied) apply();
            else onReset?.();
          }}
          style={{ animationIterationCount: "4" }}
        >
          {!applied ? (
            "Apply"
          ) : (
            <svg
              className="w-[1em] h-[1rem] flex-shrink-0"
              strokeWidth="2"
              color="currentColor"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-label="Reset"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 4 23 10 17 10"></path>
              <path d="M1 20 1 14 7 14"></path>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
