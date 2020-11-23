import React from "react";
import "./styles/Dashboard.scss";
import { Link } from "react-router-dom";

export function Dashboard(props) {
  return (
    <div className="bubble-container">
      <div className="one">
        <Link to="/yoga" className="dashboard-title">
          <h4>Yoga</h4>
          <img
            className="yoga-icon"
            height="130px"
            width="120px"
            src="https://www.flaticon.com/svg/static/icons/svg/2647/2647591.svg"
            alt="yoga"
          />
        </Link>
      </div>
      <div className="two">
        <Link to="/tasks" className="dashboard-title">
          <h4>Tasks</h4>
          <img
            className="task-icon"
            height="75px"
            width="75px"
            src="https://www.flaticon.com/svg/static/icons/svg/3176/3176366.svg"
            alt="task"
          />
        </Link>
      </div>
      <div className="three">
        <Link to="/favourites" className="dashboard-title">
          <h4>Favourites</h4>
          <img
            className="fav-icon"
            height="75px"
            width="70px"
            src="https://www.flaticon.com/svg/static/icons/svg/686/686378.svg"
            alt="favourites"
          />
        </Link>
      </div>
      <div className="four">
        <Link to="/journal" className="dashboard-title">
          <h4>Journal</h4>
          <img
            className="journal-icon"
            height="120px"
            width="100px"
            src="https://www.flaticon.com/svg/static/icons/svg/3075/3075818.svg"
            alt="journal"
          />
        </Link>
      </div>
      
      <div className="five">
        <Link to="/meditate" className="dashboard-title">
          <h4 className="meditate-text">Meditate</h4>
          <img
            className="meditate-icon"
            height="80px"
            width="100px"
            src="https://www.flaticon.com/svg/static/icons/svg/1721/1721095.svg"
            alt="meditate"
          />
        </Link>
      </div>
    </div>
  );
}
