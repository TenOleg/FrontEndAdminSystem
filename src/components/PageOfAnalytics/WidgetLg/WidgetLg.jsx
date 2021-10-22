import React from "react";
import styles from './WidgetLg.module.css'
import Avatar from "@mui/material/Avatar";

const WidgetLg = (props) => {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className={styles.widgetLg}>
            <h3 className={styles.widgetLgTitle}>Latest Posts</h3>
            <table className={styles.widgetLgTable}>
                <tr>
                    <th className={styles.widgetLgTh}>Username</th>
                    <th className={styles.widgetLgTh}>Title of Post</th>
                    <th className={styles.widgetLgTh}>Date</th>
                    <th className={styles.widgetLgTh}>Status</th>
                </tr>
                {
                    props.newPosts.map((p) => (
                        <tr>
                            <td className={styles.widgetLgUser}>
                                <Avatar className={styles.widgetLgAvatar}/>
                                <span className={styles.widgetLgUsername}>{p.author}</span>
                            </td>
                            <td className={'widgetLgPostTitle'}>{p.title}</td>
                            <td className={'widgetLgDate'}>{p.created}</td>
                            <td className={styles.widgetLgStatus}><Button type={p.status}></Button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default WidgetLg;