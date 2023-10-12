import React, { useState } from 'react';
import Nav1 from './cardNavigation/Nav1';
import Nav2 from './cardNavigation/Nav2';
import Nav3 from './cardNavigation/Nav3';
import YourProfilePage from './forms/YourProfile';
import BusinessInformation from './forms/BusinessInformation';
import AdditionalInformation from './forms/AdditionalInfo';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

const TabsComponent = () => {
    const [activePage, setActivePage] = useState(1);
    const [info, setInfo] = useState()
    const [errorMessage, seterrorMessage] = useState("")

    const handlePageSwitch = (page) => {
        setActivePage(page);
    };

    function navigate(step) {
        setActivePage((activePage + step) % 4)
    }


    function submitInfo(e) {
        e.preventDefault();
        console.log(JSON.stringify(info));
        if (activePage == 1) {
            if (info.profile.password !== info.profile.confirmPassword) {
                seterrorMessage("Password mismatch. Please make sure password matches");
                setTimeout(() => {
                    seterrorMessage("")
                }, 4000);
            } else {
                // Passwords match, perform desired action
                seterrorMessage("");
                navigate(1)

            }
        } else {
            navigate(1)

        }
    }

    function finalSubmission(additionalInfo) {

        console.log("FINAL OUTPUT")
        console.log({ ...info, additionalInfo })
    }

    return (
        <>
            <form onSubmit={submitInfo}>
                <section className="bg-white min-h-[70vh] shadow-lg rounded-2xl">
                    {activePage === 1 && <Nav1 handlePageSwitch={handlePageSwitch} activePage={activePage} />}
                    {activePage === 2 && <Nav2 handlePageSwitch={handlePageSwitch} activePage={activePage} />}
                    {activePage === 3 && <Nav3 handlePageSwitch={handlePageSwitch} activePage={activePage} />}
                    <div className='p-3'>
                        {activePage === 1 && <YourProfilePage setProfile={(profile) => setInfo({ ...info, profile })} />}
                        {activePage === 2 && <BusinessInformation setBusinessInfo={(biz) => setInfo({ ...info, business: biz })} />}
                        {activePage === 3 && <AdditionalInformation onSubmit={finalSubmission} />}
                    </div>
                </section>
                <section className='py-3 mt-5 flex justify-between'>
                    <button className='text-arrah-blue-deep'>
                        <IoChevronBack className='inline-block' />  Back to Login
                    </button>
                    <div >
                        {activePage > 1 && <button type='button' onClick={() => navigate(-1)} className='border mr-3  rounded p-4 py-2 border-[#717DE8]  text-[#717DE8]  items-center'>
                            <IoChevronBack className='inline-block mr-1 mb-1 ' />  Previous Step
                        </button>}
                        {activePage < 3 && <button type='submit' className='from-[#8C96F9] bg-gradient-to-r  rounded p-4 py-2 to-[#717DE8] w-[150px] text-white'>
                            Next Step <IoChevronForward className='inline-block mr-1' />
                        </button>}
                    </div>
                </section>
            </form>
            {
                errorMessage && <motion.div initial={{ y: 400, opacity: 0 }} animate={{ y: 0, opacity: 1, }} className='p-4 bg-red-600 text-white absolute bottom-3  m-auto rounded'>{errorMessage}</motion.div>
            }
        </>
    );
};




const AdditionalUsersPage = () => {
    return <h1>Additional Users Page Content</h1>;
};


export default TabsComponent;