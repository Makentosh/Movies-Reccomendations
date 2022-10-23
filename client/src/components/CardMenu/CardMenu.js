import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CardMenu = ({ children, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <IconButton sx={ {
        position: 'absolute',
        zIndex: 2,
        top: 5,
        right: 5,
        backgroundColor: 'rgba(255, 255, 255, .3)'
      } }
                  onClick={ handleClick }>
        <MoreVertIcon/>
      </IconButton>

      <Menu anchorEl={ anchorEl }
            open={ open }
            onClose={ handleClose }
            onClick={ handleClose }
            transformOrigin={ { horizontal: 'right', vertical: 'top' } }
            anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }>
        { children }
      </Menu>

    </>
  );
};

export default CardMenu;
