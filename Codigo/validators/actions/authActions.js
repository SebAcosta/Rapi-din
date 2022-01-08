export const LOGIN = 'LOGIN';
export const CEL = 'CEL';

export const tryLogin = (number, password) => {
    if(number == '4421234567' && password == '1234'){
        return{
            type: LOGIN,
            number: number
        };
    }else{
        throw ('Numero y/o codigo no validos')
    }
}

export const tryCel = (number) =>{
    if (number == '4421234567'){
        return{
            type:CEL,
            number: number
        };
    }else{
        throw ('Numero no valido')
    }
}

export const tryCode = (codeAuth) =>{
    if (codeAuth == '1234'){
        return{
            type:LOGIN
        };
    }else{
        throw('Codigo no valido')
    }
}