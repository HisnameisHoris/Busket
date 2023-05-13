import BasketItem from "./BasketItem";
import './BasketList.css';

export default function BasketList(props){
    const {
        order = [], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
        } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return(
        <ul class="collection basket-list">
            <li class="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (<BasketItem 
                key={item.id} 
                removeFromBasket={removeFromBasket} 
                incQuantity={incQuantity}
                decQuantity={decQuantity}
                {...item}
                />))
            ):(
                <li class="collection-item">Корзина пуста</li>
            )}           
            <li class="collection-item active">общая стоимость заказа:{totalPrice}</li>
            <i className="material-icons basket-clear" onClick={handleBasketShow}> clear</i>
        </ul>
    );
}