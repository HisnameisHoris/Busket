import GoodsItem from "./GoodsItem";

import './GoodsList.css'
export default function GoodsList(props){
    const {goods = [], addToBasket = Function.prototype} = props;

    if (!goods.length){
        return <h3>Not Found</h3>;
    }

    return(
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    );
}