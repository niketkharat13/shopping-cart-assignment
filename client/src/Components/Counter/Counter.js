import { useDispatch } from "react-redux";
import { updateCartProductQnt } from "../../store/action/cart";
import { Icon } from '@iconify/react';
import CounterCss from './Counter.module.css';
const Counter = ({ currentValue, maxValue, pId }) => {
    const dispatch = useDispatch();
    return (
        <div className={CounterCss.maincounter}>
            <button className={CounterCss.counterbtn} onClick={() => dispatch(updateCartProductQnt({id: pId, type: 'DECREMENT'}))}><Icon icon="akar-icons:minus" /></button>
            <span>{currentValue}</span>
            <button className={CounterCss.counterbtn} onClick={() => dispatch(updateCartProductQnt({id: pId, type: 'INCREMENT'}))} disabled={maxValue < currentValue}><Icon icon="akar-icons:plus" /></button>
        </div>
    )
}
export default Counter;