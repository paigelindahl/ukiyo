import React, {useEffect, useState} from "react";
import { Bubbles } from "./Bubbles";
import { TopNav } from './TopNav';
import { LogoProfile } from './LogoProfile';

export function Yoga() {
  const [yoga, setYoga ] = useState([])

  const getYogaLinks = async() => {

    try {

     const response = await fetch("/yoga")

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
