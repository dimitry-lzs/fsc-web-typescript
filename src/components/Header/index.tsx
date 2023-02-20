import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import './Header.less';

function Header() {
    return (
        <header className='Header'>
            <Link to={'/'}>
                <div className='AppLogo' />
            </Link>
        </header>
    );
}

export default observer(Header);
