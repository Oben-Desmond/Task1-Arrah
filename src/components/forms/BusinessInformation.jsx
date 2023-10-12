import { motion } from "framer-motion";
import { useState } from "react";
import { IoCheckmark, IoChevronForward } from "react-icons/io5";

const BusinessInformation = ({ setBusinessInfo }) => {
    const [formData, setFormData] = useState({
        brandName: "",
        brandType: "",
        streetAddress: "",
        city: "",
        zipCode: "",
        taxIdNumber: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setBusinessInfo({
            ...formData,
            [name]: value,
        })
    };

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <div className="px-10 mt-3">
                <section>
                    <header className="text-center space-y-1">
                        <small className="text-gray-300 text-lg">Step 2</small>
                        <h2 className="text-arrah-text-gray text-xl">
                            Business Information
                        </h2>
                        <p className="text-sm text-gray-400">
                            Please enter information about your company
                        </p>
                    </header>
                    <section className="p-2 mt-8">
                        <h2 className="uppercase text-arrah-blue-deep">General Information</h2>
                        <div className="md:grid-cols-2 grid gap-x-5 gap-y-4">
                            <div>
                                <label
                                    className="text-arrah-text-gray text-sm"
                                    htmlFor="brand-name"
                                >
                                    Brand Name{" "}
                                    <span className="text-arrah-blue-deep">*</span>
                                </label>
                                <input
                                    name="brandName"
                                    id="brand-name"
                                    type="text"
                                    required
                                    className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                                    placeholder="Enter Brand Name"
                                    value={formData.brandName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-arrah-text-gray text-sm"
                                    htmlFor="brand-type"
                                >
                                    Brand Type{" "}
                                    <span className="text-arrah-blue-deep">*</span>
                                </label>
                                <input
                                    name="brandType"
                                    id="brand-type"
                                    type="text"
                                    required
                                    className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                                    placeholder="Enter Brand Type"
                                    value={formData.brandType}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-arrah-text-gray text-sm"
                                    htmlFor="street-address"
                                >
                                    Street Address{" "}
                                    <span className="text-arrah-blue-deep">*</span>
                                </label>
                                <input
                                    name="streetAddress"
                                    id="street-address"
                                    type="text"
                                    required
                                    className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                                    placeholder="Enter Street Address"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-arrah-text-gray text-sm"
                                    htmlFor="city"
                                >
                                    City{" "}
                                    <span className="text-arrah-blue-deep">*</span>
                                </label>
                                <input
                                    name="city"
                                    id="city"
                                    type="text"
                                    required
                                    className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                                    placeholder="Enter City"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-arrah-text-gray text-sm"
                                    htmlFor="zip-code"
                                >
                                    Zip Code{" "}
                                    <span className="text-arrah-blue-deep">*</span>
                                </label>


                                <input
                                    name="zipCode"
                                    id="zip-code"
                                    type="text"
                                    required
                                    className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                                    placeholder="Enter Zip Code"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    className="text-arrah-text-gray text-sm"
                                    htmlFor="tax-id-number"
                                >
                                    Tax ID Number{" "}
                                    <span className="text-arrah-blue-deep">*</span>
                                </label>
                                <input
                                    name="taxIdNumber"
                                    id="tax-id-number"
                                    type="text"
                                    required
                                    className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[7px] mt-1 focus:outline-arrah-blue-accent placeholder:text-arrah-gray-dark placeholder:text-md placeholder:font-light"
                                    placeholder="Enter Tax ID Number"
                                    value={formData.taxIdNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="p-2 mt-8">
                        <h2 className="uppercase text-arrah-blue-deep">DOCUMENTS</h2>
                        <p className="text-sm text-arrah-text-gray">Once the following documents are signed you will be ready to get started</p>
                        <section className="space-y-2">
                            <div className="flex items-center gap-x-2">
                                <div className="w-full relative">
                                    <input
                                        disabled
                                        type="text"
                                        className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[5px] mt-1 focus:outline-arrah-blue-accent 
                                        placeholder:text-arrah-text-gray  placeholder:text-sm placeholder:font-light"
                                        placeholder="Electronically sign the document(s)"
                                    />
                                    <button className="absolute right-4 top-3 text-xl text-green-500">
                                        <IoCheckmark />
                                    </button>
                                </div>
                                <button className='from-[#8C96F9] bg-gradient-to-r  
                                  rounded to-[#717DE8] w-[35px] mt-1 h-[35px] text-white'>
                                    <IoChevronForward className='inline-block' />
                                </button>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <div className="w-full relative">
                                    <input
                                        type="text"
                                        disabled
                                        className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[5px] mt-1 focus:outline-arrah-blue-accent 
                                        placeholder:text-arrah-text-gray  placeholder:text-sm placeholder:font-light"
                                        placeholder="Electronically sign the document(s)"
                                    />
                                    <button className="absolute right-4 top-3 text-xl text-green-500">
                                        <IoCheckmark />
                                    </button>
                                </div>
                                <button className='from-[#8C96F9] bg-gradient-to-r  
                                  rounded to-[#717DE8] w-[35px] mt-1 h-[35px] text-white'>
                                    <IoChevronForward className='inline-block' />
                                </button>
                            </div>
                        </section>


                    </section>

                    <section className="p-2 mt-2 mb-6">
                        <h2 className="uppercase text-arrah-blue-deep">COI PDF UPLOAD</h2>
                        <p className="text-sm text-arrah-text-gray">Once the following documents are signed you will be ready to get started</p>
                        <section className="space-y-2">
                            <div className="flex items-center gap-x-2">
                                <div className="w-full relative">
                                    <input
                                        disabled
                                        name="tax-id-number"
                                        id="tax-id-number"
                                        type="text"
                                        className="pl-4 inline-block w-full border border-arrah-gray-dark rounded-md p-[5px] mt-1 focus:outline-arrah-blue-accent 
                                        placeholder:text-arrah-text-gray  placeholder:text-sm placeholder:font-light"
                                        placeholder="Electronically sign the document(s)"
                                    />
                                    <button className="absolute right-4 top-3 text-xl text-green-500">
                                        <IoCheckmark />
                                    </button>
                                </div>
                                <button className='from-[#8C96F9] bg-gradient-to-r  
                                  rounded to-[#717DE8] w-[35px] mt-1 h-[35px] text-white'>
                                    <IoChevronForward className='inline-block' />
                                </button>
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        </motion.div>
    );
};

export default BusinessInformation;