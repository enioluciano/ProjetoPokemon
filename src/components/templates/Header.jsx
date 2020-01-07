import React from 'react';
import '../css/Header.css'
import Topo from '../../assets/img/Topo.jpeg'




function Header() {
  return (
      
            <div className="topo">
                <img src={Topo} alt={Topo} />
            </div>

       
  );
}

export default Header;