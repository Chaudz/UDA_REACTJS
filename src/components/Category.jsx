import React from 'react';
import CardCategory from './CardCategory';
import { Stack, Typography } from '@mui/material';

const data = [
  {
    id: 1,
    title: '  Hướng dẫn học react js',
    author: 'Được thực hiện bởi Bùi Văn Châu| 22/10/2003 | javascript, React |',
    desc: 'Sau quá trình tự học mình rút ra được kinh nghiệm và sẽ chia sẽ về cách học dễ nhất',
  },
  {
    id: 2,
    title: '  Hướng dẫn học Node js',
    author: 'Được thực hiện bởi Bùi Văn Châu| 22/10/2003 | javascript, React |',
    desc: 'Sau quá trình tự học mình rút ra được kinh nghiệm và sẽ chia sẽ về cách học dễ nhất',
  },
  {
    id: 3,
    title: '  Hướng dẫn học react js',
    author: 'Được thực hiện bởi Bùi Văn Châu| 22/10/2003 | javascript, React |',
    desc: 'Sau quá trình tự học mình rút ra được kinh nghiệm và sẽ chia sẽ về cách học dễ nhất',
  },
  {
    id: 4,
    title: '  Hướng dẫn học react js',
    author: 'Được thực hiện bởi Bùi Văn Châu| 22/10/2003 | javascript, React |',
    desc: 'Sau quá trình tự học mình rút ra được kinh nghiệm và sẽ chia sẽ về cách học dễ nhất',
  },
  {
    id: 5,
    title: '  Hướng dẫn học react js',
    author: 'Được thực hiện bởi Bùi Văn Châu| 22/10/2003 | javascript, React |',
    desc: 'Sau quá trình tự học mình rút ra được kinh nghiệm và sẽ chia sẽ về cách học dễ nhất',
  },
];

function Category(props) {
  return (
    <Stack sx={{ maxWidth: 1000, width: '100%', height: 'auto' }}>
      <Typography sx={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
        SERIES: REACTJS: TỪ CƠ BẢN ĐẾN NÂNG CAO
      </Typography>
      <Stack sx={{ bgcolor: 'white' }}>
        {data.map((data) => (
          <CardCategory key={data.id} data={data} />
        ))}
      </Stack>
    </Stack>
  );
}

Category.propTypes = {};

export default Category;
