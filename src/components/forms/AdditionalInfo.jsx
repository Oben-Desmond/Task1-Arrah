import { motion } from "framer-motion";
import { useState } from "react";

const AdditionalInformation = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        skills: "",
        interests: "",
        bio: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the form data
        onSubmit(formData);
    };

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="mb-8 px-10 mt-3"
        >
            <header className="text-center space-y-1">
                <small className="text-gray-300 text-lg">Step 3</small>
                <h2 className="text-arrah-text-gray text-xl">
                    Additional Information
                </h2>
                <p className="text-sm text-gray-400">
                    Please provide the following additional information:
                </p>
            </header>
            <section>
                <div className="p-2 md:grid-cols-2 grid gap-x-5 gap-y-4">
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="skills"
                        >
                            Skills{" "}
                            <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="skills"
                            id="skills"
                            type="text"
                            required
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="interests"
                        >
                            Interests
                            <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <input
                            name="interests"
                            id="interests"
                            type="text"
                            required
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Interests"
                            value={formData.interests}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label
                            className="text-arrah-text-gray text-sm"
                            htmlFor="bio"
                        >
                            Bio{" "}
                            <span className="text-arrah-blue-deep">*</span>
                        </label>
                        <textarea
                            name="bio"
                            id="bio"
                            required
                            className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                            placeholder="Input Bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </section>
            <button
                onClick={handleSubmit}
                type="button"
                className="from-[#8C96F9] bg-gradient-to-r rounded m-2 p-4 py-2 to-[#717DE8] w-[150px] text-white"
            >
                Submit
            </button>
        </motion.div>
    );
};

export default AdditionalInformation;