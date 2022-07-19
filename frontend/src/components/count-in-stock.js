import Badge from 'react-bootstrap/Badge';

const CountInStock = props => {
  const count = props.count;
  return (
    <>
      {(count < 1)
        ? <Badge bg='secondary'>Out of Stock</Badge>
        : (count < 10)
          ? <span className='text-danger'>Only <b>{count}</b> left in stock - Order Soon</span>
          : null
      }
    </>
  )
}
export default CountInStock;