import { useEffect, useState } from "react";
import Game from "../game/Game.jsx";

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export default function Catalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(BASE_URL);
                const result = await response.json();
                console.log(response);
                console.log(result);
                

                setGames(Object.values(result));
            } catch (err) {
                alert(err.mesage);
            }
        })();
    }, []);

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {/* Display div: with information about every game (if any) */}
            <div className="catalog-container">
                {games.map(game => <Game key={game._id} {...game} />)}
            </div>
            {/* Display paragraph: If there is no games  */}
            {/* <h3 class="no-articles">No Added Games Yet</h3> */}
        </section>
    )
}