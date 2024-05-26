import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "../hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const link = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/shop/salad'>Our Shop</Link></li>
        <li>
            <Link to='/dashboard/cart' className="">
                Cart
                <div className="badge badge-secondary">{cart.length}</div>
            </Link>
        </li>
        {
            user ? <li><Link to='/'>Logout</Link></li> : <Link onClick={handleLogOut} to='/login'>Login</Link>
        }
    </>

    return (
        <div>
            <div className="max-w-7xl fixed z-10 navbar bg-black bg-opacity-60 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-12 menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 w-52">
                            {
                                user ? <li><p className="justify-between">{user.displayName}</p></li> : ""
                            }
                            {
                                user ? <li><Link onClick={handleLogOut} to='/'>Logout</Link></li> : <Link to='/login'>Login</Link>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;