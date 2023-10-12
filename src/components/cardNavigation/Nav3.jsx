import { motion } from "framer-motion"

const Nav3 = ({ activePage, handlePageSwitch }) => {
    return (
        <nav className="grid grid-cols-3 bg-arrah-gray-dark text-arrah-gray-light text-xl  rounded-t-2xl">
            <motion.button
                style={{ borderRadius: "20px 14px 0px 0px", }}
                className={` p-5 text-sm md:text-md xl:text-xl col-span-3  grid grid-cols-3  ${activePage === 3 ? "from-[#A6E3FF] to-[#6AAAFB] bg-gradient-to-r shadow-md text-white " : ""
                    }`}

            >
                <div onClick={() => handlePageSwitch(1)} className="flex truncate  items-center justify-center line-clamp-1">
                    <button className="text-sm  w-6 h-6 mr-2 rounded-full bg-white text-arrah-blue-accent">1</button>
                    Your Profile
                </div>
                <div onClick={() => handlePageSwitch(2)} className="flex items-center line-clamp-1 truncate  justify-center">
                    <motion.button className="text-sm w-6 h-6 mr-2 rounded-full bg-white text-arrah-blue-accent">2</motion.button>
                    Business Information
                </div>
                <div onClick={() => handlePageSwitch(3)} className="flex items-center justify-center truncate ">
                    <motion.button initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-sm w-6 h-6 mr-2 rounded-full bg-white text-arrah-blue-accent ">3</motion.button>
                    Additional Info
                </div>
            </motion.button>
        </nav>
    )
}

export default Nav3