import { Forma } from "../Form/Form";
import { Contacts } from '../Contacts/Contacts'
import { Filter } from "../Filter/Filter";
import { Container, Title, SecondTitle } from "./App.styled";

export const App = () => {
  return (
    <Container>
        <Title>Phonebook</Title>
        <Forma />
        <SecondTitle>Contacts</SecondTitle>
        <Filter/>
        <Contacts />
    </Container>
  ) 
}