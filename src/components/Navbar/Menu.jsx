import { Link } from "react-router-dom";

const Menu = ({ navLinks }) => {
    return (
        <ul className='hidden md:flex items-center gap-8 font-semibold text-secondary'>
            {navLinks.map((link) => (
                <li
                    key={link}
                    className='text-black cursor-pointer hover:text-secondary-green hover:underline'
                >
                    <Link to={link.toLowerCase()}>{link}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
