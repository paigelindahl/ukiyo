import React, {useEffect, useState} from "react";
import { Bubbles } from "./Bubbles";
import "./styles/Meditate.scss";
import { TopNav } from './TopNav';
import { LogoProfile } from './LogoProfile';

export function Yoga() {
  const [yoga, setYoga ] = useState([])

  const getYogaLinks = async() => {

    try {

     const response = await fetch("http://localhost:8080/yoga")

     const jsonData = await response.json();
     setYoga(jsonData);
    //  console.log('jsonData :', jsonData);
    } catch(err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getYogaLinks();
  }, []);

    return (
  <>
    <LogoProfile/>
    <TopNav/>
    <Bubbles source={yoga}/>
  </>
  );
}


// urlSource1={"https://www.youtube.com/embed/6ughUyUmKEo"}
// title1={"Vinyasa Flow Yoga (20min)"}
// urlSource5={"https://www.youtube.com/embed/_kl_DxglATI"}
// title5={"Vinyasa Flow Yoga (45min)"}
// urlSource4={"https://www.youtube.com/embed/6ughUyUmKEo"}
// title4={"Full Body Yoga (20min)"}
// urlSource3={"https://www.youtube.com/embed/hnrkkvx4d50"}
//       title3={"Morning Yoga Flow (20min)"}
//       urlSource2={"https://www.youtube.com/embed/KEYSO-Tc2Go?start=1"}
//       title2={"Full Body Vinyasa Flow (30min)"}

        // <iframe
        //   width="300"
        //   height="500"
        //   src="https://www.youtube.com/embed/_kl_DxglATI"
        //   frameborder="0"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //   allowfullscreen
        //   title="5"
        // ></iframe>