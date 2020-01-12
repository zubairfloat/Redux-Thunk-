import React from 'react';

import './App.css';
import {connect} from 'react-redux';
import {anothername, addWish, addsub, addlaptop, emailname, cityname} from "./action/myaction";


function App(props) {
    const mywish = props.mywish.map(item=>{
        return <h2 key={Math.random()}> {item}</h2>
    })

    const mysub = props.mysub.map(item=>{
        return <h2 key={Math.random()}> {item}</h2>
    })

    const mylaptop = props.mylaptop.map(item=>{
        return <h2 key={Math.random()}> {item}</h2>
    })

    console.log("props are",props)
  return (


    <div className="App">


        <h1> My Name is : {props.myname} </h1><button onClick={()=>{props.changeName()}}> Change name</button>
        <h1>My E-mail is : {props.myemail}</h1><button onClick={()=>{props.changeEmail()}}>Change E-mail</button>
        <h1>My City is : {props.mycity}</h1><button onClick={()=>{props.changeCity()}}>Change City</button>
        {mywish}
        {mysub}
        {mylaptop}

        <button onClick={()=>{props.addWish()}}> ADD Wish</button>
        <br></br>
        <br></br>
        <button onClick={()=>{props.addsub()}}> ADD Sub</button>
        <br></br>
        <br></br>
        <button onClick={()=>{props.addlaptop()}}> ADD Laptop </button>

    </div>
  );
}

const mapStateTopProps  = (state)=>{
    return {
        myname:state.name,
        myemail:state.email,
        mywish:state.wish,
        mysub:state.sub,
        mylaptop:state.laptop,
        mycity:state.city


    }
}

const mapDispatchtoprops = (dispatch)=>{
    return{
        changeName:()=>{dispatch(anothername())},
        changeEmail:()=>{dispatch(emailname())},
        changeCity:()=>{dispatch(cityname())},
        addWish:()=>{dispatch(addWish()) },
        addsub:()=>{dispatch(addsub()) },
        addlaptop:()=>{dispatch(addlaptop()) }
    }
}


export default connect(mapStateTopProps,mapDispatchtoprops)(App);
