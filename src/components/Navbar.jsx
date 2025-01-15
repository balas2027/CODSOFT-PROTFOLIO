import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return ( 
    <nav className="mb-20 flex items-center justify-between">
    <div className="flex flex-shirnk-0 items-center">
    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Protfolio
</span>
    </div>
    <div className="m-8 flex items-center justify-center gap-4">
<FaLinkedin />
<FaGithub />
<FaInstagram />
<FaSquareXTwitter />
</div>
    </nav>
    );
};

export default Navbar;
