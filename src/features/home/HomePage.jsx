import React from "react";

//creates the home page with the button to start
const HomePage = ({ history }) => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui text container">
        <h1 className="ui inverted stackable header">
          <img
            className="ui image massive"
            src="/assets/baseline_restaurant_white_18dp.png"
            alt="logo"
          />
          <div className="content">Carlo Di Formaggio</div>
        </h1>
        <h2>An Authentic Italian Experience</h2>
        <div
          onClick={() => history.push("/kitchen")}
          className="ui huge white inverted button"
        >
          Kitchen
          <i className="right arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
