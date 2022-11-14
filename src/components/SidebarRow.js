import React from 'react';
import '../SidebarRow.css';

        const SidebarRow = ({Icon,title,selected}) => {
  return (
    <div className='sidebarRow'>
     <Icon className={`SidebarRow_icon ${selected && 'selected'}`}/>
      <h2 className='SidebarRow_title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
