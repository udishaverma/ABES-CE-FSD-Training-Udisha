import React from 'react'
import './Card.css'
function Card(props) {
    return (
        <div id='udi'>
            <img src="https://images.icon-icons.com/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png" alt="" height={100} width={100} />
            <h1>{props.name}</h1>
            <h3>{props.edu}</h3>
        </div>
    )
}

export default Card
