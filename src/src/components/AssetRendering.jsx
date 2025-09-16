import React from "react";

const imageMap = [
    { name: 'citrus', src: '/src/assets/sprites/citrus.png' },
    { name: 'coconut', src: '/src/assets/sprites/coconut.png' },
    { name: 'eggs', src: '/src/assets/sprites/eggs.png' },
    { name: 'garlic', src: '/src/assets/sprites/garlic.png' },
    { name: 'milk-bottle', src: '/src/assets/sprites/milk-bottle.png' },
    { name: 'orange', src: '/src/assets/sprites/orange.png' },
    { name: 'cabbage', src: '/src/assets/sprites/cabbage.png' },
    { name: 'chilli-pepper', src: '/src/assets/sprites/chilli-pepper.png' },
    { name: 'crab', src: '/src/assets/sprites/crab.png' },
    { name: 'honey-spoon', src: '/src/assets/sprites/honey-spoon.png' },
    { name: 'honey', src: '/src/assets/sprites/honey.png' },
    { name: 'onion', src: '/src/assets/sprites/onion.png' },
    { name: 'pumpkin', src: '/src/assets/sprites/pumpkin.png' },
    { name: 'orange-juice', src: '/src/assets/sprites/orange-juice.png' },
    { name: 'beet', src: '/src/assets/sprites/beet.png' },
];

const ingredients = [
    "eggs", "garlic", "milk-bottle", "citrus", "coconut", "orange",
    "cabbage", "chilli-pepper", "honey-spoon", "honey", "onion",
     "pumpkin", "orange-juice","beet"];
     
const critters = ["crab"];

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



