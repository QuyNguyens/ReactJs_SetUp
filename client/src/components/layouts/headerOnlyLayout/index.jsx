import Header from '../components/header';
import SideBar from '../components/sidebar';
import './style.scss';
// eslint-disable-next-line react/prop-types
function HeaderOnlyLayout({ children }) {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <SideBar />
                {children}
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
