/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (

        // <div className='bg-gradient-to-tr from-green-800 to-green-500'>
        <div style={{backgroundImage: "url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}} className="bg-cover bg-center bg-no-repeat h-screen relative ">
         <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent opacity-70 h-full "></div>
         <img src="/logo2.png" className='bg-transparent absolute h-full z-10' alt="logo" />

    <div className="mx-auto w-full max-w-7xl text-white">

            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">

                    <div className="border-2 shadow-xl dark:shadow-gray-800 rounded-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

                        <h2 className="text-4xl  sm:text-7xl text-white p-4 ">
                            Explore the nature with
                            <span className="hidden font-extrabold sm:block text-7xl ">
                            
                           <h1>Nature's heaven</h1> 
                            </span>
                        </h2>



                    <div className='p-2'>
                        <Link
                            className="text-white inline-flex text-white items-center px-6 py-3 font-medium bg-green-700 rounded-lg hover:opacity-75"
                            to="/Explore"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                {/* <path src="C:\Users\ayush\Desktop\coding\Projects\NatureWorld\src\assets\search-svgrepo-com.svg" /> */}
                            </svg>
                            &nbsp; Explore
                        </Link>
                    </div>

                    </div>
                </div>

                {/* <div className="absolute inset-0 w-full sm:my-20 sm:pt-15 pt-12 h-full ">
                    <img className="w-96 rounded-lg" src="https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image1" />
                </div> */}
            </aside>

            {/* <div className="grid   sm:mt-20">
                <img className="sm:w-96 w-48 rounded-lg" src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="image2" />
            </div> */}

            {/* <h1 className=" text-2xl sm:text-5xl py-10 font-medium"> World's first and biggest platform</h1> */}
        </div>
        </div>

       
    );
}