import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';



const Blockentry=()=>{
    return (
        <div>
            <Header/>
            <div class='pdflex'>
              <Sidebar/>
              <p class='heading1'> Blockentry here</p>
            </div>
            
        </div>
    )
}

export default Blockentry;