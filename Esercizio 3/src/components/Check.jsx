function Check(props) {
    return (
        <>



            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Termini e condizioni di servizio</h6>
                    <p className="card-text">Leggere attentamente prima di accettare Leggere attentamente prima di accettare Leggere attentamente prima di accettare Leggere attentamente prima di accettare Leggere attentamente prima di accettare Leggere attentamente prima di accettare Leggere attentamente prima di accettare Leggere attentamente prima di accettare</p>
                    <ul class="list-group">
                        <li className="list-group-item">
                            <input checked={props.isAcepted} onChange={props.onChange} className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
                            <label className="form-check-label stretched-link" for="firstCheckboxStretched">ACCETTO</label>
                        </li>
                    </ul>
                    <button type="button" disabled={!props.isAcepted}>Registrati</button>
                </div>
            </div>




        </>
    )
}
export default Check;