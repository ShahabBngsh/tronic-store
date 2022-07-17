import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import Products from './components/products'
import ProductDetail from './components/product-detail'
import HomeScreen from './components/home-screen'

function App() {
  return (
    <React.Fragment>
      <header className="mx-4">
        <NavBar />
      </header>
      <main className="mx-4">
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/" component={Product} /> */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
