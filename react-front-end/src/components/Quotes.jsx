import React, { useState, useEffect } from "react";
import axios from "axios";
import { FavouriteBtn } from "./FavouriteBtn";
import "./styles/Quotes.scss";

export function Quotes(props) {
  const [quotes, setQuotes] = useState([]);

  const apiURL = "https://type.fit/api/quotes";

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    const singleQuote = response.data.filter((quote) =>
      quote.text.includes(
        "Trust yourself. You know more than you think you do."
      )
    );

    setQuotes(singleQuote);
    console.log("this is quotes ", quotes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {quotes.map((quote) => (
        <div className="quote-container">
          <div className="text-heart">
            <h5>QUOTE OF THE DAY</h5>
            <FavouriteBtn />
          </div>
          <div className="quote-content">
            <p>"{quote.text}"</p>
            <p>- {quote.author}</p>
          </div>
        </div>
      ))}
    </>
  );
}
