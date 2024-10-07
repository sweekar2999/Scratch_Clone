import { v4 as uuid } from 'uuid'
const catId = uuid()
const birdId = uuid()
const soccerBallId = uuid() 
const carId = uuid() 

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
        position: { x: 280, y: 0 }, 
        rotation: 0,
        actions: [],
    },
  
    {
        id: soccerBallId, 
        name: "soccerBall",
        position: { x: 560, y: 0 }, 
        rotation: 0,
        actions: [],
    },
    {
        id: carId, 
        name: "car",
        position: { x: 700, y: 0 }, 
        rotation: 0,
        actions: [],
    }
]