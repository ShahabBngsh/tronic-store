import * as Icon from "react-bootstrap-icons"
const Rating = (props) => {
  const filledStars = Math.floor(props.rating)
  const ceil = Math.ceil(props.rating)
  const icons = []
  for (var i = 0; i < Math.min(filledStars, 5); i++) {
    icons.push(<Icon.StarFill className="mx-1" />)
  }
  if (filledStars != ceil) {
    icons.push(<Icon.StarHalf className="mx-1" />)
  }
  for (let j = ceil; j < 5; j++) {
    icons.push(<Icon.Star className="mx-1" />);
  }
  return (
    <div>
      <span>
        {icons}
      </span>
      <span className="mx-3">
        {props.numReviews} ratings
      </span>
    </div>
  )
}

export default Rating