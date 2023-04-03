import { useState } from 'react';
const useSearchUser = (initialValues: {[key:string]: string}) => {
    const [values, setValues] = useState(initialValues);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(value)
    }
    return {
        values,
        setValues,
        handleChange,
    }
};

export default useSearchUser;
