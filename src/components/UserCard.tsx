import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const UserCard = (props: { user: any }) => {
  return (
    <Card key={props.user.id} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 18,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
          color='text.secondary'
          gutterBottom
        >
          {props.user.name}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
            Username :
          </span>{' '}
          {props.user.username}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Email :</span>{' '}
          {props.user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.user.id.toString()}>
          <Button size='small'>Dettaglio</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default UserCard;
