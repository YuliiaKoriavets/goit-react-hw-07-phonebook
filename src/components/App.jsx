import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <Wrapper title="Phonebook">
        <ContactForm />
      </Wrapper>
      <Wrapper title="Contacts">
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </Wrapper>
    </section>
  );
};
