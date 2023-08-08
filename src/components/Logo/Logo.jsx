import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import avatar from '../../assets/logo.gif';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <img src={avatar} alt="Flowers in Chania" width="60" height="60" />        
      </Link>
    </div>
  );
};

export default Logo;
