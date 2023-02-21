import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Header';
import ScrollToTop from '../ScrollToTop';
import './Layout.less';

type ContainerProps = {
    children: JSX.Element | JSX.Element[];
};

function Layout(props: ContainerProps) {
    const [mobile, setMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (window.innerWidth < 970) setMobile(true);

        function resizer() {
            if (window.innerWidth < 970) setMobile(true);
            if (window.innerWidth >= 970) setMobile(false);
        }

        window.addEventListener('resize', resizer);

        return () => window.removeEventListener('resize', resizer);
    }, [navigate]);

    return (
        <>
            <ScrollToTop />
            <Header />
            <main id='App' className={mobile ? 'mobile' : ''}>
                {props.children}
            </main>
        </>
    );
}

export default Layout;
