import { TObjectGood } from '../../../types/TObjectGood';

import './ListItem.css';

export default function ListItem({ obj }: { obj: TObjectGood}) {
    const { name, price, discount, src } = obj;

    return (
        <li className="list_item">
            {discount &&
            <div className="discount">
                <span className="count">{discount}</span>
                <span className="percent">%</span>
            </div>}
            <img src={src} alt="Изображение товара" className="good_image" />
            <div className="price_box">
                {discount &&
                <>
                    <span className="price_new">{+price - (+price * +discount) / 100} &#8381;</span>
                    <span className="price_old">{price} &#8381;</span>
                </>}
                {!discount && <span className="price_new">{price} &#8381;</span>}
            </div>
            <h4 className="good_title">{name}</h4>
        </li>
    )
}