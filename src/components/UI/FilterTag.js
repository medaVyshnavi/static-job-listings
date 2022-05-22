import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import classes from './FilterTag.module.css'

const FilterTag = ({tag,removeFilterHandler}) => {

    const removeFilterTag = () => {
        removeFilterHandler(tag)
    }
    return (
        <div className={classes.styling}>
            <button className={classes.filterTag}>{tag}</button>
            <ClearIcon id={tag} onClick={removeFilterTag} style={{backgroundColor:'hsl(180, 29%, 50%)',color:'#fff',height: '0.68em'}}/>
        </div>
    )
}

export default FilterTag
