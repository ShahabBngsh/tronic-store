import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Products from './components/products'

function App() {
  return (
    <React.Fragment>
      <header>
        <div>works</div>
      </header>
      <main>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Products />} />
          {/* <Route path="/" component={Product} /> */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
