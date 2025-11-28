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

            {
                games.length > 0
                    ? (
                        <div className="catalog-container">
                            {games.map(game => <Game key={game._id} {...game} />)}
                        </div>
                    )
                    :
                    <h3 className="no-articles">No Added Games Yet</h3>
            }
        </section>
    )
}