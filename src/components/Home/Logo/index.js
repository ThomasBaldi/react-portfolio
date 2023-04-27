import './index.scss';
import LogoT from '../../../assets/images/profile2.jpg';
import Hexagon from 'react-hexagon';

const Logo = () => {
    return (
        <div className="logo-container">
            <Hexagon style={{ stroke: '#ffd700' }} />
            <Hexagon
                style={{ stroke: '#ffffff00' }}
                backgroundImage={LogoT}
                backgroundScale="1.02"
                className="solid-logo"
                alt="T"
            />
        </div>
    );
};

export default Logo;
