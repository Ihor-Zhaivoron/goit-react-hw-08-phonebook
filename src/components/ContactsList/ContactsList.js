import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { getAllContacts } from 'redux/contacts/operation';
import { deleteContact } from 'redux//contacts/operation';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box sx={{ pt: 5 }}>
      <ContactsItem
        filteredContact={filteredContact}
        handleDelete={handleDelete}
      />
    </Box>
  );
};
