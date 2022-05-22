import React from "react";
import classes from "./Card.module.css";
import Skill from "../UI/Skill";

const Card = ({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  filterHandler,
}) => {
  return (
    <div className={`${classes.box} ${isFeatured && classes.border}`}>
      <div className={classes.divide}>
      <img
        className={classes.image}
        src={require(`../../assets/${logo}`)}
        alt={company}
      />
      <div className={classes.styling}>
        <div className={classes.spacing}>
          <span className={classes.title}>{company}</span>
          {isNew && <span className={classes.new}>NEW!</span>}
          {isFeatured && <span className={classes.featured}>FEATURED</span>}
        </div>
        <h3 className={classes.spacing}>{position}</h3>
        <span
          className={classes.details}
        >{`${postedAt} .  ${contract} .  ${location}`}</span>
      </div>
      </div>
      
      <div className={classes.skillSet}>
        {[role, level, ...languages, ...tools].map((skill) => (
          <Skill skill={skill} key={skill} filterHandler={filterHandler} />
        ))}
      </div>
    </div>
  );
};

export default Card;
