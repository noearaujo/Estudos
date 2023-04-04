import CustomHead from "@/components/customhead"
import styles from "@/styles/Home.module.css"

export async function getStaticProps() {
  const maxPokemons = 251
  const api = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${api}?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = ++index;
  });

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({pokemons}) {
  return (
    <>
      <CustomHead title="Home"/>
      <ul>
        {
          pokemons.map((pokemons) => (
            <li key={pokemons.id}>{pokemons.name}</li>
          ))
        }
      </ul>
    </>
  )
}