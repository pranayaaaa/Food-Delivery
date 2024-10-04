import React from 'react';
import './Menu.css';
import { menu_list } from '../../assets/assets';

const Menu = ({ category, setCategory }) => {
 
  if (!Array.isArray(menu_list)) {
    console.error('menu_list is not an array or is undefined');
    return null;
  }

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Discover Our Diverse Menu</h1>
        
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                if (!item.menu_name || !item.menu_image) {
                    console.error(`Item is missing properties: ${JSON.stringify(item)}`);
                    return null;
                }

                return (
                    <div
                      onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                      key={index}
                      className='explore-menu-list-items'
                    >
                        <img
                          className={category === item.menu_name ? "active" : ""}
                          src={item.menu_image}
                          alt={item.menu_name}
                        />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
    </div>
  );
};

export default Menu;
