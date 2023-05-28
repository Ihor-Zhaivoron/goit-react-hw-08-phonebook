import React from 'react';
import { Container } from '@mui/material';
import { Contacts } from '../components/ContactsList/ContactsList';
import { FilterField } from '../components/FilterField/FilterField';

export const ContactsPage = () => {
  return (
    <Container maxWidth="md">
      <FilterField />
      <Contacts />
    </Container>
  );
};
