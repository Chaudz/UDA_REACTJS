import React from 'react';
import { Stack, Typography } from '@mui/material';
import Post from './Post';

const data = [
  {
    id: 1,
    thumbnail: '/categorycard.png"',
    title: 'Hãy sống với đam mê công nghệ',
    desc: 'Th11 28, 2018 | Lập trình reactjs',
  },
  {
    id: 2,
    thumbnail: '/categorycard.png"',
    title: 'Hãy sống với đam mê công nghệ',
    desc: 'Th11 28, 2018 | Lập trình reactjs',
  },
  {
    id: 3,
    thumbnail: '/categorycard.png"',
    title: 'Hãy sống với đam mê công nghệ',
    desc: 'Th11 28, 2018 | Lập trình reactjs',
  },
  {
    id: 4,
    thumbnail: '/categorycard.png"',
    title: 'Hãy sống với đam mê công nghệ',
    desc: 'Th11 28, 2018 | Lập trình reactjs',
  },
];

function NewPost(props) {
  return (
    <Stack>
      <Typography sx={{ color: '#fff', bgcolor: '#464968', p: 2, fontSize: '20px', fontWeight: 'bold' }}>
        BÀI VIẾT MỚI
      </Typography>
      <Stack sx={{ bgcolor: '#fff' }}>
        {data.map((data) => (
          <Post />
        ))}
      </Stack>
    </Stack>
  );
}

NewPost.propTypes = {};

export default NewPost;
