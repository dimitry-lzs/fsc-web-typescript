import Header from '../Header';
import './Layout.less';

type ContainerProps = {
    children: JSX.Element | JSX.Element[];
};

function Layout(props: ContainerProps) {
    return (
        <>
            <Header />
            <main id='App'>{props.children}</main>
        </>
    );
}

export default Layout;
