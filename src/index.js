import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NavBtn, NavBtnLink, NavMenu, NavLink, NavLogo, Bars} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,'resolve.fallback: { "buffer": require.resolve("buffer/") }'
  );
  

export default function Nav() {

  return (
      <>
         <Nav>
          <NavLogo className='nav-logo' to="/Intro">
              Logo
          </NavLogo>
          <Bars />

          <NavMenu>
              <NavLink className='nav-link' 
                to="/Project" 
                activeStyle={{ color:'white' }}
              >
                  Home
              </NavLink>
              <NavLink 
                to="/Skills" 
                activeStyle={{ color: 'black' }}
              >
                  Skills
              </NavLink>
              <NavLink 
                to="/Contact" 
                activeStyle={{ color: 'black' }}
              >
                  Contact
              </NavLink>
              <NavLink 
                to="/Services" 
                activeStyle={{ color: 'black' }}
              >
                  Services
              </NavLink>
              <NavBtn className='nav-btn' >
                  <NavBtnLink  className='nav-btn-link' to="/App">Home</NavBtnLink >                
              </NavBtn>
          </NavMenu> 
         </Nav> 
      </>
  );
};



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
