import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function NavbarCopper() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-white p-5">
            <div className="container mx-auto flex justify-between items-center  ">
                <Link className="text-lg text-black font-bold" href="/">
                    Golden Copper
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
                        ) : (
                            <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
                        )}
                    </button>
                </div>
                <div className={`absolute  w-full left-0 top-16 md:static md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-5 md:mt-0">
                        <li><Link className="block py-2" href="#">Home</Link></li>
                        <li><Link className="block py-2" href="#">Contact</Link></li>
                        <li><Link className="block py-2" href="#">About</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};
