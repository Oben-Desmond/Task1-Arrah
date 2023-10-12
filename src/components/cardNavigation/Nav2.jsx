import { motion } from "framer-motion"

const Nav2 = ({ activePage, handlePageSwitch }) => {
    return (
        <nav className="grid grid-cols-3 bg-arrah-gray-dark text-arrah-gray-light text-xl  rounded-t-2xl">
            <motion.button
                style={{ borderRadius: "20px 50px 50px 0px", }}
                className={` p-5 col-span-2 grid grid-cols-2 truncate text-sm md:text-md xl:text-xl ${activePage === 2 ? "from-[#A6E3FF] to-[#6AAAFB] bg-gradient-to-r shadow-md text-white " : ""
                    }`}

            >
                <div onClick={() => handlePageSwitch(1)} className="flex items-center justify-center">
                    <button className="text-sm w-5 h-5 mr-2 rounded-full bg-white text-arrah-blue-accent">1</button>
                    Your Profile
                </div>
                <div onClick={() => handlePageSwitch(2)} className="flex items-center justify-center truncate text-sm md:text-md xl:text-xl">
                    <motion.button initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-sm w-5 h-5 mr-1 rounded-full bg-white text-arrah-blue-accent ">2</motion.button>
                    Business Information
                </div>
            </motion.button>
            <button
                className={`p-5 truncate text-sm md:text-md xl:text-xl flex items-center justify-center ${activePage === 3 ? "from-[#A6E3FF] to-[#6AAAFB] bg-gradient-to-r shadow-md text-white " : ""
                    }`}
                style={{ borderRadius: activePage === 3 ? "0px 50px 50px 0px" : "0px" }}
                onClick={() => handlePageSwitch(3)}
            >
                <button className="text-sm w-6 h-6 mr-2 rounded-full bg-[#abb0bf]">3</button>
                Additional Users
            </button>
        </nav>
    )
}

export default Nav2