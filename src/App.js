import logo from './logo.svg';
import './App.css';
import ETNav from './components/ETNav';
import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/products/AddProduct';
import ListProduct from './components/products/ListProduct';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddCategory from './components/categories/AddCategory';
import ListCategory from './components/categories/ListCategory';
import AddTransaction from './components/transactions/AddTransaction'

function App() {
  return (
    <div className="App">
      
      <div>
          <Router>
            <ETNav/>
          
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/addproduct' element={<AddProduct/>}/>
              <Route path='/listproducts' element={<ListProduct/>}/>
              <Route path='/addcategory' element={<AddCategory/>}/>
              <Route path='/listcategory' element={<ListCategory/>}/>
              <Route path='/addtransaction' element={<AddTransaction/>}/>

            </Routes>
          </Router>
          
      </div>
    </div>
  );
}

export default App;
