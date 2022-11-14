import React from "react";
import "../SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from './ChannelRow';
import '../ChannelRow.css';
import VideoRow from "./VideoRow";

const SearchPage = (mode) => {
  return (
    <div className="searchpage" >
      <div className="searchPage_filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
      image="https://www.w3schools.com/w3images/avatar2.png"
      channel="React.js Programmer"
      verified
      subs='1M'
      noOfVideos={'10M'}
      description="You can find awesome programming of react js on our channel"
      />
       <hr />

       <VideoRow
       views="1.4M"
       subs="659k"
       description="In this video I cover everything you need to know about the useState hook. I also go over the basics of hooks as well so you can start using hooks in your own projects. This is the beginning of a series of React videos  where I cover all the important hooks in React."
       timestamp=" May 5, 2020"
       channel="React.js Programmer"
       title="Learn useState In 15 Minutes - React Hooks Explained"
       image="https://reactjs.org/logo-og.png"
       />

<VideoRow
       views="41,767 views "
       subs="659k"
       description="All The JavaScript You Need To Know For React"
       timestamp=" Feb 1, 2022"
       channel="React.js Programmer"
       title="All The JavaScript You Need To Know For React"
       image="https://i.ytimg.com/vi/m55PTVUrlnA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_1TmTFPy88HMVdIMbO2lgGl19SQ"
       />

<VideoRow
       views="1.4M"
       subs="659k"
       description="In this video I cover everything you need to know about the useState hook. I also go over the basics of hooks as well so you can start using hooks in your own projects. This is the beginning of a series of React videos  where I cover all the important hooks in React."
       timestamp=" May 5, 2020"
       channel="React.js Programmer"
       title="Learn useState In 15 Minutes - React Hooks Explained"
       image="https://reactjs.org/logo-og.png"
       />

<VideoRow
       views="234,716 views"
       subs="659k"
       description="In this Reactjs project, we will make an awesome responsive gym website step-by-step. We learn React hooks, modern CSS, framer motion, and many more. For contact, we will use the Email js library to make this site more functional and practical."
       timestamp="Jul 1, 2022"
       channel="React.js Programmer"
       title="React Responsive Gym Website Tutorial Using ReactJs | React js Projects for Beginners | Deploy"
       image="https://i.ytimg.com/vi/gpqoZQ8GNK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdg5DpVnE9no8sAtUuhKJDJFvgCQ"
       />

<VideoRow
       views="2.8M views"
       subs="659k"
       description="Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more."
       timestamp="1 year ago"
       channel="React.js Programmer"
       title="React JS Crash Course"
       image="https://i.ytimg.com/vi/w7ejDZ8SWv8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLtqhjnv15Y388joYu5qQ3VjlhZw"
       />
       
      
    </div>
  );
};

export default SearchPage;
