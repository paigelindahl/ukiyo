import React from "react";
import { Bubbles } from "./Bubbles";
import "./styles/Meditate.scss";
import { TopNav } from './TopNav';

export function Yoga(props) {
  return (
  <>
    <TopNav/>
    <Bubbles
      item1={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/6ughUyUmKEo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="1"
        ></iframe>
      }
      urlSource1={"https://www.youtube.com/embed/6ughUyUmKEo"}
      title1={"Vinyasa Flow Yoga (20min)"}
      
      item2={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/KEYSO-Tc2Go?start=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="2"
        ></iframe>
      }
      urlSource2={"https://www.youtube.com/embed/KEYSO-Tc2Go?start=1"}
      title2={"Full Body Vinyasa Flow (30min)"}
      
      item3={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/hnrkkvx4d50"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="3"
        ></iframe>
      }
      urlSource3={"https://www.youtube.com/embed/hnrkkvx4d50"}
      title3={"Morning Yoga Flow (20min)"}

      item4={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/6ughUyUmKEo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="4"
        ></iframe>
      }
      urlSource4={"https://www.youtube.com/embed/6ughUyUmKEo"}
      title4={"Full Body Yoga (20min)"}
      
      item5={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/_kl_DxglATI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="5"
        ></iframe>
      }
      urlSource5={"https://www.youtube.com/embed/_kl_DxglATI"}
      title5={"Vinyasa Flow Yoga(45 min)"}
    />
    <Bubbles
      item1={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/6ughUyUmKEo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="6"
        ></iframe>
      }
      urlSource1={"https://www.youtube.com/embed/6ughUyUmKEo"}
      title1={"Vinyasa Flow Yoga(20min)"}
      
      item2={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/KEYSO-Tc2Go?start=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="7"
        ></iframe>
      }
      urlSource2={"https://www.youtube.com/embed/KEYSO-Tc2Go?start=1"}
      title2={"Full Body Vinyasa Flow (30min)"}
      
      item3={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/hnrkkvx4d50"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="8"
        ></iframe>
      }
      urlSource3={"https://www.youtube.com/embed/hnrkkvx4d50"}
      title3={"Morning Yoga Flow (20min)"}
      
      item4={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/6ughUyUmKEo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="9"
        ></iframe>
      }
      urlSource4={"https://www.youtube.com/embed/6ughUyUmKEo"}
      title4={"Full Body Yoga (20min)"}
      
      item5={
        <iframe
          width="300"
          height="500"
          src="https://www.youtube.com/embed/_kl_DxglATI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="10"
        ></iframe>
      }
      urlSource5={"https://www.youtube.com/embed/_kl_DxglATI"}
      title5={"Vinyasa Flow Yoga (45min)"}
    />
    </>
  );
}
