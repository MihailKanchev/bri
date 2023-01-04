
import Logo from '../components/Logo'
import React from 'react';
import {Link} from 'react-router-dom'


const NavBar = () => {


    return (
        
        <nav className="bg-green-500 " >
            <div className="  ">
                <div className="flex justify-center items-center space-x-20">
                    <div className=" transition duration-500 hover:scale-125">
                        
                        <button className="text-red-700 font-semibold">
                            Бутик
                        </button>
                    </div>
                    
                    <div className="">
                        
                        <a href="http://localhost:3000/"><Logo/></a>
                       
                    </div>
                    <div className=" transition duration-500 hover:scale-125 relative">
                        <a href="http://localhost:3000/about/">
                            <button className="text-red-700 font-semibold ">
                                За мен
                            </button>
                        </a>
                    </div>
                </div>
                    
            </div>
            
        </nav>
    )
}

export default NavBar