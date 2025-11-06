import React from 'react'
import './css3.css'
function asgnp3(props) {
    return (
        <div id='card'>
            <h1>{props.name}</h1>
            <img src={props.img} alt="" height={200} width={200} />
            <h3>{props.rate}</h3>
        </div>
    )
}
export default asgnp3
