import { useParams } from "react-router-dom";


export function Product() {
    const { id } = useParams();
    return (
        <div>
            <h1>Pagina do produto!  {id}</h1>
        </div>
    )
}