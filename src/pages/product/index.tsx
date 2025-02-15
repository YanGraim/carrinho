import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { BsCartPlus } from "react-icons/bs";



export function Product() {
    const {id} = useParams(); 
    const [product, setProduct] = useState<ProductProps>();

    useEffect(() => {
        async function getProducts() {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        }

        getProducts();
    }, [id])
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto my-6">
                {product && (
                    <section className="w-full">
                        <div className="flex flex-col lg:flex-row">
                            <img className="flex-1 w-full max-h-72 object-contain" src={product?.cover} alt={product?.title} />
                            <div className="flex-1">
                                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                                <p className="text-justify my-4">{product?.description}</p>
                                <strong className="text-zinc-700/90 text-lg">
                                {product?.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                                <button className="bg-zinc-900 p-1 rounded ml-2">
                                    <BsCartPlus size={20} color="#fff"/>

                                </button>
                            </strong>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}