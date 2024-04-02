import { useDispatch } from 'react-redux';

import { ChangeEventHandler, useState } from 'react';

import './CreatorGoods.css';
import { addGoods } from '../../redux/actions/actionCreators';

export default function CreatorGoods() {
    const [isDiscount, setIsDiscount] = useState(false);
    const [objGoods, setObjectGoods] = useState (
        { name: '', price: '', discount: '', src: 'https://fakeimg.pl/200x250/f5f5dc/?text=Good' }
    )

    const dispatch = useDispatch();

    const handleAddGoods = () => {
        dispatch(addGoods(objGoods));
        setObjectGoods({ ...objGoods, name: '', price: '', discount: '', src: 'https://fakeimg.pl/200x250/f5f5dc/?text=Good' });
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const targetInput = e.target as HTMLInputElement;
        setObjectGoods({...objGoods, [targetInput?.name]: targetInput?.value})
    };

    return (
        <div className="create-goods_wrapper">
            <h3 className="title">Форма добавления товара: </h3>
            <div className="input_wrapper">
                <label htmlFor="name">Название товара: </label>
                <input onChange={handleChange} value={objGoods.name} name='name' id="name" type="text" required />
            </div>
            <div className="input_wrapper">
                <label htmlFor="price">Стоимость: </label>
                <input onChange={handleChange} value={objGoods.price} name='price' id="price" type="number" required />
            </div>
            <div className="input_wrapper">
                <label htmlFor="checker">Скидка: </label>
                <input onClick={() => setIsDiscount(!isDiscount)} id="checker" defaultChecked={false} type="checkbox" />
            </div>
            {isDiscount &&
            <div className="input_wrapper">
                <label htmlFor="discount">Размер скидки, %: </label>
                <input onChange={handleChange} value={objGoods.discount} name='discount' id="discount" type="number" required />
            </div>}
            <button onClick={() => handleAddGoods()} type="button" className="create-goods_btn">Добавить</button>
        </div>
    )
}