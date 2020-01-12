export const fetchReducer = (state='', action) =>{
    if(action.type==='Change_name'){
        return action.payload
    }
    return state;
}



export const mailReducer = (state='', action) =>{
    if (action.type==='Change-Email'){
        return action.payload
    }
    return state;
}
export const cityReducer = (state='', action) =>{
    if (action.type==='Change-City'){
        return action.payload
    }
    return state;
}


