import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center items-center mt-8">
                <div className="w-full flex justify-around items-center md:w-1/2">
                    <Link>
                        <p>About Us</p>
                    </Link>
                    <Link>
                        <p>Contact Us</p>
                    </Link>
                    <Link>
                        <p>Terms & Service</p>
                    </Link>
                </div>
            </div>
            <div>
                <p className="text-center p-4">©Copyright All Rights Reserved | 2021</p>
            </div>
        </footer>

    );
};

export default Footer;