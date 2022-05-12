import { useSelector } from 'react-redux'
import { getFilterValue } from 'redux/contactsFilterSlice';
import { ContactList, TextNotFind } from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';
import { getItemsValue } from 'redux/contactsItemSlice';
export const Contacts = () => {
    const items = useSelector(getItemsValue);
    const filter = useSelector(getFilterValue);
    const filteredContacts = filter ? items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())) : items;
    
    return (
        <div>
            {filteredContacts.length > 0 ?
                (<ContactList>
                {filteredContacts.map(({ id, name, number }) => 
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
