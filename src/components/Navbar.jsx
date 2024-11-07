import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import ApiCartContext from "../contexts/ApiCartContext";
import avatarImage from "../assets/profile_icon.png";
import cartIcon from "../assets/cart_icon.png";

function Navbar() {
  const { isAuthenticated, authUser, logout } = useContext(AuthContext);
  const { cart } = useContext(ApiCartContext);
  const navigate = useNavigate();

 
  const [dropdownVisible, setDropdownVisible] = useState(false);

 
  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
   
      if (
        avatarRef.current && !avatarRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

   
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl">
          <Link to="/home">Book Gallery</Link>
        </div>

        <ul className="flex items-center space-x-6 text-white">
          {!isAuthenticated ? (
            <li>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <div className="relative flex items-center space-x-2">
                  <div
                    ref={avatarRef} 
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <img className="w-6 h-7 rounded-full" src={avatarImage} alt="" />
                  </div>
                  <span className="hidden sm:block">{authUser.username}</span>

                  {/* Dropdown Menu */}
                  {dropdownVisible && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 mt-0 top-10 bg-white text-gray-800 rounded-lg shadow-lg w-48 z-10"
                    >
                      <ul>
                        <li>
                          <Link to="/past-orders" className="block px-4 py-2 hover:bg-gray-200">
                            My Orders
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={logout}
                            className="w-full text-left block px-4 py-2 text-red-500 hover:bg-gray-200"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>

              <li className="relative">
                <button onClick={() => navigate("/cart")} className="relative">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img className="w-6 h-7 rounded-full" src={cartIcon} alt="Cart" />
                  </div>
                  {cart.length > 0 && (
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                      {cart.length} {/* This shows the total cart item count */}
                    </p>
                  )}
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
