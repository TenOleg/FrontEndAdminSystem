import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Avatar, Grid, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    center:{
        textAlign: 'center'
    },
    table: {
        minWidth: 650,
    },
    root: {
        flexGrow: 1,
    },
    tableContainer: {
        borderRadius: 10,
        margin: "-15px 20px",
        maxWidth: 950
    },
    tableHeadCell: {
        fontWeight: 'bold',
        backgroundColor: 'steelblue',
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark
    },
    link: {
        textDecoration: "none"
    },
    status: {
        fontWeight: "bold",
        fontSize: '0.75rem',
        color: "white",
        backgroundColor: 'grey',
        borderRadius: 8,
        transition: 'background-color .3s',
        padding: '3px 10px',
        display: "inline-block"
    }
}));

export const UsersList = (props) => {
    const classes = useStyles();

    return (<div>
            {props.users ?
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeadCell}>Id</TableCell>
                                <TableCell className={classes.tableHeadCell}>Username</TableCell>
                                <TableCell className={classes.tableHeadCell}>Created At</TableCell>
                                <TableCell className={classes.tableHeadCell}>Updated At</TableCell>
                                <TableCell className={classes.tableHeadCell}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.map((u) => (
                                <TableRow key={u.id}>
                                    <TableCell component="th" scope="row">
                                        {u.id}
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <Grid item lg={3}>
                                                <NavLink to={'profile/' + u.id} className={classes.link}><Avatar
                                                    alt={u.username} src={'.'} className={classes.avatar}/></NavLink>

                                            </Grid>
                                            <Grid item lg={9}>
                                                <Typography className={classes.name}> {u.username}

                                                </Typography>
                                                <Typography color={'textSecondary'}
                                                            variant={'body2'}>{u.lastName}{u.firstName}</Typography>
                                                <Typography color={'textSecondary'}
                                                            variant={'body2'}>{u.email}</Typography>
                                            </Grid>
                                        </Grid>


                                    </TableCell>
                                    <TableCell>
                                        <Typography color={'primary'}
                                                    variant={'subtitle2'}>{u.created}</Typography></TableCell>
                                    <TableCell> <Typography color={'primary'}
                                                            variant={'subtitle2'}>{u.updated}</Typography></TableCell>
                                    <TableCell><Typography className={classes.status} style={{
                                        backgroundColor:
                                            ((u.status === 'ACTIVE' && 'green') ||
                                                (u.status === 'BANNED' && 'orange') ||
                                                (u.status === 'DELETED' && 'red')
                                            )
                                    }}>{u.status}</Typography></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <div className={classes.center}>{props.message}</div>
            }
        </div>
    )
}