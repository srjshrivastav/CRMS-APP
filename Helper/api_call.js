import {BaseUrl} from '../shared/constants'

export const authenticate=(email,password)=>{

return fetch(BaseUrl+'/authenticate',{
    method:"POST",
    headers: {    
        Accept: 'application/json',    
        'Content-Type': 'application/json'  
    },
    body:JSON.stringify({
        email,
        password
    })
})

}