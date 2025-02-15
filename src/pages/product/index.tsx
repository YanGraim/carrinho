import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";



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
            <h1>pagina detalhe {id}</h1>
        </div>
    )
}