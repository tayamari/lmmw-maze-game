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

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper to get image src by name
const getImageSrc = (name) => {
    const found = imageMap.find(img => img.name === name);
    return found ? found.src : "";
};

// Exported function to get a random ingredient image src
const getRandomIngredientImage = () => {
    const randomName = getRandomElement(ingredients);
    return getImageSrc(randomName);
};

export const randomIngredient = getImageSrc(getRandomElement(ingredients));
export const randomCritter = getImageSrc(getRandomElement(critters));
export { ingredients, critters, getImageSrc };



