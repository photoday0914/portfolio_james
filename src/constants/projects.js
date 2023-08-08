import clearscore from "../assets/clearscore.png";
import dogepound from "../assets/dogepound.png";
import dxdy from "../assets/dxdy.png";
import fooddelivery from "../assets/fooddelivery.png";
import mellow from "../assets/mellow.png";
import tourist from "../assets/tourist.png";

export const PROJECTS = [
  {
    id: "1",
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
    id: "2",
    title: "DXDY",
    description:
      "dYdX (DYDX) is a decentralized exchange platform for crypto currency margin trading for assets like BTC, ETH, SOL, DOT, and more.",
    image: {
      src: dxdy,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://dydx.exchange/",
    },
    technologies: ["#Next.js", "#Redux", "#Solidity", "#Hardhat"],
  },
  {
    id: "3",
    title: "Clear Score",
    description:
      "ClearScore is the first company in the United Kingdom to provide free credit scores and reports, along with advice to help consumers make better financial decisions.",
    image: {
      src: clearscore,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "https://www.clearscore.com/",
    },
    technologies: ["#React", "#Redux", "#Node.js"],
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
    title: "Tourist",
    description:
      "We are World Nomads like you, travel is in our blood and exploring is our way of life.",
    image: {
      src: tourist,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "#",
    },
    technologies: ["#Vue.js", "#Vuetify", "#Node.js"],
  },
  {
    id: "6",
    title: "Food Delivery",
    description:
      "Food, coffee, atmosphere, customer service - we strive to provide an experience for you that will exceed your expectations.",
    image: {
      src: fooddelivery,
      placeholderSrc: "There is only one image.",
    },
    links: {
      site: "#",
    },
    technologies: ["#Laravel", "#Bootstrap"],
  },
];
