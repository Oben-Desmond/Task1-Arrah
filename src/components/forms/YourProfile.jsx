import { motion } from "framer-motion";
import { useState } from "react";

const YourProfilePage = ({ setProfile }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setProfile({
            ...formData,
            [name]: value,
        })
        setFormData({
            ...formData,
            [name]: value,
        })
    };


    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-8 px-10 mt-3"
        >
            <header className="text-center space-y-1">
                <small className="text-gray-300 text-lg">Step 1</small>
                <h2 className="text-arrah-text-gray text-xl">
                    Your Profile Page Content
                </h2>
                <p className="text-sm text-gray-400">
                    Please Enter the login information for your account
                </p>
            </header>
            <section className="mt-5">
                <div className="p-2 md:grid-cols-2 grid gap-x-5 gap-y-4">
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="first-name"
                        >
                            First Name <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="firstName"
                            id="first-name"
                            type="text"
                            required
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Your First Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="last-name"
                        >
                            Last Name<span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="lastName"
                            id="last-name"
                            type="text"
                            required
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Your Last Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="text-arrah-text-gray text-sm" htmlFor="email">
                            Email <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="email"
                            id="email"
                            required
                            type="email"
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Your Email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="text-arrah-text-gray text-sm" htmlFor="phone">
                            Phone Number <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="phone"
                            id="phone"
                            required
                            type="tel"
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Your Phone Number"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="password"
                        >
                            Password <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="password"
                            id="password"
                            required
                            type="password"
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Your Password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="confirm-password"
                        >
                            Confirm Password{" "}
                            <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="confirmPassword"
                            id="confirm-password"
                            required
                            type="password"
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Confirm Your Password"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

            </section>
        </motion.div>
    );
};

export default YourProfilePage;