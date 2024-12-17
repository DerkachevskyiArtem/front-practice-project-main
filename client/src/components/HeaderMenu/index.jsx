import React from 'react';
import CONSTANTS from '../../constants'; 

function HeaderMenu(props) {
  const { headerItems } = props;


  const headerItemsRender = (item) => (
    <li key={item.title}>
      <span>{item.title}</span>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
      <ul>
        {item.items.map((i) => (
          <li key={i}>
            <a href="https://google.com">{i}</a>
          </li>
        ))}
      </ul>
    </li>
  );

  const headerRender = () => {
    return headerItems.map((item) => headerItemsRender(item));
  };

  return <ul>{headerRender()}</ul>;
}

export default HeaderMenu;
