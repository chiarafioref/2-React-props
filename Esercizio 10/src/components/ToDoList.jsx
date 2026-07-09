function ToDoList(props) {


    return (
        <>
            <ul className="list-group">
                {props.tasks.map((todoli) => {
                    return (
                        <li key={todoli.id} className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" id={"check-" + todoli.id} checked={todoli.done} onChange={() => props.toggleTask(todoli.id)} />
                            <label className={`form-check-label ${todoli.done ? "text-decoration-line-through" : ""}`} htmlFor={"check-" + todoli.id}>{todoli.text}</label>
                        </li>
                    );
                })}
            </ul>

        </>
    )
}
export default ToDoList;