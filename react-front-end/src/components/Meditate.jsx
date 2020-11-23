import React from "react";
import { Bubbles } from "./Bubbles";
import { TopNav } from "./TopNav";

export function Meditate(props) {
  return (
    <>
      <TopNav />
      <Bubbles
        item1={
          <iframe
            src="https://open.spotify.com/embed/track/17yh12hLaAtA8ZD5hH2pvp"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title1={"10-Minute Unguided Meditation"}
        item2={
          <iframe
            src="https://open.spotify.com/embed/track/7szVmfe3Y110CS9SHamWZH"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title2={"10-Minute Evening Stroll Meditation"}
        item3={
          <iframe
            src="https://open.spotify.com/embed/track/6mi5lYz9NuIlmRfO8bT4gm"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title3={"5-Minute Guided Meditation"}
        item4={
          <iframe
            src="https://open.spotify.com/embed/track/7tnesh1ClZdJgJLP1H0ea3"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title4={"10-Minute Guided Meditation"}
        item5={
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/6eOWDa0NnCM6hKZtmOJUYC"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title5={"10-Minute Choosing Positivity"}
      />
      <Bubbles
        item1={
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/4gwq1ni2o1EvM8iKdSxPal"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title1={"12-Minute Focusing When Stressed"}
        item2={
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/76mdZc1KbxnAYTW6AIa7n7"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title2={"9-Minute Self Care to Start Your Day"}
        item3={
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/51BzrDx4yfDtsfhX7IZEpj"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title3={"11-Minute Be Here Now"}
        item4={
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/2JQl2cyZJgQQVuiLsFq4AT"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title4={"12-Minute Getting Through Today"}
        item5={
          <iframe
            src="https://open.spotify.com/embed-podcast/episode/7eHgymS0ByRNefMKDhZrZa"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        }
        title5={"10-Minute Gratitude to Improve Your Mental Health"}
      />
    </>
  );
}
