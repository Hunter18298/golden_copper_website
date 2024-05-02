import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react';

export default function NavbarCopper() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-500 text-white p-5">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-lg font-bold" href="/">
                    Logo
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <XIcon className="h-8 w-8" />
                        ) : (
                            <MenuIcon className="h-8 w-8" />
                        )}
                    </button>
                </div>
                <div className={`absolute bg-blue-500 w-full left-0 top-16 md:static md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-5 md:mt-0">
                        <li><Link className="block py-2" href="#">About</Link></li>
                        <li><Link className="block py-2" href="#">Services</Link></li>
                        <li><Link className="block py-2" href="/#">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

