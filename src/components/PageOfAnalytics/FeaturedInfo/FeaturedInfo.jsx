import React from "react";
import styles from './FeaturedInfo.module.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = (props) => {
    return <div className={styles.featured}>
        <div className={styles.featuredItem} onClick={props.handleSubmit2}>
            <span className={styles.featuredTittle}>Registered Users</span>
            <div className={styles.featuredAmountContainer}>
                <span className={styles.featuredAmount}>{props.usersAmt}</span>
                <span
                    className={styles.featuredAmountRate}>{props.newUsersAmt === 0 ? '' : props.newUsersAmt > 0 ? '+' + props.newUsersAmt : '-' + props.newUsersAmt}{props.newUsersAmt === 0 ? '' :
                    <ArrowUpwardIcon className={styles.featuredIcon}/>}</span>
            </div>
            <span className={styles.featuredSub}>Compared to yesterday</span>
        </div>
        <div className={styles.featuredItem} onClick={props.handleSubmit}>
            <span className={styles.featuredTittle}>Placed Posts</span>
            <div className={styles.featuredAmountContainer}>
                <span className={styles.featuredAmount}>{props.postsAmt}</span>
                <span
                    className={styles.featuredAmountRate}>{props.newPostsAmt === 0 ? '' : props.newPostsAmt > 0 ? '+' + props.newPostsAmt : '-' + props.newPostsAmt}{props.newPostsAmt === 0 ? '' :
                     <ArrowUpwardIcon className={styles.featuredIcon}/>}</span>
            </div>
            <span className={styles.featuredSub}>Compared to yesterday</span>
        </div>
        <div className={styles.featuredItem}>
            <span className={styles.featuredTittle}>Visited</span>
            <div className={styles.featuredAmountContainer}>
                <span className={styles.featuredAmount}>100</span>
                <span className={styles.featuredAmountRate}>-20<ArrowDownwardIcon
                    className={styles.featuredIconNegative}/></span>
            </div>
            <span className={styles.featuredSub}>Compared to yesterday</span>
        </div>
    </div>
}

export default FeaturedInfo;