import * as Icon from "react-bootstrap-icons"
const Rating = (props) => {
  const filledStars = Math.round(props.rating)
  const icons = []
  for (var i = 0; i < filledStars; i++) {
    icons.push(<Icon.StarFill />)
  }
  for (let j = i; j < 5; j++) {
    icons.push(<Icon.Star />);
  }
  return (
    <div>
      {icons}
    </div>
  )
}

export default Rating