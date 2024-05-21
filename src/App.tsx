import { useState } from "react";
import CartWidget from "./components/widgets/Cart";
import SimpleCartItems, { ItemType } from "./components/widgets/SimpleCartItems";


export default function App() {

    const [testItems, setTestItems] = useState<ItemType[]>([
        {
            id: 1,
            quantity: 1,
            img: 'https://i1.wp.com/hypebeast.com/wp-content/blogs.dir/6/files/2017/03/nike-id-air-force-1-low-force-is-female-3.png?q=75&w=1000',
            title: 'Кроссовки',
            price: 2400,
            option: 'XL'
        },
        {
            id: 2,
            quantity: 1,
            img: 'https://www.freepngimg.com/thumb/dress_shirt/11-2-dress-shirt-png-picture.png',
            title: 'Рубашка',
            price: 1900,
            option: 'XXL'
        }
    ])

    return (
        <div>
            <header>
                <br/>
                <CartWidget itemsQuantity={2} href="/"/>
                <br/>
                <br/>
                <SimpleCartItems items={testItems} changeItemsState={setTestItems} redirectHref="/"/>
            </header>
        </div>
    );
}