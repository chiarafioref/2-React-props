function Button(props) {
    return (
        <>
            <button type="button" className={props.className} onClick={props.click}>Cliccami!</button>
        </>
    )
}
export default Button;