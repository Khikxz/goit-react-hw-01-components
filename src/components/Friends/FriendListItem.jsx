import React from 'react';
import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li class="item" 
      style={{
        margin: '0',
        padding: '0',
        display: 'flex',
        alignContent: 'center'
      }}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="70" height="70"/>
      <p class="name">{name}</p>
    </li>
  )
};
