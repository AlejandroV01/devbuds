import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

interface Tab {
  name: string;
  icon: JSX.Element;
}

interface Props {
  active: string;
  tabs: Tab[];
  onTabClick?: (tabName: string) => void;
}

const SideNav: React.FC<Props> = ({ active, tabs, onTabClick }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null); // Change initial state to null

  const handleClick = (tabName: string) => {
    setActiveTab(tabName);
    if (onTabClick) {
      onTabClick(tabName);
    }
  };

  // Handle click for the Settings button
  const handleSettingsClick = () => {
    setActiveTab('Settings');
    if (onTabClick) {
      onTabClick('Settings');
    }
  };

  return (
    <center>
      <div className='h-[510px] w-[200px] bg-primary rounded-lg flex flex-col justify-between py-10 px-5'>
        <div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex gap-2 items-center rounded-lg cursor-pointer ${
                activeTab === tab.name ? 'bg-black/30 p-1' : 'bg-transparent'
              }`}
              onClick={() => handleClick(tab.name)}
              style={{ marginBottom: index === 0 ? '40px' : (index === tabs.length - 2,3 ? '20px' : '0') }}
            >
              {tab.icon}
              <h1 className='text-lg text-white'>{tab.name}</h1>
            </div>
          ))}
        </div>
        <div 
          className={`flex gap-2 items-center bg-black/0 rounded-lg cursor-pointer ${
            activeTab === 'Settings' ? 'bg-black/30 p-1' : ''
          }`}
          onClick={handleSettingsClick}
        >
          <IoSettingsOutline size={22} color='white' />
          <h1 className='text-lg text-white'>Settings</h1>
        </div>
      </div>
    </center>
  );
};

export default SideNav;


// tabs={[
//   { name: 'Profile', icon: <IoPersonOutline size={22} color='white'/> },
//   { name: 'My Ideas', icon: <HiLightBulb size={25} color='white'/> },
//   { name: "Other's Ideas", icon: <HiOutlineLightBulb size={25} color='white'/> },
// ]}