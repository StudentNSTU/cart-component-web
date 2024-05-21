import style from './style.module.scss'
import { FaShoppingCart } from "react-icons/fa";

type CartProps = {
    cartIconColor?:string
    areaColor?:string
    itemsQuantity: number
    href?: string
}

export default function CartWidget(props:CartProps) {
    return (
        <a href={props.href} style={{pointerEvents: props.href?'auto':'none', cursor: props.href?'pointer':'none'}}>
            <div className={style.wrapper}>
                <FaShoppingCart className={style.icon} style={{color: props.cartIconColor}}/>
                <div className={style['items-quantity-area']} style={{backgroundColor: props.areaColor}}>
                    <p>{props.itemsQuantity}</p>
                </div>
                <p className={style.title}>Корзина</p>
            </div>
        </a>
    );
}