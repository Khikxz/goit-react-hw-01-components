import React from 'react';

export const User = ({username, tag, location, avatar, stats}) => {
    return (
        <div class="profile" 
        style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            backgroundColor: 'lightgray',
            alignItems: 'center',
            textAlign: 'center'

        }}>
            <div class="description">
                <img src={avatar} alt="User avatar" class="avatar" height="275"/>
                <p class="name" style={{fontWeight: "700"}}>{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats" 
            style={{
                padding: '0',
                margin: '0',
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <li>
                    <span class="label">Followers </span>
                    <span class="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views </span>
                    <span class="quantity">{stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes </span>
                    <span class="quantity">{stats.likes}</span>
                </li>
            </ul>        
        </div>
    );
};
