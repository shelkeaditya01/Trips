import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";

const Header = () =>{

    const onlineStatus=useOnlineStatus();
    const[loginBtn,setLoginBtn]=useState("Login");
    const navigate=useNavigate();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    React.useEffect(() => {
        const isLoggedIn = localStorage.getItem("tn_isLoggedIn") === "true";
        setLoginBtn(isLoggedIn ? "Logout" : "Login");
        const onAuthChange = () => {
            const ok = localStorage.getItem("tn_isLoggedIn") === "true";
            setLoginBtn(ok ? "Logout" : "Login");
        };
        window.addEventListener("tn_authchange", onAuthChange);
        const onScroll = () => setHasShadow(window.scrollY > 0);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("tn_authchange", onAuthChange);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-40 border-b border-emerald-200 bg-gradient-to-r from-emerald-50/90 to-teal-50/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${hasShadow ? "shadow-md" : ""}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-block h-8 w-8" aria-hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-full w-full">
                                <defs>
                                    <linearGradient id="tripnest-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#34d399"/>
                                        <stop offset="1" stopColor="#16a34a"/>
                                    </linearGradient>
                                </defs>
                                <circle cx="32" cy="32" r="30" fill="url(#tripnest-g)"/>
                                <path d="M18 36c6-6 12-9 14-10l14-6-6 14c-1 2-4 8-10 14-5 5-12 4-16 0s-5-11 0-16z" fill="#fff"/>
                                <path d="M40 18l6 6" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </span>
                        <span className="text-lg font-semibold tracking-tight">TripNest</span>
                        <span className="hidden sm:inline text-sm text-gray-600">{onlineStatus?"Online ✅":"Offline 🔴"}</span>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center text-sm text-gray-700">
                            <li className="mr-6">
                                <NavLink to="/" className={({ isActive }) => `inline-block pb-1 border-b-2 ${isActive ? "border-emerald-700 text-emerald-800" : "border-transparent hover:text-emerald-700 hover:border-emerald-600"}`}>Home</NavLink>
                            </li>
                            <li className="mr-6">
                                <NavLink to="/about" className={({ isActive }) => `inline-block pb-1 border-b-2 ${isActive ? "border-emerald-700 text-emerald-800" : "border-transparent hover:text-emerald-700 hover:border-emerald-600"}`}>About</NavLink>
                            </li>
                            <li className="mr-6">
                                <NavLink to="/contact" className={({ isActive }) => `inline-block pb-1 border-b-2 ${isActive ? "border-emerald-700 text-emerald-800" : "border-transparent hover:text-emerald-700 hover:border-emerald-600"}`}>Contact</NavLink>
                            </li>
                            <li className="mr-6">
                                <NavLink to="/bookings" className={({ isActive }) => `inline-block pb-1 border-b-2 ${isActive ? "border-emerald-700 text-emerald-800" : "border-transparent hover:text-emerald-700 hover:border-emerald-600"}`}>My bookings</NavLink>
                            </li>
                            <li>
                                <button onClick={()=>
                                {
                                    if(loginBtn==="Login"){
                                        navigate("/login")
                                    }
                                    else{
                                        localStorage.setItem("tn_isLoggedIn", "false");
                                        window.dispatchEvent(new Event("tn_authchange"));
                                        navigate("/")
                                    }
                                }
                                }
                                className="rounded-lg px-3 py-1.5 ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50 text-emerald-800">
                                    { loginBtn }
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={() => setIsMobileOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-800 ring-1 ring-emerald-300 hover:bg-emerald-50">
                        <span className="sr-only">Toggle navigation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                        </svg>
                    </button>
                </div>
                {isMobileOpen && (
                    <nav className="md:hidden pb-3">
                        <ul className="flex flex-col gap-2 text-sm text-gray-700">
                            <li>
                                <NavLink onClick={() => setIsMobileOpen(false)} to="/" className={({ isActive }) => `block px-2 py-2 rounded-lg ${isActive ? "bg-emerald-100 text-emerald-800" : "hover:bg-emerald-50 hover:text-emerald-700"}`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsMobileOpen(false)} to="/about" className={({ isActive }) => `block px-2 py-2 rounded-lg ${isActive ? "bg-emerald-100 text-emerald-800" : "hover:bg-emerald-50 hover:text-emerald-700"}`}>About</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsMobileOpen(false)} to="/contact" className={({ isActive }) => `block px-2 py-2 rounded-lg ${isActive ? "bg-emerald-100 text-emerald-800" : "hover:bg-emerald-50 hover:text-emerald-700"}`}>Contact</NavLink>
                            </li>
                            <li>
                                <button onClick={()=>
                                {
                                    if(loginBtn==="Login"){
                                        navigate("/login")
                                    }
                                    else{
                                        localStorage.setItem("tn_isLoggedIn", "false");
                                        window.dispatchEvent(new Event("tn_authchange"));
                                        navigate("/")
                                    }
                                    setIsMobileOpen(false);
                                }
                                }
                                className="rounded-lg px-3 py-2 ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50 text-emerald-800">
                                    { loginBtn }
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    )
};

export default Header;