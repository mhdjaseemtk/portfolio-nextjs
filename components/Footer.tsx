import Link from "next/link";
import {
    FaInstagram,
    FaDribbble,
    FaLinkedin,
    FaBehance,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pt-20 pb-8 px-4 sm:px-8 md:px-12 font-inter">
            {/* Top Section */}
            <div className="flex flex-col items-center justify-center mb-24 text-center">
                <p className="text-gray-400 mb-4 text-lg">Let&apos;s Get Started</p>
                <h2 className="text-[12vw] leading-none font-bold uppercase tracking-tighter">
                    Let&apos;s Collaborate
                </h2>
            </div>

            <div className="border-t border-gray-800 my-12"></div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
                {/* Left Column: Email Capture */}
                <div className="md:col-span-5 pr-0 md:pr-12">
                    <Link href="/" className="inline-block mb-6">
                        <span className="text-2xl font-bold">ellion</span>
                    </Link>
                    <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
                        My approach is rooted in clean code and scalable architecture, where I dig deep into technical requirements to deliver robust solutions.
                    </p>
                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Type your email.."
                            className="bg-[#1a1a1a] text-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-700 text-sm"
                        />
                        <button className="bg-white text-black px-8 py-3 font-medium text-sm hover:bg-gray-200 transition-colors">
                            Sign up
                        </button>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="md:col-span-2">
                    <h3 className="text-lg font-medium mb-6">Pages</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-white transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-white transition-colors">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-lg font-medium mb-6">Inner Pages</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Project Single
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Service Single
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Blog Single
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-lg font-medium mb-6">Utility Pages</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Style Guide
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Licenses
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Password Protected
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Changelog
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                404
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Column: Socials */}
                <div className="md:col-span-1">
                    {/* Using a flex col to push socials to right on desktop if needed, or just standard list */}
                    <div className="flex flex-col space-y-4">
                        <Link href="#" className="flex items-center gap-2 group">
                            <FaInstagram className="text-xl" />
                            <span className="text-sm md:hidden lg:inline">Instagram</span>
                            <FiArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <FaDribbble className="text-xl" />
                            <span className="text-sm hidden">Dribbble</span>
                            <span className="text-sm md:hidden lg:inline">Dribbble</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin className="text-xl" />
                            <span className="text-sm md:hidden lg:inline">LinkedIn</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <FaBehance className="text-xl" />
                            <span className="text-sm md:hidden lg:inline">Behance</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 my-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-center text-gray-500 text-xs py-4 text-center">
              
            </div>
        </footer>
    );
};

export default Footer;
