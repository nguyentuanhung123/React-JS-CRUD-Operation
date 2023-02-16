import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import EmpListing from './components/employee/EmpListing';
import EmpCreate from './components/employee/EmpCreate';
import EmpDetail from './components/employee/EmpDetail';
import EmpEdit from './components/employee/EmpEdit';

const App = () => {
  return (
    <div className="App">
      <h1>React JS CRUD Operation</h1>
      <Routes>
        <Route path="/" element={<EmpListing />}>
        </Route>
        <Route path="/employee/create" element={<EmpCreate />}>
        </Route>
        <Route path="/employee/detail/:empid" element={<EmpDetail />}>
        </Route>
        <Route path="/employee/edit/:empid" element={<EmpEdit />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
