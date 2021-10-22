import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {UsersList} from "../../PageOfUsers/Users/UsersList";
import {TabPanel} from "./TabPanel";

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    appbar: {
        backgroundColor: 'steelblue',
        borderRadius: 5,
        marginTop: "10px",
        marginLeft: "45px",
        maxWidth: 950
    }
}));

export const TabsStatusForUsers= (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
       switch (newValue){
           case 0:
               props.onChangeTabsStatus('ACTIVE')
               break;
           case 1:
               props.onChangeTabsStatus('BANNED')
               break;
           case 2:
               props.onChangeTabsStatus('DELETED')
               break;
           default:
               break;
       }

    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="ACTIVE" {...a11yProps(0)} />
                    <Tab label="BANNED" {...a11yProps(1)} />
                    <Tab label="DELETED" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
               <UsersList users={props.users} message={props.message}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UsersList users={props.users} message={props.message}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <UsersList users={props.users} message={props.message}/>
            </TabPanel>
        </div>
    )
}