import { NotifItem } from './SideBarComponents';

const Sidebar = () => {
  return (
    <div className='sidebar-content'>
      <div className='sidebar-menu-container'>
        <p className='menu-title'>Notifications</p>
        <div className='sidebar-notifications-container'>
          <NotifItem isNew={true} />
          <NotifItem isNew={true} />
          <NotifItem isNew={false} />
        </div>
      </div>
      <div className='sidebar-menu-container'>
        <p className='menu-title'>Categories</p>
      </div>
    </div>
  );
};

export default Sidebar;
