import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 2),
        marginBottom: 5
    }
}));

function Todo(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid 
                justify="space-between" 
                container 
                spacing={24}>
                <Typography variant="h5" component="h3">
                    {props.text}
                </Typography>
                {/* <button onClick={() => props.handleDelete(props.id)}>X</button> */}
                <Button onClick={props.handleDelete}>
                    <DeleteIcon/>
                </Button>
            </Grid>
        </Paper>
    );
}

export default Todo;