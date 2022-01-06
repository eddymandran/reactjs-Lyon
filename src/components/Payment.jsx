import { useEffect, useState } from "react";

const Payment = ({cartInLocalStorage, resetCart}) => {
    const [isPaymentValidated, setIsPaymentValidated] = useState();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState();

    const paymentApi = () => {
        return Math.round(Math.random()) === 1;
    }

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

    const handlePayment = () => {
        const paymentStatus = paymentApi();
        setIsPaymentValidated(paymentStatus);

        if (paymentStatus === false) return;

        const address = JSON.parse(localStorage.getItem('address'));

        let order = { cart, total, address }

        fetch('http://localhost:5100/order', { headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(order) } )
            .then(response => response.json())
            .then(order => {
                setOrder(order);
                localStorage.setItem('cart', JSON.stringify([]));
                resetCart();
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            {order && <p className="alert alert-primary">{`Votre commande ${order.id} est en cours de préparation`}</p>}
            {isPaymentValidated === false && <p className="alert alert-warning">Votre paiement nest pas validé</p>}
            <button className={order ? 'btn btn-success disabled' : 'btn btn-success'} onClick={handlePayment}>Pay</button>
        </>
    )
}

export default Payment;