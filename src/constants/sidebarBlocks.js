import React from 'react';
export const motionColor = {
    bgColor: "bg-yellow-500",
    textColor: "text-white"
}
export const controlColor = {
    bgColor: "bg-blue-500",
    textColor: "text-white"
}

export const MOVE_STEPS = "MoveSteps"
export const TURN_DEGREES = "TurnDegrees"
export const GO_TO = "GoTo"
export const REPEAT = "Repeat"
export default {
    Motion: [
        {
            text: 'Move __ steps (e.g., 10)',
            type: MOVE_STEPS,
            defaultPayload: { steps: 10 },
            ariaLabel: "Move steps input" // Added accessibility attribute
        },
        {
            text: 'Turn __ degrees (e.g., 90)',
            type: TURN_DEGREES,
            defaultPayload: { degree: -15 },
            ariaLabel: "Turn degrees input" // Added accessibility attribute
        },
        {
            text: "Go To x:__ y: __ (e.g., x: 100, y: 100)",
            type: GO_TO,
            defaultPayload: { x: 100, y: 100 },
            ariaLabel: "Go to coordinates input" // Added accessibility attribute
        },
    ],
    Control: [
        {
            type: REPEAT,
            text: "Repeat Animation",
            defaultPayload: {},
            ariaLabel: "Repeat animation input" // Added accessibility attribute
        },
    ],
}