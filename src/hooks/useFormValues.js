import { useForm } from "react-hook-form";
import {  useDispatch, useSelector } from 'react-redux'
import { addContactsItem } from "redux/contactsItemSlice";
import { nanoid } from 'nanoid'
import { getItemsValue } from "redux/contactsItemSlice";

export const useFormValues = () => {
        const { register, handleSubmit,reset, formState: { errors } } = useForm({
        defaultValues: {
            name:'',
            number:'+380'
        }
    });
    const dispatch = useDispatch();
    const stateItems = useSelector(getItemsValue);
    const onSubmit = (values) => {
        const item = {
            id:nanoid(),
            name: values.name ,
            number: values.number,
        } 
        const isIncludesName = stateItems.find(item => item.name.toLowerCase() === values.name.toLowerCase());
        if (isIncludesName) {
            return alert(`${values.name.name} is already is contacts`);
        } else {dispatch(addContactsItem(item));}
        reset();
    };
    return{register, handleSubmit, errors, onSubmit }
}