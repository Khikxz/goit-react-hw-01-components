import React from 'react';

const generateRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

export const Data = ({title, data}) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}
  
      <ul class="stat-list">
        {data.map(stats => (
          <li 
            class="item" 
            style={{backgroundColor: generateRandomColor()}}
            key={stats.id}  
          >
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
};