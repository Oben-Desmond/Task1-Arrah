import { motion } from "framer-motion"

const Nav1 = ({ activePage, handlePageSwitch }) => {
    return (
        <nav className=" grid grid-cols-3 bg-arrah-gray-dark text-arrah-gray-light text-xl  rounded-t-2xl">
            <motion.button
                style={{ borderRadius: "20px 50px 50px 0px", }}
                className={` p-5  flex items-center justify-center truncate text-sm md:text-md xl:text-xl ${activePage === 1 ? "from-[#A6E3FF] to-[#6AAAFB] bg-gradient-to-r  shadow-md text-white " : ""
                    }`}
                onClick={() => handlePageSwitch(1)}
            >
                <motion.button initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-sm w-6 h-6 mr-2 rounded-full bg-white text-arrah-blue-accent ">1</motion.button>
                Your Profile
            </motion.button>
            <button
                className={`p-5 truncate text-sm md:text-md xl:text-xl flex items-center  justify-center ${activePage === 2 ? "from-[#A6E3FF] to-[#6AAAFB] bg-gradient-to-r shadow-md text-white " : ""
                    }`}

                style={{ borderRadius: activePage === 2 ? "0px 50px 50px 0px" : "0px" }}
                onClick={() => handlePageSwitch(2)}
            >
                <button className="text-sm w-6 h-6 mr-2 rounded-full bg-[#abb0bf]">2</button>
                Business Information
            </button>
            <button
                className={`p-5 flex items-center justify-center truncate text-sm md:text-md xl:text-xl ${activePage === 3 ? "from-[#A6E3FF] to-[#6AAAFB] bg-gradient-to-r shadow-md text-white " : ""
                    }`}
                style={{ borderRadius: activePage === 3 ? "0px 50px 50px 0px" : "0px" }}
                onClick={() => handlePageSwitch(3)}
            >
                <button className="text-sm w-6 h-6 mr-2 rounded-full bg-[#abb0bf]">3</button>
                Additional Info
            </button>
        </nav>
    )
}

export default Nav1