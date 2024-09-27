import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá eu sou o Francisco!</h3>

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Engenharia de Software na PUCRS e Front-End na Alura.
            </p>
            <p className={styles.paragrafo}>
                Este website foi desenvolvido durante o curso "React: desenvolvendo em React Router com JavaScript" da Alura com o professor Antônio Evaldo.
            </p>
        </PostModelo>
    )
}