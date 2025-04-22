import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Project Portfolio</h1>
      </header>
      <main>
        <p>
          Hi, my name is Leon, I'm a 23 year old computer science graduate. I
          graduated from Newcastle University with a 2.1, doing my dissertation
          on Procedural Planet Generation in Game Design.
        </p>
        <p>
          I've created this Portfolio to showcase my work and also further
          develop my fullstack skills. I created this with react but am also
          proficcient in python, C# and javascript.
        </p>
        <p>If you would like to see more of my work please this button here:</p>
        <Link to="/Projects">
          <button>Click Here!</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
