//Protected component
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

const Protected = ({ children }) => {
    // user from redux store
    const { user, loaded } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loaded && !user.email) {
            navigate('/', { replace: true });
        }
    }, [loaded, user])

    return children;
};

export default Protected;