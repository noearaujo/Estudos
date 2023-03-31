import { useRouter } from "next/router"

export default function Comment(){
    const router = useRouter()
    const commentId = router.query.commentid
    const todoId = router.query.todoid
    return (
        <>
            <button onClick={() => router.back()}>Voltar</button>
            <h1> Exibindo comentario: {commentId}</h1>
            <p>do todo {todoId}</p>
        </>
    )
}