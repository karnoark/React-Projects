import React, { useState } from 'react'
import { links } from '../../assets/images-links'
import './styles.css'

const Filter = ({selectedFilter, setSelectedFilter}) => {

  return (
    <div className='filter-div'>
            {
                links.map((obj, i) => (
                  <div 
                  key={i} 
                  className={`links-box ${i == selectedFilter && "selected-box"}`}
                  onClick={() => {
                    setSelectedFilter(i);
                  }}>
                    <img src={obj.imgSrc} alt={obj.label} className='links-img'></img>
                    <p  className={`links-label ${i == selectedFilter && "selected-label"}`}
                    >{obj.label}</p>
                  </div>
                ))
            }
    </div>
  )
}

export default Filter