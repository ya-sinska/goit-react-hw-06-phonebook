import { Label, InputField } from './Filter.styled'
import { useChange } from 'hooks/useChange';
export const Filter = () => {
    const change = useChange();
 return (
<>
    <Label htmlFor="filter">Find contacts by name </Label>
    <InputField id="filter" type="text" name="filter" onChange={change}/>
</>    
)}
