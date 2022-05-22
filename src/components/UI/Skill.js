import React from 'react'
import classes from './Skill.module.css'

const Skill = ({skill,filterHandler}) => {

    return (
        <div className={classes.styling}>
            <button className={classes.button} onClick={filterHandler}>{skill}</button>
        </div>
    )
}

export default Skill
