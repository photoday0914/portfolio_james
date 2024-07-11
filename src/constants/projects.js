import realestate from "../assets/EstateIn Real Estate.png";
import dogepound from "../assets/dogepound.png";
import sportzag from "../assets/sportzag.png"
import freegameshub from "../assets/Free Games Hub.png";
import perfume from "../assets/Perfume.png";
import mellow from "../assets/mellow.png";
// import tourist from "../assets/tourist.png";

export const PROJECTS = [
  {
    id: "1",
    title: "Sportzag",
    description:
      "SPORTZAG is a free-to-play, non-gambling fan engagement website that does not require a monetary investment to engage in virtual game play.",
    image: {
      src: sportzag,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://sportzag.com/",
    },
    technologies: ["#React", "#Laravel", "#Videa Streaming"],
  },
  {
    id: "2",
    title: "EstateIn Real Estate",
    description:
      "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
    image: {
      src: realestate,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://real-estate-business-website.vercel.app/",
      repo: "https://github.com/photoday0914/EstateIn-Real-Estate",
    },
    technologies: ["#React", "#Redux", "#MongoDB"],
  },
  {
    id: "3",
    title: "Free Games Hub",
    description:
      "Embark on a quest for the best free-to-play thrills! Discover diverse digital realms, each offering exciting adventures. Unleash the ultimate gaming experiences and let the quest begin!",
    image: {
      src: freegameshub,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://www.freegameshub.fun/",
      repo: "https://github.com/photoday0914/Free-Games-Hub",
    },
    technologies: ["#Laravel", "#VueJS", "#MySQL"],
  },
  {
    id: "4",
    title: "Mellow Mushroom",
    description:
      "For over 40 years, Mellow Mushroom Pizza Bakers has been serving up fresh, stone-baked pizzas to order in an eclectic, art-filled, and family-friendly environment.",
    image: {
      src: mellow,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://mellowmushroom.com/",
    },
    technologies: ["#Node.js", "#Express.js", "#MongoDB"],
  },
  {
    id: "5",
    title: "The Doge Pound",
    description:
      "Doge Pound Studios is a gaming studio established by the teams behind The Doge Pound and Deez NFT.",
    image: {
      src: dogepound,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://thedogepoundnft.com/",
    },
    technologies: ["#React", "#Solidity", "#Ether.js"],
  },
  {
    id: "6",
    title: "Perfume",
    description:
      "Find your favorite perfume or accentuate your style with a new scent from a top fragrance brand.",
    image: {
      src: perfume,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://perfuma.netlify.app/",
      repo: "https://github.com/photoday0914/Perfume",
    },
    technologies: ["#Wordpress", "#Bootstrap"],
  },
];
