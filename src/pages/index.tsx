import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Form() {
  const [quantidadePortas, setQuantidadePortas] = useState(3)
  const [portaComPresente, setPortaComPresente] = useState(2)

  return (
    <div className={styles.formulario}>
      <div>

        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>

        <Cartao>
          <EntradaNumerica text="Quantidade de Portas ?" value={quantidadePortas}
            onChange={novaQuantidade => {setQuantidadePortas(novaQuantidade)}}></EntradaNumerica>
        </Cartao>

      </div>
      <div>

        <Cartao>
        <EntradaNumerica text="Porta com Presente ?" value={portaComPresente}
            onChange={novaPortaComPresente => {setPortaComPresente(novaPortaComPresente)}}></EntradaNumerica>
        </Cartao>

        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${quantidadePortas}/${portaComPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>

      </div>
    </div>
  )
}
