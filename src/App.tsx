import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Headers from './components/headers';
import { Fragment } from 'react';
import SectionHead from './page/sectionHead';
import BrandsList from './Brand/BrandAll';
import Products from './products/product';
import ProductsByCategory from './products/productscategory'; // Kategoriya bo'yicha mahsulotlarni ko'rsatadigan komponent

function App() {
  return (
    <Fragment>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<SectionHead />} />
          <Route path="/brandAll" element={<BrandsList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productscategory/:categoryName" element={<ProductsByCategory />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
