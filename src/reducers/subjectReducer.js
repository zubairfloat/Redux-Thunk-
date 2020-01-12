const nameReducer = (state='', action) =>{
    if(action.type==='ADD_SUB'){
        return [...state,action.payload]
    }
    return state;
}

export default nameReducer;