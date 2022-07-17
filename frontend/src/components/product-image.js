import style from '../style/style.module.css';
const Image = (props) => {
  return (
    <img className={style.image} src={props.src} alt={props.alt} />
  )
}

export default Image;