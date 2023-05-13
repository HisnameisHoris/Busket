import './GoodItem.css'

export default function GoodsItem(props){
    const {id,name,description,price,full_background, addToBasket = Function.prototype,} = props;

    return(
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} />
                <span className="card-title"></span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <div className="btn"
                onClick={() =>
                    addToBasket({
                        id,name,price
                    })
                }>Купить</div>
                <div className="right">{price}</div>
            </div>
        </div>
    );
}