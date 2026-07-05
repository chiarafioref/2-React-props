function Counter(props) {
    return (
        <>

            <button onClick={props.click} className="btn btn-outline-danger m-1 d-block w-100" type="button">
                {props.title} </button>
        </>
    )
}
export default Counter