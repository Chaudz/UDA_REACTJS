import React from 'react';
import { Stack } from '@mui/material';
import Category from './Category';
import NewPost from './NewPost';
import RegisterForm from './RegisterForm';

function HomePage(props) {
  return (
    <Stack
      className="homepage"
      sx={{ maxWidth: 1440, width: '100%', height: 'auto', bgcolor: '#f7f7f7', p: '10px' }}
      direction="row"
      spacing={3}
    >
      <Category />
      <Stack sx={{ maxWidth: 440, width: '100%' }}>
        <RegisterForm />
        <NewPost />
      </Stack>
    </Stack>
  );
}

HomePage.propTypes = {};

export default HomePage;
