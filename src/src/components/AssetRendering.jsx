import React from "react";
import citrus from "../assets/sprites/citrus.png";
import coconut from "../assets/sprites/coconut.png";
import eggs from "../assets/sprites/eggs.png";
import garlic from "../assets/sprites/garlic.png";
import milkBottle from "../assets/sprites/milk-bottle.png";
import orange from "../assets/sprites/orange.png";
import cabbage from "../assets/sprites/cabbage.png";
import chiliPepper from "../assets/sprites/chili-pepper.png";
import moosebear from "../assets/sprites/moosebear.png";
import honeySpoon from "../assets/sprites/honey-spoon.png";
import honey from "../assets/sprites/honey.png";
import onion from "../assets/sprites/onion.png";
import pumpkin from "../assets/sprites/pumpkin.png";
import orangeJuice from "../assets/sprites/orange-juice.png";
import beet from "../assets/sprites/beet.png";

const imageMap = [
  { name: "citrus", src: citrus },
  { name: "coconut", src: coconut },
  { name: "eggs", src: eggs },
  { name: "garlic", src: garlic },
  { name: "milk-bottle", src: milkBottle },
  { name: "orange", src: orange },
  { name: "cabbage", src: cabbage },
  { name: "chili-pepper", src: chiliPepper },
  { name: "moosebear", src: moosebear },
  { name: "honey-spoon", src: honeySpoon },
  { name: "honey", src: honey },
  { name: "onion", src: onion },
  { name: "pumpkin", src: pumpkin },
  { name: "orange-juice", src: orangeJuice },
  { name: "beet", src: beet },
];

const ingredients = [
    "eggs", "garlic", "milk-bottle", "citrus", "coconut", "orange",
    "cabbage", "chili-pepper", "honey-spoon", "honey", "onion",
     "pumpkin", "orange-juice","beet"];
     
const critters = ["moosebear"];

const getRandomElements = (arr, k) => {
    for (let i = arr.length - 1; i > 0; i--) {
        // Choose a random index before the actual element
        let j = Math.floor(Math.random() * (i + 1));
        // swap [a,b] by [b,a]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, k);
};

// Helper to get image src by name
const getImageSrc = (name) => {
    const found = imageMap.find(img => img.name === name);
    return found ? found.src : "";
};

const getImagesForElements = (arr) => {
    const images = [];
    for (let element of arr) {
        images.push(getImageSrc(element));
    }
    return images;
}

export const randomIngredients = getImagesForElements(getRandomElements(ingredients, 3));
export const randomCritter = getImagesForElements(getRandomElements(critters, 1));
export { ingredients, critters, getImageSrc };



