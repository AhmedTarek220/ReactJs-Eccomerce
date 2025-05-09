import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Mobile from "../MobileStyle/Mobile";


function NavBar() {
  const cart = useSelector(state => state.cart || []);
  const wishList = useSelector(state => state.wishList || []);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div className="navbar flex justify-between items-center p-5 bg-white shadow-2xl fixed uppercase z-50 w-full">
      <Link to="/" className="text-3xl md:mx-0">Karia</Link>

      <div className="ul-container flex items-center justify-center gap-4">
        {user ? (

          <div className="relative"
            onClick={() => setShowMenu(!showMenu)}>
            {user.photoURL ?
              <img
                src={user.photoURL}
                loading="lazy"
                alt="profilePhoto"
                className="w-12 h-12 rounded-full cursor-pointer "
              />
              : <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-400 cursor-pointer">{user.email[0]}</div>
            }


            {/* القائمة التي ستظهر عند الضغط على الصورة */}
            <div
              className={`absolute top-12 right-0 bg-white shadow-lg border rounded-lg p-4 w-52 z-50  text-black  transition-all duration-300 ease-in-out ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <p className="mb-2 font-semibold">Welcome, {user.displayName || user.email.split('@')[0]}</p>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>

        ) : (
          <div className="login">
            <Link to="/logIn" className="text-xl hover:text-[#bf8545]">
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" fill="currentColor"><path d="M56,64V57.48A8.43,8.43,0,0,0,47.56,49H16.44A8.43,8.43,0,0,0,8,57.48V64H.9V57.48A15.53,15.53,0,0,1,16.44,41.94H47.56A15.53,15.53,0,0,1,63.1,57.48V64Zm-23.47-27a18.66,18.66,0,0,1-13.11-5.43,18.54,18.54,0,0,1,0-26.22A18.53,18.53,0,0,1,51.07,18.51,18.52,18.52,0,0,1,32.54,37.05Zm0-30a11.44,11.44,0,1,0,8.09,3.35A11.36,11.36,0,0,0,32.54,7.07Z"></path></svg>
            </Link>
          </div>
        )}
        <ul className="lg:flex gap-5 max-w-full hidden items-center relative">


          <li>
            <Link to="/Cart" className="text-xl">
              Cart <span className="font-sans text-[#bf8545]">({cart.length})</span>
            </Link>
          </li>

          <li>
            <Link to="/WishList" className="text-xl">
              WishList <span className="font-sans text-[#bf8545]">({wishList.length})</span>
            </Link>
          </li>
        </ul>
      </div>


      <Mobile />
    </div>
  );
}

export default NavBar;
