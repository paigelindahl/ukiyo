import React, {useState, useEffect} from "react";
import { Bubbles } from "./Bubbles";
import { TopNav } from "./TopNav";
import { LogoProfile } from './LogoProfile';

export function Meditate() {
  const [meditation, setMeditation] = useState([])

  const getMeditationLinks = async() => {

    try {

     const response = await fetch("/meditate")

     const jsonData = await response.json();
     setMeditation(jsonData);
     console.log('jsonData :', jsonData);
    } catch(err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getMeditationLinks();
  }, []);
  
  return (
    <>
      <LogoProfile/>
      <TopNav />
      <Bubbles source={meditation}
      />
    </>
  );
}
