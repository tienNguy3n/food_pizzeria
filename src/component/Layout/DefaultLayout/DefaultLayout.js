import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import PageTitle from '../Page title/PageTitle'

const DefaultLayout = (props) => {
    return (
        <div>
            <Header onShowCart={props.onShowCart} />
            <PageTitle />
            {props.children}
            <Footer />
        </div>
    );
}

export default DefaultLayout