import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import DefaultLayout from './component/Layout/DefaultLayout/DefaultLayout';
import Cart from './component/Cart/Cart';
import { routes } from './routes';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <>
            {cartIsShown && <Cart onHideCart={hideCartHandler} />}
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                        key={index}
                        path={route.path}
                        element={
                                <DefaultLayout onShowCart={showCartHandler}>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
// https://preview.themeforest.net/item/food-pizzeria-ultimate-delivery-wordpress-theme/full_screen_preview/13547531?_ga=2.96438046.322880665.1691833178-1688199429.1691833178
