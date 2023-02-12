import { useContext } from 'react';
import './navbar.scss';
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="search"/>
            <SearchOutlined />
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlined className='icon'/>
              English
            </div>
            <div className="item" onClick={() => dispatch({type: "TOGGLE"})}>
              <DarkModeOutlined className='icon'/>
            </div>
            <div className="item">
              <FullscreenExitOutlined className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneOutlined className='icon'/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlined className='icon'/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlined className='icon'/>
            </div>
            <div className="item">
              <img src='https://picsum.photos/200/300' alt='' className='avatar'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar