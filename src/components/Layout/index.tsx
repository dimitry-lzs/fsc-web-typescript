import Header from '../Header';
import ScrollToTop from '../ScrollToTop';
import './Layout.less';

type ContainerProps = {
    children: JSX.Element | JSX.Element[];
};

function Layout(props: ContainerProps) {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main id='App'>{props.children}</main>
        </>
    );
}

export default Layout;
