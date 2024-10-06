import { v4 as uuid } from 'uuid'
const catId = uuid()
const birdId = uuid()
const soccerBallId = uuid() // Generate a unique ID for the soccer ball
const carId = uuid() // Generate a unique ID for the car

export const SPRITE_WIDTH = 85;
export const SPRITE_HEIGHT = 85;

export default [
    {
        id: catId,
        name: "cat",
        position: { x: 0, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: birdId,
        name: "bird",
        position: { x: 280, y: 0 }, // Adjust position if needed
        rotation: 0,
        actions: [],
    },
  
    {
        id: soccerBallId, // Add the soccer ball entry
        name: "soccerBall",
        position: { x: 560, y: 0 }, // Set initial position for the soccer ball
        rotation: 0,
        actions: [],
    },
    {
        id: carId, // Add the car entry
        name: "car",
        position: { x: 700, y: 0 }, // Set initial position for the car
        rotation: 0,
        actions: [],
    }
]