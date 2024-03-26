import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import WelcomeSection from './component/WelcomeSection';
import Update from './pages/Update';




 function App() {
  return (
 <div className=''>
  <Router>
    <Routes>    
    <Route path='/' element={<WelcomeSection/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='dashboard'element={<Dashboard/>}/>
    <Route path='send' element={<SendMoney/>}/>
    <Route path='update' element={<Update/>}/>
    
    </Routes>
   
  </Router>
 </div>
  )
}

export default App
