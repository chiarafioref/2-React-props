function Languages(props) {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        {props.languages?.map((item) => (
                            <a key={item.lang} className={`list-group-item list-group-item-action ${props.currentLang === item.lang ? 'active' : ''}`}
                                onClick={() => props.onChange(item.lang)} href="#">{item.lang}</a>
                        ))}
                    </div>
                </div>
            </div>
            <h1 className="mt-4">{props.children}</h1>
        </>
    )
}

export default Languages;
