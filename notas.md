# Diferença de NPM e NPX (fonte https://pt.stackoverflow.com/questions/433378/qual-a-diferen%C3%A7a-entre-npm-e-npx)
    NPM
        Ele é um Manager (gerenciador) de pacotes, por isso o M
        Gerenciador de pcotes, onde você instala o pacote em sua maquina
        sem preciar instalar ele novamente.
    NPX
        Ele é um executor de pacotes, por isso o X.
        Ele irá usar o pacote sem precisar salvar em sua maquina, no caso
        ele irá baixar em cache e ao mesmo tempo irá executar. Assim
        você não vai se preocupar em ter ele salvo no projeto ou na maquina.

# Nested Routes
    São rotas compostas, onde podemos criar uma estrutura mais complexa,
    como: /products/shirt
        Uma forma de fazer isso no next é criando uma pasta "products" e dentro dela criar um arquivo "shirt.tsx".

# SPA - Sem Page Reload
    Onde ao fazer qulquer coisa na page, ela não da reload

_app (https://dev.to/guiselair/criando-um-layout-persistente-em-nextjs-1g8m)
    É o arquivo base, pois é nele onde tudo se inicia. Se eu fizer alterações nele, irá se replicar em todas as pagins. É recomendado
    colocar nele componentes de Layout (navbar, footer)

# Fragment
    <></>
        é uma tag sem conteúdo, onde dentro dele poderemos retornar
        varios elementos "pais".
        Exemplo:
            return(
                <>
                    <div></div> 
                    <div></div>
                </>
            )
        onde não funcionaria sem o fragment (<></>), pois não pode ter
        2 elementos "pais" (no caso aqui seria as divs).

# Propriedade children
    Ela automaticamente irá entender que algum conteudo irá no meio do
    componente

# npm-check (https://github.com/dylang/npm-check)
    Usado para atualizar pacotes do node

# Fetch
    Resgate de dados dinamicos
    getStaticProps (Static Site Generation):
        O Next irá pré-renderizar a pagina em tempo de execução, usando as props retornadas por getStaticProps.

# To Dos
    API de test JSON Placeholder (https://jsonplaceholder.typicode.com/)

# CSS:
    text-decoration: none
        tira underline de todos os links

# Modal (https://www.youtube.com/watch?v=D6E70Ag36NM)
    É uma janela pop up que fica sobreposta 

# Linux:
    rm -rv 
        remove unico diretorio não vazio, sendo a flag "r" de ir ir recomvendo diretorios dentro de outro