import { Stage, useMetrics, usePerformanceMark } from '@cabify/prom-react';
import { getNodeText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const { observe } = useMetrics();
    const [isLoading, setIsLoading] = useState(true)
    const products = useSelector((state) => state.cart);

    useEffect(() => {
        if (products) {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        }
    }, [products])

    usePerformanceMark(isLoading ? Stage.Usable : Stage.Complete, 'products');

    const handleRemove = (productId) => {
        observe('my_removeCart_count', { custom_tag: 'custom value' }, 1);
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {isLoading ? 'LOADING...' : products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
