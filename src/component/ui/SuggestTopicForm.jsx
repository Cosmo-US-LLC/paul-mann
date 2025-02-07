export default function SuggestTopicForm() {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-[1000px]">
          <h1 className="mb-4 text-lg font-bold font-[RFDewiExtended] text-gray-800">Suggest a Topic</h1>
          <form className="space-y-4">
            {/* Name and Email Fields */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-3 text-white font-[Roboto] placeholder-white bg-[#073B63] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 text-white font-[Roboto] placeholder-white bg-[#073B63] focus:outline-none"
              />
            </div>
  
            {/* Question or Topic Text Area */}
            <textarea
              placeholder="Question or topic you want to hear about on the podcast"
              className="w-full h-32 p-3 text-white font-[Roboto] placeholder-white bg-[#073B63] focus:outline-none"
            ></textarea>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 text-black font-[Roboto] bg-white border border-gray-400 hover:bg-gray-100"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  