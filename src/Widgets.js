import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"></SearchIcon>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                < TwitterTweetEmbed tweetId={"1341459651737526273"}/>

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="the_growing_up"
                options={{ height: 400 }}/>

                <TwitterShareButton
                url={"https://twitter.com/the_growing_up"}
                options={{ text: "#reactjs is awesome", via: "Naman " }}/>

            </div>
            
        </div>
    );
}

export default Widgets;
