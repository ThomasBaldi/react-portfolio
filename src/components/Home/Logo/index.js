import './index.scss';
import LogoT from '../../../assets/images/profile2.jpg';
import Hexagon from 'react-hexagon';

const Logo = () => {
    return (
        <div className="opacity-container">
            <div className="logo-container">
                <Hexagon style={{ stroke: '#caac02' }} />
                <Hexagon
                    style={{ stroke: '#ffffff00' }}
                    backgroundImage={LogoT}
                    backgroundScale="1.02"
                    className="solid-logo"
                    alt="T"
                />
            </div>
        </div>
    );
};

export default Logo;
