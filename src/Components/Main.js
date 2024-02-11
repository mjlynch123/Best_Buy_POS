import react from 'react';
import "../CSS/styles.css";

export default function Main() {
    const checkout_products = [
        {
            "product_id": 1,
            "product_image": null,
            "product_name": "Rocketfish 4ft HDMI Cable",
            "product_price": 29.99,
            "sku": 6548732,
            "model": "RF-G1169",
            "sale_price": 24.99,
            "member_price": 19.99,
        },
        {
            "product_id": 2,
            "product_image": null,
            "product_name": "Rocketfish 8ft HDMI Cable",
            "product_price": 39.99,
            "sku": 6405508,
            "model": "RF-G1245",
            "sale_price": 34.99,
            "member_price": 29.99,
        },
        {
            "product_id": 3,
            "product_image": null,
            "product_name": "Apple Airpods (Gen 3)",
            "product_price": 149.99,
            "sku": 6405517,
            "model": "RF-G1257",
            "sale_price": null,
            "member_price": 139.99,
        },
    ]

    const userSearch = () => {
        document.location.href = "/userlookup";
    }

    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="left-ham">
                        <i className="fa-solid fa-bars fa-lg"></i>
                    </div>

                    <div className="service-search">
                        <i className="fa-solid fa-folder-tree"></i>
                    </div>

                    <div className="user-search" onClick={userSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div className="right-ham">
                        <i className="fa-solid fa-bars fa-lg"></i>
                    </div>
                </div>

                <div className="pos">

                    <div className="left">
                        <div className="products">

                        </div>
                        <div className="product-cost">

                        </div>
                        <div className="total-button">
                            <h1>Total</h1>
                        </div>
                    </div>

                    <div className="right">
                        <div className="product-desceription">

                        </div>

                        <div className="protection-options">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}