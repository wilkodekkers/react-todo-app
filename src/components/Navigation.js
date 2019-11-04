import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Navigation() {
    return (
        <AppBar position="static">
            <ToolBar>
                <Typography variant="h6">
                    Todo
                </Typography>
            </ToolBar>
        </AppBar>
    );
}

export default Navigation;