import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container } from '@mui/material';
import { TextField, Box, Button } from '@mui/material';
import { AddContactOperation } from 'redux/contacts/operation';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

export const AddContacrForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, number }) => {
    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contactExists) {
      Notify.failure(`Contact ${name} already exists`);
      return;
    }
    dispatch(AddContactOperation({ name, number }));
    Notify.success(`Contact ${name} was added successfully!`);
    reset();
  };
  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={5}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            label="Name"
            autoFocus
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
            {...register('name', {
              required: 'Name is required',
              maxLength: 80,
            })}
          />
        </Box>
        <Box mt={3} mb={5}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneRoundedIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            label="Phome number"
            error={Boolean(errors.number?.message)}
            helperText={errors.number?.message}
            {...register('number', {
              required: 'Phone number is required',
              minLength: {
                value: 8,
                message: 'Phone number must be between 8 and 10 numbers ',
              },
              maxLength: {
                value: 10,
                message: 'Phone number must be between 8 and 10 numbers ',
              },
            })}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </form>
    </Container>
  );
};
