import InputStile from "./Input.module.css"

function Input(props) {
    return <input className={InputStile.input} onChange={props.onCange} value={props.value} type="text" />
}

export default Input