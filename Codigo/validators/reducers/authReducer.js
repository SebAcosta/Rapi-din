import {LOGIN} from '../actions/authActions'
import { CEL } from '../actions/authActions'

const initialState = {
    number: null,
    login: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                login: true,
            }
        case CEL:
            return{
                number: action.number,
            }
    }
    return state;
}