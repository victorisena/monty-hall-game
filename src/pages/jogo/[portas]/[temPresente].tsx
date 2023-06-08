import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Jogo() {
  const router = useRouter()

  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const quantidadePortas = +router.query.portas
    const temPresente = +router.query.temPresente
    
    const quantidadePortasValidas = quantidadePortas >= 3 && quantidadePortas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= quantidadePortas

    setValido(quantidadePortasValidas && temPresenteValido)

  }, [portas, router.query.portas, router.query.temPresente])

  useEffect(() => {
    const portas = isNaN(+router.query.portas) ? 0 : +router.query.portas
    const temPresente = isNaN(+router.query.temPresente) ? 0 : +router.query.temPresente
    
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {
          valido ? renderizarPortas() : 
          <h1>Valores inválidos.</h1>
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}