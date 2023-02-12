import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration: "none"}}>
                <span className='logo'>Admin Panel</span>
            </Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><Link to="/users" style={{textDecoration: "none"}}><PersonIcon className='icon'/><span>Users</span></Link></li>
                <li><Link to="/products" style={{textDecoration: "none"}}><StoreIcon className='icon'/><span>Products</span></Link></li>
                <li><CreditCardIcon className='icon'/><span>Orders</span></li>
                <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
                <p className="title">USEFUL LINKS</p>
                <li><InsertChartIcon className='icon'/><span>Stats</span></li>
                <li><NotificationsNoneIcon className='icon'/><span>Notifications</span></li>
                <p className="title">SERVICE</p>
                <li><SettingsSystemDaydreamIcon className='icon'/><span>System Health</span></li>
                <li><PsychologyOutlinedIcon className='icon'/><span>Logs</span></li>
                <li><SettingsApplicationsOutlinedIcon className='icon'/><span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountCircleOutlinedIcon className='icon'/><span>Profile</span></li>
                <li><ExitToAppOutlinedIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
        <hr/>
        <div className='bottom'>
            <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar