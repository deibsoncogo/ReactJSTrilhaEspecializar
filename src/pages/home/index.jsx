import { useState } from 'react'
import { Card } from '../../components/card'
import style from './style.module.css'

export function Home() {
  const [studentName, setStudentName] = useState('')

  return (
    <div className={style.home}>
      <h1>Nome: {studentName}</h1>

      <input
        type="text"
        placeholder='Digite o nome...'
        onChange={event => setStudentName(event.target.value)}
      />

      <button type='button'>Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  )
}
