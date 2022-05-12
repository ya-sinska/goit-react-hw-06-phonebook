import { useForm } from "react-hook-form";
import {  useDispatch } from 'react-redux'
import { addContactsItem } from "redux/contactsItemSlice";
import { nanoid } from 'nanoid'
import {ContactForm, InputField, Label, Error, BtnSubmitForm } from './Form.styled'
// Validation

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// Component Forma

export const Forma = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name:'',
            number:'+380'
        }
    });
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        const items = {
            id:nanoid(),
            name: values.name ,
            number: values.number,
    } 
    dispatch(addContactsItem(items));
  };
    return (
        <ContactForm
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
        >
            <Label htmlFor='name'> Name </Label>             
            <InputField
                id="name"
                type="text"
                {...register("name", {
                    required: "This is required",
                    minLength: {
                        value: 5,
                        message: "Min length is 5 symbols",
                    },
                    pattern: {
                        value: nameRegExp,
                        message: "Use only text"
                    }
                })} 
                placeholder="Surname Name"
            />
            {errors.name&&<Error>{errors.name?.message }</Error> } 
            <Label  htmlFor='number'> Number </Label >              
            <InputField
                id="number"
                type="tel"
                {...register("number", {
                    required: "This is required",
                    maxLength: {
                        value: 12,
                        message: "Max length is 12 symbols"
                    },
                    pattern: {
                        value: phoneRegExp,
                        message: "Use only numbers"
                    }
                })}
                placeholder="+38(000)000-00-00"
            />
            {errors.number&&<Error>{errors.number?.message }</Error>  }     
            <BtnSubmitForm type="submit">Add contact</BtnSubmitForm>
         
      </ContactForm>
    )
}
