import React from 'react';
import { Stack, Typography } from '@mui/material';

function Post(props) {
  return (
    <Stack>
      <Stack direction="row" spacing={2} sx={{ width: '100%', p: 2 }}>
        <Stack sx={{ width: '30%' }}>
          <img src="/categorycard.png" alt="" style={{ width: '100%', cursor: 'pointer' }} />
        </Stack>
        <Stack>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'left', cursor: 'pointer' }}>
            Hãy sống với đam mê công nghệ
          </Typography>
          <Typography sx={{ textAlign: 'left' }}>Th11 28, 2018 | Lập trình reactjs </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ bgcolor: '#efefef', height: '3px' }}></Stack>
    </Stack>
  );
}

Post.propTypes = {};

export default Post;
