
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Transactions from './components/transactions/Transactions';
import Profile from './components/profile/Profile';

import SideBar from './components/sidebar/SideBar';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="container">

      <div className='left'>
      <SideBar />
      </div>

      <div className='right'>
        <Routes>
      <Route exact path='/dashboard' element={<Dashboard />}/>
      <Route exact path='/transactions' element={<Transactions />}/> 
      <Route exact path='/profile' element={<Profile />}/>

      </Routes>
      </div>
      
    </div>
  );
}

export default App;
