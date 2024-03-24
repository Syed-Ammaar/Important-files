import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';










// App component
const App = () => (
  <div>
    <Header />
    <div class='main'>
      <div id='sidebardiv'>
        <Sidebar />
      </div>
      <div id='formdiv'>
        <div>Home Page</div>
      </div>
      
      
    </div>

  </div>
);

export default App;