import style from './style.module.scss'
import { MdDelete } from "react-icons/md";

export type ItemType = {
    id: number
    quantity: number
    img: string
    title: string
    price: number
    option?: string
}

type CartProps = {
    items: ItemType[]
    changeItemsState: (value: ItemType[]) => void
    redirectHref: string
}

export default function SimpleCartItems(props: CartProps) {

    const totalPrice = props.items.reduce((result, item) => result + (item.price * item.quantity), 0)

    const deleteItemFrCart = (itemId: number) => {
        const updatedItems = props.items.filter(item => item.id !== itemId)
        props.changeItemsState(updatedItems)
    }

    const changeQual = (itemId: number, value: number) => {
        const updatedItems = props.items.map(item => {
            if (item.id === itemId)
                return { ...item, quantity: item.quantity + value }
            return item
        })
        props.changeItemsState(updatedItems)
    }

    const renderItems = props.items.map((item: ItemType) => (
        <div className={style['cart-item']}>
            <img src={item.img} alt="cart_item" />
            <div className={style.info}>
                <button className={style['delete-btn']} onClick={() => deleteItemFrCart(item.id)}><MdDelete /></button>
                <p className={style['item-title']}>{item.title}</p>
                <p>{item.option}</p>
                <p className={style['item-total-price']}>{item.price * item.quantity} ₽</p>
                <div className={style.quality}>
                    <p>Количество</p>
                    <div className={style['tool-menu']}>
                        <button className={style.tool} onClick={() => changeQual(item.id, 1)}>+</button>
                        <p>{item.quantity}</p>
                        <button className={style.tool} onClick={() => { item.quantity > 1 && changeQual(item.id, -1) }}>-</button>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className={style.wrapper}>
            <div className={style['items-container']}>
                {renderItems}
            </div>
            <p className={style['total-price']}>Итог: {totalPrice} ₽</p>
            <div>
                <a href={props.redirectHref} className={style['redirect-btn']}>Оформить</a>
            </div>
        </div>
    );
}