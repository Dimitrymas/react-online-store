import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {SHOP_ROUTE} from "../utils/constants";
import {useContext} from "react";

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;