import style from './style.module.css'

export function Home() {
  return (
    <div className={style.home}>
      <h1>Lista de presença</h1>

      <input type="text" placeholder='Digite o nome...'/>
      <button type='button'>Adicionar</button>
    </div>
  )
}
