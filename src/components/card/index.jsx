import style from './style.module.css'

export function Card(props) {
  return (
    <div className={style.card}>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
