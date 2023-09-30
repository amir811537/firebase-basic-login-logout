import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
<Link to="/">  Home </Link>
<Link to="/login"> Login Page</Link>
        </div>
    );
};

export default Header;