import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import Loader from "../Loader/Loader";
import Posts2 from "../../pages/Posts2";
import PostPages from "../../pages/PostPages";
import Login from "../../pages/Login";

const AppRoute = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    const authRoutes = [
        { path: '/', element: <Posts2/> },
        { path: '/:id', element: <PostPages /> },
    ];
      
    const nonAuthRoutes = [{ path: '/', element: <Login /> }];
      
    const privatRoutes = isAuth ? authRoutes : nonAuthRoutes;

    return (
        <>
            <Routes>
                {privatRoutes.map(route => 
                    <Route  key={route.path} element={route.element} path={route.path} />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />  
            </Routes>
        </>
    );
};

export default AppRoute;