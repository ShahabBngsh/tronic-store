
import Carousel from './carousel'
import Categories from './categories'
import PopularProducts from './popular-products'

const HomeScreen = () => {
  const URL = 'http://localhost:4000/api/products'
  return (
    <>
      <Carousel URL={URL} />
      <Categories URL={URL} />
      <PopularProducts URL={URL} />
    </>
  )
}

export default HomeScreen