import { useDispatch } from 'react-redux'
import { addFilter } from "redux/contactsFilterSlice";
export const useChange = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const inputValue = e.currentTarget.value;
        dispatch(addFilter(inputValue))
    }; 
    return handleChange
}