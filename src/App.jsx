import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';

 function App() {
  return (
 <>
  <Router>
    <Routes>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='dashboard'element={<Dashboard/>}/>
    <Route path='send' element={<SendMoney/>}/>
    </Routes>
  </Router>
 </>
  )
}

export default App
