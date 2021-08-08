import * as ActionTypes from './ActionTypes'

export const userLogin=(user)=>{
    return{
    type:ActionTypes.USER_LOGIN,
    user
    }
}

export const userLogout=()=>{
    return {
    type:ActionTypes.USER_LOGOUT
    }
}