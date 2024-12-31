function User (props) {

    let filter = props.expensess



    return <div className="globalDiv">
        {filter.map((el) => {
            return <div className={el.id}>
                <h1>{el.name}</h1>
                <h1>{el.surname}</h1>
                <h1>{el.email}</h1>
                <h1>{el.password}</h1>
            </div>
        })}
    </div>
}

export default User