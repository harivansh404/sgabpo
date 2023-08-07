import { Link } from "react-router-dom";

const MobileMenu = ({ setMobileMenu, navLinks }) => {
    return (
        <ul className='bg-green-100 text-secondary-green z-9999 flex flex-col md:hidden font-bold absolute top-[50px] right-0 w-[50%] h-[calc(100vh-50px)] shadow-lg rounded-lg '>
            {navLinks.map((link) => (
                <li
                    key={link}
                    className='py-4 px-5 border-b border-secondary-green flex justify-center'
                >
                    <Link
                        to={link.toLowerCase()}
                        onClick={() => setMobileMenu(false)}
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MobileMenu;
