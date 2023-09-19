import React from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-black-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-white-800 font-bold text-3xl pb-6">
							<span className="text-blue-600">MRCC</span>
						</p>
						<div className="flex gap-6 pb-5" >
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white-800 font-bold text-2xl pb-4">Quick Links</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href='/#about'>About</Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href='/project'>project</Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href='/resources'>resources</Link>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white-600 font-bold text-2xl pb-4">Contact Info</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							
							Riyadh, Saudi Arabia
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						Phone: 011-244-8491 
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Email: AARS1@HOTMAIL.COM
						</li>
					</ul>
				</div>

				{/* <div className="p-5">
					<ul>
						<p className="text-white-400 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div> */}
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-500">
				<h1 className=" text-white-800 font-semibold">
					© 2023 All rights reserved | Build by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						BS Team
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;