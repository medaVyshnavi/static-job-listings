import React, { useEffect, useState } from "react";
import classes from "./Body.module.css";
import Card from "../Card/Card";
import data from "../../data.json";
import FilterTag from "../UI/FilterTag";

const Body = () => {
  const [jobListings, setJobListings] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  useEffect(() => {
    setJobListings(data);
  }, [jobListings]);

  const clearFilterHandler = () => {
    setFilterTags([]);
  };

  const filterHandler = (e) => {
    if (!filterTags.includes(e.target.innerHTML)) {
      setFilterTags(() => [...filterTags, e.target.innerHTML]);
    } else {
      return false;
    }
  };

  const removeFilterHandler = (itemToRemove) => {
    setFilterTags(filterTags.filter((item) => item !== itemToRemove));
  };

  const filterFunc = ({ role, level, languages, tools }) => {
    if (filterTags.length === 0) return true;

    const tags = [role, level];

    if (tools) tags.push(...tools);
    if (languages) tags.push(...languages);

    return filterTags.every((tag) => tags.includes(tag));
  };

  const filteredJobs = jobListings.filter(filterFunc);

  return (
    <div>
      {filterTags.length > 0 && (
        <div className={classes.overlay}>
          <div className={classes.filterTag}>{filterTags.map((tag) => (
            <FilterTag
              key={tag}
              tag={tag}
              removeFilterHandler={removeFilterHandler}
            />
          ))}</div>
          <button className={classes.clear} onClick={clearFilterHandler}>
            Clear
          </button>
        </div>
      )}

      {filteredJobs.map((job) => (
        <Card
          key={job.id}
          company={job.company}
          logo={job.logo}
          isNew={job.new}
          isFeatured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
          filterHandler={filterHandler}
        />
      ))}
    </div>
  );
};

export default Body;
