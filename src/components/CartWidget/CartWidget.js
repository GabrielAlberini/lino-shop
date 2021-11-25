import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart-container">
            <FontAwesomeIcon className="cart-shop" icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget;