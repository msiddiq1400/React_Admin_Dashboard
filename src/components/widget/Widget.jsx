import { KeyboardArrowUp, PersonOutline } from '@mui/icons-material';
import './widget.scss';

const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">1212</span>
            <span className="link">See All Users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUp />
                20 %
            </div>
            <PersonOutline  className='icon'/>
        </div>
    </div>
  )
}

export default Widget