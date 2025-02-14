import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";

import { BsCartPlus } from "react-icons/bs";

export interface ProductProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() {
    const {addItemCart} = useContext(CartContext);
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products");
            setProducts(response.data);
        }

        getProducts();
    }, [])

    function handleAddCart(product: ProductProps) {
        addItemCart(product);
    }
    
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-3xl mb-4 mt-10 text-center">Produtos em alta</h1>
                <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {products.map((product) => (
                        <section className="w-full mb-10 flex flex-col justify-center" key={product.id}>
                            <img className="w-full rounded-lg max-h-70 mb-2" src={product.cover}  alt={product.title}/>
                            <p className="font-medium mt-2 mb-3">{product.title}</p>
                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">
                                    {product.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>
                                <button className="bg-zinc-900 p-1 rounded" onClick={() => handleAddCart(product)}>
                                    <BsCartPlus size={20} color="#fff"/>
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    )
}