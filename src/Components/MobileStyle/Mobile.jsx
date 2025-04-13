import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa"; // استيراد الأيقونات

function Mobile() {
    const cart = useSelector(state => state.cart || []);
    const wishList = useSelector(state => state.wishList || []);

    return (
        <div className="bg-gray-100 shadow-lg fixed uppercase z-50 bottom-0 lg:hidden left-0 w-full flex justify-around items-center  border-t border-gray-300">
            {/* Home Link */}
            <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 transition-all duration-300 flex flex-col items-center justify-center "
            >
                <FaHome className="text-3xl " />
                <span className="text-sm font-medium">Home</span>
            </Link>

            {/* WishList Link */}
            <Link
                to="/WishList"
                className="text-gray-700 hover:text-red-500 transition-all duration-300 flex flex-col items-center justify-center mt-2"
            >
                <FaHeart className="text-2xl mb-1" />
                <span className="text-sm font-medium">WishList</span>
                <span className="text-xss text-gray-500">({wishList.length})</span>
            </Link>

            {/* Cart Link */}
            <Link
                to="/Cart"
                className="text-gray-700 hover:text-green-500 transition-all duration-300 flex flex-col items-center justify-center mt-2"
            >
                <FaShoppingCart className="text-2xl mb-1" />
                <span className="text-sm font-medium">Cart</span>
                <span className="text-xs text-gray-500">({cart.length})</span>
            </Link>
        </div>
    );
}

export default Mobile;