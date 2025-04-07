export const podcastData = [
  {
    date: "04.03.2025",
    youtubeId: "4snXR5Scgvc",  
    thumbnail: "/mobile-assets/Podcasts/Thumbnail5.png",  
    episode: "EP – 2",
    title: "Inside California's Rainwater Program | Water Champions Podcast Ep.2 with Noelle Johnson",
    description: "In this episode, Noelle Johnson discusses California's rainwater harvesting program and its implications for water sustainability in the state. Learn how this program is helping communities save water, the challenges involved, and its potential for future impact."
  },
  {
    date: "04.03.2025",
    youtubeId: "d8mw9kot9pk", 
    thumbnail: "/mobile-assets/Podcasts/Thumbnail4.png",  
    episode: "EP – 1",
    title: "How Rainwater Harvesting Can Replace Water Supply | Water Champions Podcast Ep.1 with Rain Brothers",
    description: "The first episode of the series dives deep into the concept of rainwater harvesting and its role in sustainable water supply. The Rain Brothers explore different methods of rainwater collection and how it can change the way we think about water conservation."
  },
];



export const sliderData = [
    {
      text: '“Love this podcast!”',
      user: 'By SHU12323',
    },
    {
      text: '“Amazing and life-changing podcast”',
      user: 'By ChrisAlan83',
    },
    {
      text: '“Jay has a special energy that draws people towards him, and a talent at taking people on a journey”',
      user: 'By ChrisAlan83',
    },
    {
      text: '“Thank you Paul Mann for your spiritual wisdom and insight.”',
      user: 'By PearlJelly9',
    },
    {
      text: '“Thank you Paul Mann for your spiritual wisdom and insight.”',
      user: 'By PearlJelly9',
    },
  ];



export const formatDate = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");  
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
  };
