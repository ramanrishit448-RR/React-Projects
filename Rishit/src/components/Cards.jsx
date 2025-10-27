import React from 'react'

const Cards = (props) => {

    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button><a href="https://www.youtube.com/watch?v=3LRZRSIh_KE&t=5265s">View Profile</a></button>
        </div>
    )
}

export default Cards