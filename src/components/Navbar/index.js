import React  from 'react'
import { Account } from '../index'
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {

    return (
        <div className="bg-white dark:bg-gray-700 shadow">
            <div className="container px-5 lg:px-20 py-3 flex justify-between items-center ">
                <div className="px-8 py-1 rounded-md bg-teal-400">
                    <span className="text-white text-lg">TokoKita</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center p-3">
                        <FaShoppingCart className="text-gray-700" />
                    </div>
                    <div className="flex items-center p-3">
                        <FaShoppingCart className="text-gray-700" />
                    </div>
                    <Account />
                </div>
            </div>
        </div>
    )
}
