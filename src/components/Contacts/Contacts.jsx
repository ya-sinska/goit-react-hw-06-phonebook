import { useFilter } from 'hooks/useFilter';
import { ContactList, TextNotFind } from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';

export const Contacts = () => {
    const contacts = useFilter(); 
    return (
        <div>
            {contacts.length > 0 ?
                (<ContactList>
                {contacts.map(({ id, name, number }) => 
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                    />
                    )}</ContactList>) : (<TextNotFind>There is no contacts</TextNotFind >)}
        </div>
    )
}
