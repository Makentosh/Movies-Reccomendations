import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Box, Divider, IconButton, InputBase, Modal, Paper, Typography } from '@mui/material';
import { Close, ContentCopy, Visibility } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CLOSE_ALERT_TIME } from '../../constants';
import SocialShare from '../SocialShare';
import { FormattedMessage } from "react-intl";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const ConfirmModal = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    let timer;

    if ( openAlert ) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, CLOSE_ALERT_TIME);
    }

    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Modal open={ open }
           onClose={ onClose }
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
    >

      <Box sx={ style }>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          { title }
        </Typography>
        <Paper component="form"
               sx={ { p: '2px 4px', marginTop: '24px', display: 'flex', alignItems: 'center', width: '100%' } }>

          <InputBase sx={ { ml: 1, flex: 1 } }
                     placeholder="List URL"
                     inputProps={ { 'aria-label': 'list URL' } }
                     value={ url }/>

          <IconButton target={ '_blank' }
                      href={ url } sx={ { p: '10px' } }>
            <Visibility/>
          </IconButton>

          <Divider sx={ { height: 28, m: 0.5 } } orientation="vertical"/>

          <CopyToClipboard text={ url }
                           onCopy={ () => setOpenAlert(true) }>
            <IconButton color="primary"
                        sx={ { p: '10px' } }
                        aria-label="copy to clipboard">
              <ContentCopy/>
            </IconButton>
          </CopyToClipboard>
        </Paper>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          <FormattedMessage id="share_with_friends"/>
        </Typography>

        <SocialShare url={ url } title={ title }/>

        { openAlert ? (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={ () => {
                  setOpenAlert(false);
                } }
              >
                <Close fontSize="inherit"/>
              </IconButton>
            }
            sx={ { mt: 2 } }
          >
            <FormattedMessage id="copied"/>
          </Alert>
        ) : null }
      </Box>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default ConfirmModal;
