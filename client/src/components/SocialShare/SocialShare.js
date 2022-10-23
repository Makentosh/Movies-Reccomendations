import React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { SOCIAL_BUTTON_SIZE } from '../../constants';

const SocialShare = ({ url, title }) => {
  return (
    <Stack direction={ 'row' } spacing={ 1 }>
      <FacebookShareButton url={ url }>
        <FacebookIcon round size={ SOCIAL_BUTTON_SIZE }/>
      </FacebookShareButton>

      <TwitterShareButton url={ url } title={ title }>
        <TwitterIcon round size={ SOCIAL_BUTTON_SIZE }/>
      </TwitterShareButton>
    </Stack>
  );
};

export default SocialShare;


SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};
