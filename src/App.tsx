import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Headers from './components/headers';
import { Fragment } from 'react';
import SectionHead from './page/sectionHead';
import BrandsList from './Brand/BrandAll';
import Products from './products/product';
import ProductsByCategory from './products/productscategory'; 
import ProductBrand from './products/productBrand'
import ProductsAll from './products/productsAll';
import ProductDetails from './products/productdetails';
import Profile from './profile/profile'

function App() {
  return (
    <Fragment>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<SectionHead />} />
          <Route path="/brandAll" element={<BrandsList />} />
          <Route path="/products" element={<Products />} />
           <Route path="/products/brand/:brandId" element={<ProductBrand />} />
           <Route path="/brand/:brandId" element={<ProductBrand />} />
          <Route path="/productscategory/:categoryName" element={<ProductsByCategory />} />
          <Route path="/productsAll" element={<ProductsAll />} />
           <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
