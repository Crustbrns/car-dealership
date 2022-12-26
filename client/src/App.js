import React from 'react';
import './styles/App.css';
import Header from '../src/components/header/header';
import About from '../src/components/aboutus/about';
import Cart from '../src/components/cart/cart';
import Contact from '../src/components/contact/contact';
import Catalogue from '../src/components/catalogue/catalogue';
import Dashboard from './components/admin/dashboard/dashboard';
import Goods from './components/admin/goods/goods';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/admin/Admin';
import AdminCustomers from './components/admin/customers/admin-customers';
import AdminOverview from './components/admin/overview/admin-overview';
import PageNotFound from './components/error/pagenotfound';
import Registration from './components/auth/registration';
import Login from './components/auth/login';

function App() {

  const [port, setPort] = React.useState(null);

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content">
          <Routes>
            <Route>
              <Route path="/" element={<Catalogue />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<Admin />}>
              <Route path="/admin/dashboard" element={<AdminOverview />} />
              <Route path="/admin/dashboard/goods" element={<Goods />} />
              <Route path="/admin/dashboard/orders" element={<AdminCustomers />} />
              <Route path="/admin/dashboard/customers" element={<AdminCustomers />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
