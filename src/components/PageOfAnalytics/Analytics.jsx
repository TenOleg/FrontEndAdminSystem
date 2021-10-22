import React, {useState} from 'react';
import styles from './Analytics.module.css'
import FeaturedInfo from "./FeaturedInfo/FeaturedInfo";
import ChartsOfUsers from "./ChartsOfUsers/ChartsOfUsers";
import WidgetSm from "./WidgetSm/WidgetSm";
import WidgetLg from "./WidgetLg/WidgetLg";
import ChartsOfPosts from "./ChartsOfPosts/ChartsOfPosts";

const Analytics = (props) => {
    const [active, setActive] = useState(true);

    function handleSubmit() {
        setActive(false)
    }

    function handleSubmit2() {
        setActive(true)
    }


    return <div>
        <FeaturedInfo newPostsAmt={props.newPostsAmt} postsAmt={props.postsAmt} usersAmt={props.usersAmt}
                      newUsersAmt={props.newUsersAmt} handleSubmit={handleSubmit} handleSubmit2={handleSubmit2}/>
        {active ? <ChartsOfUsers usersStatistics={props.usersStatistics}/> :
            <ChartsOfPosts postsStatistics={props.postsStatistics}/>}
        <div className={styles.homeWidgets}>
            <WidgetSm newUsers={props.newUsers}/>
            <WidgetLg newPosts={props.newPosts}/>
        </div>
    </div>
}


export default Analytics;