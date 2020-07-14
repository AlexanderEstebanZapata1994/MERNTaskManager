import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, withStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



type optionType = {
    label: string,
    action: (e :React.MouseEvent<HTMLElement>) => void
}
 
const AppBarMenuAction = ({classes}: AppBarMenuActionProps) => {

    let history = useHistory();
    const OnClickLogoutEvent = (e: React.MouseEvent<HTMLElement>) => {
        history.push("/")
    }
    
    const handleLogoutEvent = (e :React.MouseEvent<HTMLElement>) => {
        handleClose();
        OnClickLogoutEvent(e);
    }
    const options : optionType[] = [
        {label: "Logout", action: handleLogoutEvent}
    ];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    //Define the height constant variable
    const ITEM_HEIGHT = 48;
    return ( 
        <Box>
            <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.root}
            >
            <MoreVertIcon />
            </IconButton>
            <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                },
            }}
            >
            {options.map((option) => (
                <MenuItem key={option.label} onClick={option.action}>
                {option.label}
                </MenuItem>
            ))}
            </Menu>
        </Box>
    );
}

interface AppBarMenuActionProps {
    classes?: any
}

 
const styles = {
    root: {
        color: "white"
    }
}
export default withStyles(styles) (AppBarMenuAction);