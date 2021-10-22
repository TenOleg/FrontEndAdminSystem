import React from "react";
import styles from './Header.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = (props) => {
    return (
        <>
        {
            props.isAuth ?
                <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.headerTitle}>
                        ADMINISTRATION
                    </div>
                    <div className={styles.headerIcons}>
                        <div className={styles.iconContainer}>
                            <NotificationsNoneIcon/>
                            <span className={styles.headerIconBadge}>2</span>
                        </div>
                        <div className={styles.iconContainer}>
                            <SettingsIcon/>
                        </div>
                        <div className={styles.iconContainer}>
                            <ExitToAppIcon className={styles.headerExitBtn} onClick={props.logout}/>
                        </div>
                    </div>
                </div>
            </div> : ''
        }
       </>
    )
}

export default Header;