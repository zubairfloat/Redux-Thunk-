const nameReducer = (state='', action) => {
    if(action.type==='ADD_LAPTOP'){
        return [...state,action.payload]
    }
    return state;
}
export default nameReducer;