import {
  ADDING_SPORT_NAME,
  ADDING_SPORT_LINK,
  ADDING_SPORT_COMMENTARY,
  ADDING_SPORT_TITLE,
} from "./global.js";
import { IMAGES_DATA } from "./data.js";

export function VERIFY_ADD_SPORT_LINK() {}

const mYdata = 
  {
    _id: "basketballbasketball",
    class: "basketballbasketball",
    title: "basketballbasketball",
    link: "./assets/images/activites/basketballbasketball.jpg",
    favlink: "../assets/images/activites/basketballbasketball.jpg",
    alt: "basketballbasketball Image",
    comment: "Gérebasketballbasketballr le ballon",
    h1: "Le basketballbasketball",
  };

IMAGES_DATA.push(mYdata)

IMAGES_DATA.slice(14);


console.log(IMAGES_DATA.slice(1,15))
