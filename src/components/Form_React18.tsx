import React from 'react';
import type { Sub } from '../types';
import useNewSubForm from './hooks/useNewSubForm';

interface Props {
    // Asi se tipa una funcion normal: onNewSub: (sub: Sub) => void 
    // pero si se trata de una funcion del useState es diferente: 
    // onNewSub: React.Dispatch<React.SetStateAction<Sub[]>> // <-- Pero esto no se recomienda hacer nunca, por temas de testing y otras cuestiones.
    // En su lugar se recomienda usar la siguiente forma:
    onNewSub: (sub: Sub) => void
}

const Form_React18: React.FC<Props> = ({onNewSub}) => {

    // Reutilizamos el tipado de la interface. usando Sub como tipado, y espificando que el FormState tiene un inputValues de tipo Sub
    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

   // Usamos el hook personalizado
   const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
        handleClear();// o tambien dispatch({type: 'clear'})
    }

    const handleClear = () => {
        dispatch({type: 'clear'})
    }

    // Tipado para que el evento sea del tipo correcto. (tanto para input text como textarea)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({
            type: 'change_value',
            payload: {
                input_name: e.target.name,
                input_value: e.target.value,
            }
        })
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* Al implementar la funciona aqui mismo, TS infiere el tipo de la funcion, porque tiene el contexto. Y eso ayuda a ver el tipo real que se necesita */}
            {/* <input type='' onChange={ event => {
                setInputValues({
                    ...inputValues,
                    [event.target.name]: event.target.value,
                })
            }} name="nick" /> */}
            <input type="text" onChange={handleChange} name="nick" value={inputValues.nick} />
            <input type="number" onChange={handleChange} name="subMonths" value={inputValues.subMonths} />
            <input type="text" onChange={handleChange} name="avatar" value={inputValues.avatar} />
            <textarea onChange={handleChange} name="description" value={inputValues.description} />
            <button type='button' onClick={handleClear}>Clear form</button>
            <button type='submit'>Save new Sub</button>
        </form>
    </div>
  )
}

export default Form_React18

