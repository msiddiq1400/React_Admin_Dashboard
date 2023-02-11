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

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Admin Panel</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                <p className="title">LISTS</p>
                <li><PersonIcon className='icon'/><span>Users</span></li>
                <li><StoreIcon className='icon'/><span>Products</span></li>
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
            <div className="colorOption">

            </div>
            <div className="colorOption">
                
            </div>
        </div>
    </div>
  )
}

export default Sidebar