import {characterImages} from "../strapi-assets/characters/character-img"
import planetImages from '../strapi-assets/planets/planets-img';



const planets = [
    { image: planetImages.planet9, name: 'Planet Alpha', pop: 235, id: 1 },
    { image: planetImages.planet8, name: 'Planet Alpha', pop: 235, id: 2 },
    { image: planetImages.planet7, name: 'Planet Alpha', pop: 235, id: 3 },
    { image: planetImages.planet6, name: 'Planet Alpha', pop: 235, id: 4 },
    { image: planetImages.planet6, name: 'Planet Alpha', pop: 235, id: 5 },
    { image: planetImages.planet5, name: 'Planet Alpha', pop: 235, id: 6 },
    { image: planetImages.planet1, name: 'Planet Alpha', pop: 235, id: 7 },
    { image: planetImages.planet2, name: 'Planet Alpha', pop: 235, id: 8 },
    { image: planetImages.planet2, name: 'Planet Alpha', pop: 235, id: 9 },
    { image: planetImages.planet4, name: 'Planet Alpha', pop: 235, id: 10 },
    { image: planetImages.planet3, name: 'Planet Alpha', pop: 235, id: 11 },
    { image: planetImages.planet5, name: 'Planet Alpha', pop: 235, id: 12 }
  ]

  const characters = [
    { image: characterImages.character7, name: 'Brooklyn Simmons', desc: "Brooklyn is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 1 },
    { image: characterImages.character13, name: 'Cameron Williamson', desc: "Cameron is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 2 },
    { image: characterImages.character2, name: 'Leslie Alexander', desc: "Leslie is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 3 },
    { image: characterImages.character8, name: 'Kristin Watson', desc: "Kristin is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 4 },
    { image: characterImages.character5, name: 'Jenny Wilson', desc: "Jenny is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 5 },
    { image: characterImages.character12, name: 'Marvin McKinney', desc: "Marvin is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 6 },
    { image: characterImages.character6, name: 'Jerome Bell', desc: "Jerome is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 7 },
    { image: characterImages.character4, name: 'Guy Hawkins', desc: "Guy is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 8 },
    { image: characterImages.character10, name: 'Robert Fox', desc: "Robert is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 9 },
    { image: characterImages.character3, name: 'Diego Vega', desc: "Diego is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 10 },
    { image: characterImages.character1, name: 'Dawn Weir', desc: "Dawn is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 11 },
    { image: characterImages.character9, name: 'Eleanor Pena', desc: "Eleanor is really a nice person. She's been living on planet Alpha for the last 10 years", friends: 23, id: 12 }
  ]

 
  export  {planets, characters}