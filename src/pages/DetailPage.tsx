import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../api';
import { Box, Button } from '@mui/material';
import UserCardDetail from '../components/UserCardDetail';

const DetailPage = () => {
  const { userId } = useParams();
  const [userDetail, setuserDetail] = useState<any | null>(null);

  useEffect(() => {
    if (!!userId) {
      try {
        const userIdNum = parseInt(userId);
        getUserById(userIdNum).then((user) => {
          setuserDetail(user);
        });
      } catch (err) {
        console.error('NaN');
      }
    }
  }, [userId]);

  // useEffect(() => {
  //   console.log('detail', pokemonDetail);
  // });
  return (
    <>
      {!!userDetail ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <UserCardDetail userDetail={userDetail} />
        </Box>
      ) : (
        'Loading..'
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <Button variant='contained' href='/'>
          Go to search
        </Button>
      </Box>
    </>
  );
};

export default DetailPage;
