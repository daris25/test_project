import React from 'react';
import NavBar from '../../component/NavBar';
import './home.css';

function HomeScreen() {


  return (
    <div>
      <NavBar />
      <div className='container-box-header'>
        <img 
          className='image-header'
          src='https://www.eipa.eu/wp-content/uploads/2020/10/homeoffice-1024x685.jpg' 
          alt='1' 
        />
        <div className='box-img-person'>
          <img 
            className='img-person'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QdI9efNeKt1bIF_bfepW2yU3n6W0TrS809gfSDZzHlmdZF2dLxPVdpMJAcDhcDsl1Ec&usqp=CAU' 
            alt='2'
          />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
