import { useEffect, useState } from "react";

const Cart = ({ cartInLocalStorage }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let updatedCart = [];
        let temporaryTotal = 0

        cartInLocalStorage.forEach(cartItem => {
            fetch(`http://localhost:5100/product/${cartItem.id}`)
                .then(response => response.json())
                .then(product => {
                    product.quantity = cartItem.quantity;
                    updatedCart = [...updatedCart, product];
                    temporaryTotal += product.price * product.quantity;
                    setTotal(temporaryTotal);
                    setCart(updatedCart);
                })
                .catch(error => console.error(error));
        })
    }, [cartInLocalStorage]);

    return (
        <>
            <hr />
            <table className="table table-striped">
                <thead className="thead-dark ">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                {cart.map(cartItem => {
                    return (
                        <tr key={cartItem.id}>
                            <th scope="row" >{cartItem.id}</th>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.price} €</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.price * cartItem.quantity} €</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <h3 className="text-center">Total : {total} €</h3>
        </>
    )
}

export default Cart;