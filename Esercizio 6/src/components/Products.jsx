import { useState } from "react";

function Products() {
    const productsList = [
        { id: 1, name: "iPhone 16", category: "Telefoni" },
        { id: 2, name: "Samsung S24", category: "Telefoni" },
        { id: 3, name: "MacBook Pro", category: "Computer" },
        { id: 4, name: "Dell XPS", category: "Computer" },
        { id: 5, name: "Sony Alpha 7", category: "Fotocamere" }
    ];
    const [category, setCategory] = useState("Tutti");
    const [isOpen, setIsOpen] = useState(false);
    const filtered = productsList.filter(p => category === "Tutti" || p.category === category);
    return (
        <>
            <div className="btn-group" onClick={() => setIsOpen(!isOpen)}>
                <button className="btn btn-secondary btn-lg" type="button">{category}</button>
                <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className={"dropdown-menu " + (isOpen ? "show" : "")}>
                    <li><button className="dropdown-item" onClick={() => setCategory("Tutti")}>Tutti</button></li>
                    <li><button className="dropdown-item" onClick={() => setCategory("Telefoni")}>Telefoni</button></li>
                    <li><button className="dropdown-item" onClick={() => setCategory("Computer")}>Computer</button></li>
                    <li><button className="dropdown-item" onClick={() => setCategory("Fotocamere")}>Fotocamere</button></li>
                </ul>
            </div>
            <ul className="list-group mt-3" style={{ width: "300px" }}>
                {filtered.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.name}
                    </li>
                ))
                }
            </ul>
        </>
    )
}
export default Products;