import { Card } from '../../components/card'
import style from './style.module.css'

export function Home() {
  return (
    <div className={style.home}>
      <h1>Lista de presença</h1>

      <input type="text" placeholder='Digite o nome...' />
      <button type='button'>Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  )
}
