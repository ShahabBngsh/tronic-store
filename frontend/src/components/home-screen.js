
import Carousel from './carousel'
import Categories from './categories'

const HomeScreen = () => {
  const URL = 'http://localhost:4000/api/products'
  return (
    <>
      <Carousel URL={URL} />
      <Categories URL={URL} />

    </>
  )
}

export default HomeScreen