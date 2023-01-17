
import Logo from '../components/Logo'
import React from 'react';
import {Link} from 'react-router-dom'


const NavBar = () => {


    return (
        
        <nav className="bg-green-500 " >
            <div className="  ">
                <div className="flex justify-center items-center space-x-20">
                    <div className=" transition duration-500 hover:scale-125">
                        <Link to={`/`}>
                            <button className="text-red-700 font-semibold">
                                Бутик
                            </button>
                        </Link>
                    </div>
                    
                    <div className="">
                        
                    <Link to={`/`}><Logo/></Link>
                       
                    </div>
                    <div className=" transition duration-500 hover:scale-125 relative">
                        <Link to={`/about`}>
                            <button className="text-red-700 font-semibold ">
                                За мен
                            </button>
                        </Link>
                    </div>
                    <div className=" transition duration-500 hover:scale-125 relative">
                        <Link to={`/cart`}>
                            <button className="text-red-700 font-semibold ">
                                Количка
                            </button>
                        </Link>
                    </div>
                </div>
                    
            </div>
            
        </nav>
    )
}

export default NavBar