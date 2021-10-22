import React from "react";
import styles from './WidgetSm.module.css'
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = (props) => {
    return (
        <div className={styles.widgetSm}>
            <span className={styles.widgetSmTitle}>New Join Members</span>
            <ul className={styles.widgetSmList}>
                {props.newUsers.map((n) => (
                    <li className={styles.widgetSmItem}>
                        <Avatar className={styles.widgetSmImg}/>
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>{n.username}</span>
                            <span className={styles.widgetSmLastnameName}>{n.firstName + ' ' + n.lastName}</span>
                        </div>
                        <button className={styles.widgetSmButton}><VisibilityIcon className={styles.widgetSmIcon}/>Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm;