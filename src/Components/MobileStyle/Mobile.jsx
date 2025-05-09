import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa"; // استيراد الأيقونات

function Mobile() {
    const cart = useSelector(state => state.cart || []);
    const wishList = useSelector(state => state.wishList || []);

    return (



        <div className="bg-gray-100 shadow-lg py-3 fixed uppercase z-50 bottom-0 lg:hidden left-0 w-full flex justify-around items-center  border-t border-gray-300">
            {/* Home Link */}
            <Link
                to="/"
                className="text-gray-700 transition-all duration-300 flex flex-col items-center justify-center "
            >
                <FaHome size={35} />
            </Link>

            {/* WishList Link */}
            <Link
                to="/WishList"
                className="relative text-gray-700  transition-all duration-300 flex gap-2 items-center justify-center mt-2"
            >
                <FaHeart size={30} />

                <span className="text-2xl font-bold font-sans text-[#bf8545] absolute bottom-4 left-7">({wishList.length})</span>
            </Link>

            {/* Cart Link */}
            <Link
                to="/Cart"
                className="relative text-gray-700 transition-all duration-300 flex flex-col items-center justify-center mt-2"
            >
                <FaShoppingCart size={30} className="hover:text-[#BA7A2D]" />

                <span className="text-2xl  font-bold font-sans text-[#bf8545] absolute bottom-4 left-7">({cart.length})</span>
            </Link>
        </div>

    );
}

export default Mobile;