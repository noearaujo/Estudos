import Link from "next/link";
import Router from "next/router";

export async function getStaticProps(context) {
    const {params} = context
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`)
    const todo = await data.json()

    return {
        props: {todo}
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    const paths = data.map((todo) => {
        return {
            params: {
                todoid: `${todo.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default function Todo({todo}) {
    return (
        <>
            <button onClick={() => Router.back()}>Voltar</button>
            <h1>Exibindo Todo: {todo.id}</h1>
            <h3>{todo.title}</h3>
            <br />
            <br />
            <p>Comentarios:<br /><br /></p>
            <p>
                Ojuara: lá lá lá lá...<Link href={`/todos/${todo.id}/comments/1`}>ver mais</Link>
            </p>
            <p>
                Noé: lá lá lá lá...<Link href={`/todos/${todo.id}/comments/2`}>ver mais</Link>
            </p>
        </>
    )
}