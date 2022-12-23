import { useState } from 'react';

function Home() {
    return (
        <div>
        <h1>Feliz Natal, Baby e mamãe, 
            Aproveitem muito o dia de vocês,
            tomando um chocolate quente e vendo a neve pela janela nesse friozinho de natal igual de filme.
            Estou morrendo de saudades e muito orgulhosa de vocês,
            Amo muito vocês s2
            Da sua filha amada, Liriel Amaral S2</h1>
        <Contador />
        <div>Amo vocês</div>
        </div>
        )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home