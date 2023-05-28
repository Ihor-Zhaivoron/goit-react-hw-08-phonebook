import Paper from '@mui/material/Paper';
import { Grid, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import css from './ContactsItem.module.css';

export const ContactsItem = ({ filteredContact, handleDelete }) => {
  const getAvatar = name => {
    return name.slice(0, 1).toUpperCase();
  };
  return (
    <>
      {filteredContact.map(({ id, name, number }) => (
        <Paper elevation={2} className={css.item} key={name}>
          <Grid container spacing={1} key={name} sx={{ alignItems: 'center' }}>
            <Grid item xs={1} md={1}>
              <Avatar
                className={css.avatar}
                sx={{ bgcolor: '#1976d2' }}
                aria-label="recipe"
              >
                {getAvatar(name)}
              </Avatar>
            </Grid>
            <Grid item xs={5} md={5}>
              <Typography variant="body1">{number}</Typography>
            </Grid>
            <Grid item xs={3} md={3} className={css.button}>
              <Button
                size="small"
                color="error"
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete({ id })}
              >
                Delete
              </Button>
            </Grid>{' '}
          </Grid>
        </Paper>
      ))}
    </>
  );
};
