import AboutUs from "../component/AboutUs/AboutUs";
import Home from "../component/Layout/Home/Home";
import Menu from "../component/Menu/Menu";

export const routes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: AboutUs },
    { path: '/menu', component: Menu },
];