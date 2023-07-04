import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Desing",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAF8",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* should contain one skill component for 
                each web dev skill
                customized with props*/}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="squirrel.jpeg" alt="Squirrel" />;
}

function Intro() {
  return (
    <div>
      <h1>A Wild Developer</h1>
      <p>Joyful full-stack homebuilder, an earth lover. Enjoy pizzas</p>
    </div>
  );
}

function SkillList() {
  const skills = skillData;

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "🧘🏻‍♀️"}
        {skillObj.level === "intermediate" && "🏊🏻‍♀️"}
        {skillObj.level === "advanced" && "🧗🏻‍♀️"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
