import { useState } from "react";

export default function useForm(callback, inititalValues) {
    const [values, setValues] = useState(inititalValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const formAction = async (e) => {
        await callback(values);
    };

    const register = (fieldName) => {
        return {
            name: fieldName,
            onChange: changeHandler,
            value: values[fieldName]
        }
    }

    return {
        values,setValues, changeHandler, formAction, register
    }
}