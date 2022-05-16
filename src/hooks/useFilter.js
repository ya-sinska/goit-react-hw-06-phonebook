import { useSelector } from 'react-redux'
import { getFilterValue } from 'redux/contactsFilterSlice';
import { getItemsValue } from 'redux/contactsItemSlice';
export const useFilter = () => {
    const items = useSelector(getItemsValue);
    const filter = useSelector(getFilterValue);
    const filteredContacts = filter ? items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())) : items;  
    return filteredContacts;
}