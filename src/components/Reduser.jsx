import { useReducer } from "react"
import Input from "../UI/Input"
import resuserStile from "./Reduser.module.css"

let ReduserReg = (state , action) => {

    if (action.type==="name") {
        return {...state,name:action.value}

    }
     if (action.type==="surname"){
        return {...state,surname:action.value}

    }
    if (action.type==="email"){
        return {...state,email:action.value}
    
    }
    if (action.type==="password"){
        return {...state,password:action.value}
        
    }
    return state
}

function Reduser (props) {

    let [state , dispatchState] = useReducer(ReduserReg , {
        name:"",
        surname:"",
        email:"",
        password:"",
    })
    

    let name = (e) => {
        dispatchState({type:"name",value:e.target.value})
    }

    let surname = (e) => {
        dispatchState({type:"surname",value:e.target.value})
    }

    let email = (e) => {
        dispatchState({type:"email",value:e.target.value})
    }

    let password = (e) => {
        dispatchState({type:"password",value:e.target.value})
    }

    
    let date = {
        name:state.name,
        surname:state.surname,
        email:state.email,
        password:state.password,
        id:Math.random()
    }
    
    let lift = () => {
        props.save(date)
    }

    return <div className={resuserStile.globalDiv}>
        <Input onCange={name}/>
        <Input onCange={surname}/>
        <Input onCange={email}/>
        <Input onCange={password}/>
        <button onClick={lift}>ADD</button>
    </div>
}

export default Reduser