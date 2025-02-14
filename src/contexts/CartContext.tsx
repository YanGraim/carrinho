import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProductProps) => void; 
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);

    function addItemCart(newItem: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)
        if(indexItem !== -1) {
            const cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            return;
        }

        const data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
    }

    function removeItemCart(product: CartProps) {
        const indexItem = cart.findIndex(item => item.id === product.id);

        if(indexItem > 1) {
            // diminui o amount
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
    }

    function totalResultCart(items: CartProps[]) {
        const myCart = items;
        const result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0);
        const resultFormated = result.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        return resultFormated;

    } 

    return (
        <CartContext.Provider value={{cart, cartAmount: cart.length, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;