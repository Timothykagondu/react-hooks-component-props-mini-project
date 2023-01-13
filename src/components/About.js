import React from 'react'

const About = (props) => {
  return (
    <div>
        <aside>

            <img src= {props.image ||  "https://via.placeholder.com/215" }  alt="blog logo"></img>

            <p>{props.about}</p>

        </aside>
        
    </div>
  )
}

export default About