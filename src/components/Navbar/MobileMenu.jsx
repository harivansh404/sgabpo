import { Link } from "react-router-dom";

const MobileMenu = ({ setMobileMenu, navLinks }) => {
    return (
        <ul className='bg-green-200 text-secondary-green  z-[9999] flex flex-col md:hidden font-bold absolute top-[50px] right-0 w-full h-[calc(100vh-50px)] shadow-lg rounded-lg '>
            {navLinks.map((link) => (
                <li
                    key={link.link}
                    className='text-4xl py-4 px-5 border-b border-secondary-green flex justify-center'
                >
                    <Link
                        className="flex gap-2 "
                        to={link.link.toLowerCase()}
                        onClick={() => setMobileMenu(false)}
                    >
                        <link.icon  size="30" /> {link.link}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MobileMenu;
