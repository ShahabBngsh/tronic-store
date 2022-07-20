import style from '../style/style.module.css';
const Image = (props) => {
  return (
    <img className="img-fluid" src={props.src} alt={props.alt} />
  )
}

export default Image;