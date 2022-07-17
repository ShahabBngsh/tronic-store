
import Carousel from './carousel'

const HomeScreen = () => {
  const URL = 'http://localhost:4000/api/products'
  return (
    <>
      {/* <div>Works</div> */}
      <Carousel URL={URL} />
    </>
  )
}

export default HomeScreen