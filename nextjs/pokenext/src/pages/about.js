import CustomHead from "@/components/customhead";
import styles from "@/styles/About.module.css"
import Image from "next/image";

export default function About() {
    return (
        <div className={styles.about}>
            <CustomHead title={"Sobre"}/>
            <h2>Sobre o projeto</h2>
            <p>É um prjeto simples feito com base no curso de NextJS do Hora de Codar</p>
            <Image src={"/images/charizard.png"} width={300} height={300} alt="Charizard"/>
        </div>
    )
}