import React, { useState } from 'react';
import type { Sub } from '../types';

interface FormState {
    inputValues: Sub
}

const Form_React18: React.FC = () => {

    // Reutilizamos el tipado de la interface. usando Sub como tipado, y espificando que el FormState tiene un inputValues de tipo Sub
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
            nick: '',
            subMonths: 0,
            avatar: '',
            description: ''
        })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValues);
    }

    // Tipado para que el evento sea del tipo correcto. (tanto para input text como textarea)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        })
    }

    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            {/* Al implementar la funciona aqui mismo, TS infiere el tipo de la funcion, porque tiene el contexto. Y eso ayuda a ver el tipo real que se necesita */}
            {/* <input type='' onChange={ event => {
                setInputValues({
                    ...inputValues,
                    [event.target.name]: event.target.value,
                })
            }} name="nick" /> */}
            <input type="text" onChange={handleChange} name="nick" />
            <input type="number" onChange={handleChange} name="subMonths" />
            <input type="text" onChange={handleChange} name="avatar" />
            <textarea onChange={handleChange} name="description" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form_React18

