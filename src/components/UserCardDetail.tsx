import React from 'react';
// import { PokemonsDetailType } from '../models/page_one/PokemonsType';
import { Card, CardContent, Typography } from '@mui/material';

const UserCardDetail = (props: { userDetail: any }) => {
  return (
    <Card
      sx={{
        width: '400px',
        height: '100%',
        justifyContent: 'center',
        alignItem: 'center',
        margin: '2em',
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 18,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginBottom: '30px',
            textAlign: 'center',
          }}
          color='text.secondary'
          gutterBottom
        >
          {props.userDetail?.name}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold' }}>Address:</span>{' '}
          <ul>
            <li style={{ listStyle: 'none' }}>
              street: {props.userDetail.address.street}
            </li>
            <li style={{ listStyle: 'none' }}>
              city: {props.userDetail.address.city}
            </li>
            <li style={{ listStyle: 'none' }}>
              zip code: {props.userDetail.address.zipcode}
            </li>
          </ul>
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold' }}>Company:</span>{' '}
          {props.userDetail.company.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCardDetail;
