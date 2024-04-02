import { useSelector } from "react-redux";

import ListItem from "./ListItem/ListItem";

import './ListGoods.css';
import { TObjectGood } from "../../types/TObjectGood";

export default function ListGoods() {
    const goodsList = useSelector(state => state.goodsList)

    return (
        <div className="list-goods_wrapper">
            <h3 className="title">Список товаров</h3>
            <ul className="list-goods">
                {goodsList && goodsList.map((i: TObjectGood, index: number) => <ListItem key={index} obj={i} />)}
            </ul>
        </div>
    )
}