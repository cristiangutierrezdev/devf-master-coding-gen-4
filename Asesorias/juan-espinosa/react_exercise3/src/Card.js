import React, {useState} from 'react';
import "./cardStyles.css";
import CountryInforCards from "./CountryInfoCard"

function Card(props) {
  const [isShowing, setIsShowing] = useState(false)

  const cambiarIsShowing = ()=>{
    setIsShowing(!isShowing)
  }

  return (
    <main className="cardStyle">
      <div className="cardStyles__Click">
        <img className="CardStyle_img" src={props.img} alt = "no existing file"></img>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button className="cardStyle_btn" onClick={cambiarIsShowing}> More information</button>
      </div>
      <div className="ShowingInformation">
        {isShowing ? <CountryInforCards title={props.title} img={props.img} desc={props.desc}/> : ''}
      </div>
    </main>
  )
}

export default Card