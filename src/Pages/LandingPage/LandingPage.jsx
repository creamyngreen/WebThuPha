import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import heroBg from "../../assets/LandingPage/hero-bg.png";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import aboutus1 from "../../assets/LandingPage/aboutus1.png";
import aboutus2 from "../../assets/LandingPage/aboutus2.png";
const LandingPage = () => {
    return (        
        <>  
        <div>
            <TopNavBar />
            <NavBar />
        
        <div 
            className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center" 
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <h1 className="text-8xl font-bold mb-6">Live Green, Live Luxuriously.</h1>
            <div className="flex items-center">
                <div className="relative">
                    <select className="mr-0 p-2 rounded-l-full border-none bg-gray-200 font-semibold text-black h-full appearance-none pr-10">
                        <option>For Sale</option>
                        <option>For Rent</option>
                        <option>Sold</option>
                    </select>
                    <MdKeyboardArrowDown className=" text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
                <input 
                    type="text" 
                    placeholder="Enter an address, city, neighborhood, or ZIP code." 
                    className="p-2 border-none bg-white text-black w-[70rem]"
                />
                <button className="ml-0 p-3 bg-[#9C8321] rounded-r-full text-white flex items-center">
                    <GoSearch />
                </button>
            </div>
            
        </div>

        {/* About Us Section */}
        <div className="py-10   text-center">
                <h2 className="text-4xl font-bold mb-6 ">About Us</h2>
            <div className="bg-secondary">
                <div className="flex flex-col md:flex-row justify-around items-center  mb-12 ">
                    <div className="max-w-md mb-6 ">
                        <div className="flex items-center">
                            <div className="border-t-4 border-tertiary w-full mb-2 "></div>
                            <h3 className="text-2xl font-semibold text-tertiary mb-5 mr-[15rem] whitespace-nowrap">Who We Are</h3>
                        </div>
                        <div className="space-y-3">
                        <p className="text-5xl text-left font-bold max-w-5xl text-nowrap">
                            Pioneer in transferring technology 
                        </p>
                        <p className="text-5xl text-left font-bold max-w-5xl text-nowrap">
                                solutions for real estate management 
                            </p>
                            <p className="text-5xl text-left font-bold max-w-5xl text-nowrap">
                                in Vietnam with <span className="font-bold text-tertiary">EzLife Realty.</span>
                            </p>
                        </div>
                        <div className="space-y-3 mt-10">
                            <p className="text-2xl text-left mt-8 text-nowrap  ">
                                <span className="font-bold">EZLIFE REALTY </span> is the company to develop and hand over the realty 
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                management solutions to the best quality. <span className="font-bold">EZLIFE REALTY </span> has got lots of 
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                practical experiences in consulting, managing, and applying technology in the
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                real estate. Dealing with our talented staff, we are willing to provides some 
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                good services including consultancy; professional training; exploitation and
                            </p>
                            <p className="text-2xl text-left  text-nowrap  ">
                                technological application in our management and operation for our investors,
                            </p>
                        </div>
                    </div>
                        <img src={aboutus1} alt="Real estate" className="max-w-3xl ml-[34rem] rounded-lg " />
                    </div>
                    <div className="flex flex-col md:flex-row justify-around  items-center mt-24">
                    <img src={aboutus2} alt="Team" className="max-w-3xl rounded-lg mr-[14rem] " />
                        <div className="max-w-md mb-6 mr-[20rem]">
                        <div className="flex items-center">
                            <div className="border-t-4 border-tertiary w-full mb-2 "></div>
                            <h3 className="text-2xl font-semibold text-tertiary mb-5 mr-[15rem] whitespace-nowrap">Our Mission</h3>
                        </div>
                            <div className="space-y-3">
                            <p className="text-5xl text-left font-bold text-nowrap">
                                <span className="font-bold text-tertiary text-left ">EzLife Realty</span> will be the real estate 
                            </p>
                                <p className="text-5xl text-left font-bold text-nowrap">
                                manager’s fellow.
                            </p>    
                            </div>
                            <div className="space-y-3 mt-10">
                                <p className="text-2xl text-left mt-8 text-nowrap">
                                    The agency’s mission is to provide clients with a selection of properties 
                                </p>
                                <p className="text-2xl text-left mt-8 text-nowrap">
                                    that meet high environmental standards, while also providing a 
                                </p>
                                <p className="text-2xl text-left mt-8 text-nowrap">
                                    comfortable and luxurious lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </> 
    )   
}

export default LandingPage;
