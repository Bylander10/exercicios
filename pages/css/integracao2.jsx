import styles from "@/pages/css/integracao2.module.css"

export default function integracao() {
    return (
        <div className="texts">
            <div className={styles.vermelha}>Texto #01</div>
            <div className={styles.azul}>Texto #02</div>
            <div className={styles.amarela}>Texto #03</div>
        </div>
    )
}