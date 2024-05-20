import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-yellow-700 text-white p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">Golden Copper Company</h3>
                    <p className="text-sm">
                        Golder Copper company for general trading and electrical materials trading / LTD - Iraq Erbil Kuran Makhmur street.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="text-sm space-y-2">
                        <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
                        <li><Link href="#" className="hover:text-yellow-300">About Us</Link></li>
                        <li><Link href="#" className="hover:text-yellow-300">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
                        <li><Link href="#" className="hover:text-yellow-300">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                    <div className="text-sm space-y-2">
                        <ul className="text-sm space-y-2">
                            <li><Link href="tel:009647501000909" className="hover:text-yellow-300"><FontAwesomeIcon icon={faPhone} size="lg" /> +964(750) 100-0909</Link></li>
                            <li><Link href="tel:009647504623890" className="hover:text-yellow-300">+964(750) 462-3890</Link></li>
                            <li><Link href="mailto:goldencopperco@yahoo.com" className="hover:text-yellow-300"><FontAwesomeIcon icon={faEnvelope} size="lg" /> goldencopperco@yahoo.com</Link></li>

                        </ul>



                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com" className="hover:text-yellow-300"><FontAwesomeIcon icon={faFacebookF} size="lg" /></Link>
                        <Link href="https://twitter.com" className="hover:text-yellow-300"><FontAwesomeIcon icon={faTwitter} size="lg" /></Link>
                        <Link href="https://linkedin.com" className="hover:text-yellow-300"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></Link>
                        <Link href="https://instagram.com" className="hover:text-yellow-300"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm mt-8">
                © 2024 Golden Copper Company. All rights reserved. Powered by Stream Zone.
            </div>
        </footer>
    );
}
