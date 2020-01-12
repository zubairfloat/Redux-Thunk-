// export const anothername = (name)=>{
//     return{
//         type:'Change_name',
//         payload:name
//     }
// }
//


export const anothername = ()=>{
    return async (dispatch)=> {

        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await data.json()
        dispatch({type:'Change_name', payload:res2[2].name})
    }
}

export const emailname = ()=> {
    return async (dispatch)=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res3 = await data.json()
        dispatch({type:'Change-Email', payload:res3[1].email})

    }
}
export const cityname = ()=> {
    return async (dispatch)=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res3 = await data.json()
        dispatch({type:'Change-City', payload:res3[4].address.city})

    }
}

export const addWish = ()=>{
    return {
        type:'ADD_WISH',
        payload:'code'
    }
}
export const addsub = ()=>{
    return{
        type:'ADD_SUB',
        payload:'Data Structure'
    }
}

export const addlaptop = ()=>{
    return{
        type:'ADD_LAPTOP',
        payload:'HP Elite BOOK'
    }
}

