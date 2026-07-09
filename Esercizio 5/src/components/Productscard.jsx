import { useState } from "react";

function Productscard(props) {
    const product = {
        name: "iPhone 16", price: 879, chip: "Chip A19 Pro", battery: "Fino a 37 ore di riproduzione video Nota 3", description: "Fotocamera frontale Center Stage da 18MP, Inquadratura automatica per le foto, Video ultrastabilizzato, Acquisizione doppia, Inquadratura automatica per le videochiamate", img: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large_2x.jpg",
        variants: [
            { GB: 128, percent: 0 },
            { GB: 256, percent: 10 }
        ]
    }
    const [finalPrice, setFinalPrice] = useState(879);

    return (
        <>
            <div className="card" style={{ width: "20%", }}>
                <img src={product.img} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{finalPrice} €</li>
                    <li className="list-group-item">{product.battery}</li>
                    <li className="list-group-item">{product.chip}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link" onClick={() => setFinalPrice(879)}>{product.variants[0].GB} GB</a>
                    <a href="#" className="card-link" onClick={() => setFinalPrice(979)}>{product.variants[1].GB} GB</a>
                </div>
            </div>


        </>
    )
}
export default Productscard;