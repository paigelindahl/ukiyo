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
