import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";

const Navbar =() => {
    let {user, logoutUser} = useContext(AuthContext);

    return (
        <div class="w-full">
    <nav class="fixed top-0 z-10 w-full bg-white md:absolute md:bg-transparent">
        <div class="container m-auto px-2 md:px-12 lg:px-7">
            <div class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
                    <a href="/" aria-label="logo" class="flex space-x-2 items-center">
                        {/* <Image src="https://tailus.io/sources/blocks/food-delivery/preview/images/icon.png" class="w-12" alt="tailus logo" width="144" height="133"> */}
                        <span class="text-2xl font-bold text-yellow-900">Store <span class="text-yellow-700">Manegment</span></span>
                    </a>

                    <button aria-label="humburger" id="hamburger" class="relative w-10 h-10 -mr-2 lg:hidden">
                        <div aria-hidden="true" id="line" class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                        <div aria-hidden="true" id="line2" class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                    </button>
                </div>

                <div class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                    <div class="text-gray-600 lg:pr-4">
                        <ul class="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                        <li>
                                <a href="/" class="block md:px-4 transition hover:text-yellow-700">
<span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="/products" class="block md:px-4 transition hover:text-yellow-700">
<span>Products</span>
                                </a>
                            </li>
                            <li>
                                <a href="/categories" class="block md:px-4 transition hover:text-yellow-700">
<span>Cetegories</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block md:px-4 transition hover:text-yellow-700">
<span>Users</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                        <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                            <span class="block text-yellow-800 font-semibold text-sm">
                                Sign up
                            </span>
                        </button>

                        {user ? (

                        <button onClick={logoutUser} type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                            <a href="/login">
                            <span class="block text-yellow-900 font-semibold text-sm">
                                Logout
                            </span>
                            </a>
                        </button>):(
                        <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                            <a href="/login">
                            <span class="block text-yellow-900 font-semibold text-sm">
                                Login
                            </span>
                            </a>
                        </button>
                        )}

                        {user && <span>Hello {user.username}</span>}
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>

)}
export default Navbar ;