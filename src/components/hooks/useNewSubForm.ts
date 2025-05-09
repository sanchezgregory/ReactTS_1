import { useReducer } from "react";
import type { Sub } from "../../types";

interface FormState {
    inputValues: Sub
}

type FormReducerAction = {
    type: "change_value";
    payload: {
        input_name: string;
        input_value: string;
    }
} | {
    type: "clear"
}

const INITIAL_STATE: Sub = {
    id: '',
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case 'change_value':
            return {
                ...state,
                [action.payload.input_name]: action.payload.input_value
            }
        case 'clear':
            return INITIAL_STATE
        default:
            return state
    }
}

const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm
