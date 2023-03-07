import React from "react";
import { logout} from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LandingNavBar.css";

function LandingNavBar() {
    // user from redux store
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // logout function
    const logoutHandler = () => {
        // removing current user from redux store
        dispatch(logout());
        navigate("/")
        localStorage.removeItem('user');
    };

    return (
        <div>
            <nav>
                <ul>
                    {user.email ? (
                        <>
                            <li>
                                <Link to="/profile">
                                    <button>Profile</button>
                                </Link>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login">
                                    <button>Log In</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    <button>Sign Up</button>
                                </Link>
                            </li>
                        </>
                    )}
                    <li><Link to="/feed"><button>Feed</button></Link></li>
                    <li><Link to="/library"><button>Library</button></Link></li>
                    <li><Link to="/browse"><button>Browse</button></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default LandingNavBar;