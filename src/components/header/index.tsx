import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
    return (
        <header>
            <nav>
                <Link to={"/"}>
                    Dev Shop
                </Link>

                <Link to={"/cart"}>
                    <FiShoppingCart size={24} color="#121212"/>
                </Link>
            </nav>
        </header>
    )
}