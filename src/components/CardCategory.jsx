import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function CardCategory(props) {
  return (
    <Stack>
      <Stack sx={{ maxWidth: '100%', height: 'auto', p: '5px' }} direction="row" spacing={2}>
        <Stack sx={{ width: '50%' }}>
          <img src="/categorycard.png" alt="" style={{ width: '100%' }} />
        </Stack>
        <Stack spacing={5}>
          <Stack>
            <Typography sx={{ color: 'info.main', fontWeight: 'bold', fontSize: '25px', textAlign: 'left' }}>
              Hướng dẫn học react js
            </Typography>
            <Typography sx={{ textAlign: 'left', fontWeight: 'light' }}>
              Được thực hiện bởi Bùi Văn Châu| 22/10/2003 | javascript, React | <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Typography>
            <Typography sx={{ textAlign: 'left', fontWeight: 'medium' }}>
              Sau quá trình tự học mình rút ra được kinh nghiệm và sẽ chia sẽ về cách học dễ nhất
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ width: '150px' }}>
            READ MORE{' '}
          </Button>
        </Stack>
      </Stack>
      <Stack sx={{ bgcolor: '#efefef', height: '3px' }}></Stack>
    </Stack>
  );
}

CardCategory.propTypes = {};

export default CardCategory;
