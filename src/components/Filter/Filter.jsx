import { useDispatch } from 'react-redux'
import { addFilter } from "redux/contactsFilterSlice";
import { Label, InputField } from './Filter.styled'
export const Filter = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const inputValue = e.currentTarget.value;
        dispatch(addFilter(inputValue))
    };
 return (
<>
    <Label htmlFor="filter">Find contacts by name </Label>
    <InputField id="filter" type="text" name="filter" onChange={handleChange}/>
</>    
)}
