import React, {useState} from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className="navbar bg-white shadow-md flex w-full p-[0.875rem_1rem_1.125rem_1rem] justify-between items-center fixed top-0 left-0 z-50">
                <a href="/" className="brand-logo">
                    <img
                        src="/mypertaminafair-logo-new.png"
                        alt="Brand Logo"
                        className="h-9"
                    />
                </a>
                <div className="hamburger cursor-pointer z-50" onClick={toggleMenu}>
                    <img
                        src={isOpen ? "/close-menu.svg" : "/hamburger-menu.svg"}
                        alt="Menu Icon"
                        className="h-8"
                    />
                </div>
            </div>

            {/* Dropdown Menu Container */}
            <div
                className={`menu fixed top-0 left-0 w-full h-full bg-cover bg-[#e0e0e0] bg-center text-black flex flex-col justify-center items-center z-40 ${
                    isOpen ? "flex" : "hidden"
                }`}
                style={{backgroundImage: "url('/background-c.svg')"}}
            >
                <div
                    className="close cursor-pointer absolute top-5 right-5"
                    onClick={toggleMenu}
                >
                    &times; {/* Close icon */}
                </div>
                <nav className="w-full px-8 md:max-w-lg">
                    <ul className="space-y-4 text-lg font-cabin w-full">
                        <li className="w-full">
                            <a
                                href="/tiket"
                                className="block w-full py-3 bg-pertamina-red-500 hover:bg-pertamina-red-600 active:bg-pertamina-red-700 text-center text-white rounded-full no-underline font-raleway font-extrabold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                Beli Tiket
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="/point-frenzy"
                                className="block w-full py-3 bg-white hover:bg-neutral-100 active:bg-neutral-200 text-center text-black rounded-full no-underline font-raleway font-bold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                Point Frenzy
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="/program"
                                className="block w-full py-3 bg-white hover:bg-neutral-100 active:bg-neutral-200 text-center text-black rounded-full no-underline font-raleway font-bold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                Program
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="/festival"
                                className="block w-full py-3 bg-white hover:bg-neutral-100 active:bg-neutral-200 text-center text-black rounded-full no-underline font-raleway font-bold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                Festival
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                // href="/coming-soon"
                                href="/venue-map"
                                className="block w-full py-3 bg-white hover:bg-neutral-100 active:bg-neutral-200 text-center text-black rounded-full no-underline font-raleway font-bold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                Venue Map
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="/faq"
                                className="block w-full py-3 bg-white hover:bg-neutral-100 active:bg-neutral-200 text-center text-black rounded-full no-underline font-raleway font-bold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                FAQ
                            </a>
                        </li>
                        <li className="w-full">
                            <a
                                href="/contact"
                                className="block w-full py-3 bg-white hover:bg-neutral-100 active:bg-neutral-200 text-center text-black rounded-full no-underline font-raleway font-bold text-[1.125rem] leading-[130%] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HamburgerMenu;
