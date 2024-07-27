import Footer from '../components/footer';
import Header from '../components/header';
import SideBar from '../components/sidebar';
import './style.scss';

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <SideBar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
