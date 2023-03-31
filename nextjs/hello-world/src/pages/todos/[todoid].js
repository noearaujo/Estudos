import Link from "next/link";
import {useRouter} from "next/router";

export default function Todo() {
    const router = useRouter()
    const todoId = router.query.todoid
    return (
        <>
            <button onClick={() => router.back()}>Voltar</button>
            <h1>Exibindo Todo: {todoId}</h1>
            <br />
            <br />
            <br />
            <p>Comentarios:<br /><br /></p>
            <p>
                Ojuara: lá lá lá lá...<Link href={`/todos/${todoId}/comments/1`}>ver mais</Link>
            </p>
            <p>
                Noé: lá lá lá lá...<Link href={`/todos/${todoId}/comments/2`}>ver mais</Link>
            </p>
        </>
    )
}