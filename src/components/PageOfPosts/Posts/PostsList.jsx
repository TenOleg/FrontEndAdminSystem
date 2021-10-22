import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    root: {
        flexGrow: 1,
    },
});

export const PostsList = (props) => {
    const classes = useStyles();
    return (
        <div>
            {props.posts ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Created At</TableCell>
                                <TableCell align="right">Updated At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.posts.map((p) => (
                                <TableRow key={p.id}>
                                    <TableCell component="th" scope="row">
                                        {p.id}
                                    </TableCell>
                                    <TableCell align="right">{p.title}</TableCell>
                                    <TableCell align="right">{p.status}</TableCell>
                                    <TableCell align="right">{p.type}</TableCell>
                                    <TableCell align="right">{p.created}</TableCell>
                                    <TableCell align="right">{p.updated}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <div>{props.message}</div>
            }
        </div>
    )
}