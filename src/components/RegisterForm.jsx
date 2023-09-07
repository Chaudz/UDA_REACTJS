import React from 'react';
import { Stack, Typography, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

function RegisterForm(props) {
  return (
    <Stack sx={{ mb: 3, width: '100%', boxSizing: 'border-box', p: 2, bgcolor: '#e55426' }}>
      <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
        ĐĂNG KÝ NHẬN BÀI VIẾT MỚI
      </Typography>
      <Typography sx={{ my: 2, color: 'white' }}>
        Công nghệ đã thay đỖi nhanh chóng quá là nhanh chúng ta phải có kiến thức hay đăng kí để nhận bài viết
      </Typography>
      <TextField
        variant="filled"
        InputProps={{
          shrink: true, // Label sẽ ẩn đi khi có nội dung trong ô đầu vào
        }}
        label={<span style={{ color: 'white' }}>TÊN CỦA BẠN</span>}
        sx={{ bgcolor: '#ffffff63' }}
        outlined={false}
      />
      <TextField
        variant="filled"
        InputProps={{
          shrink: true, // Label sẽ ẩn đi khi có nội dung trong ô đầu vào
        }}
        label={<span style={{ color: 'white' }}>EMAIL CỦA BẠN</span>}
        sx={{ bgcolor: '#ffffff63', my: 2 }}
        outlined={false}
      />
      <FormControlLabel sx={{ color: 'white' }} label="Tôi đồng ý" control={<Checkbox />} />
      <Button
        variant="contained"
        sx={{ my: 2, width: '100%', bgcolor: '#fff', color: 'orange', fontSize: '20px' }}
        color="success"
      >
        ĐĂNG KÝ
      </Button>
      <Typography sx={{ color: '#fff' }}>
        Bạn sẽ nhận được phản hồi qua email, chúng tối sẽ gửI nhanh nhất cí thể{' '}
      </Typography>
    </Stack>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
