import React from 'react'

export const multiply = (a,b) => {
    return a * b
}


export default function Recipies({recipies}) {
    return (
        <div>
            {recipies.map(recipe => {
                console.log(recipe.ingrdients)
                return(
                    <div key={Date.now + recipe.name}>
                        <h3>Name: {recipe.name}</h3>
                        <h4>Course: {recipe.course}</h4>
                        <h4>Technique: {recipe.technique}</h4>
                    </div>
                )
            })}
        </div>
    )
}
