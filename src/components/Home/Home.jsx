import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [orderPokemons, setOrderPokemons] = useState({
    sortBy: null,
    ascending: true,
  });

  useEffect(() => {
    try {
      const viewPokemon = async () => {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0'
        );
        const data = await response.json();

        const { results } = data;

        const newPokemons = results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();
          console.log(poke);
          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            weight: poke.weight,
            height: poke.height,
          };
        });
        setPokemons(await Promise.all(newPokemons));
      };
      viewPokemon();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sortPokemons = (sortBy) => {
    setOrderPokemons((prevSortOrder) => ({
      sortBy,
      ascending:
        prevSortOrder.sortBy === sortBy ? !prevSortOrder.ascending : true,
    }));

    setPokemons((prevPokemons) =>
      [...prevPokemons].sort((a, b) => {
        const order = orderPokemons.ascending ? 1 : -1;

        if (sortBy === 'id') {
          return order * (a[sortBy] - b[sortBy]);
        } else {
          if (a[sortBy] < b[sortBy]) {
            return -1 * order;
          }
          if (a[sortBy] > b[sortBy]) {
            return 1 * order;
          }
          return 0;
        }
      })
    );
  };

  return (
    <>
      <div className="title-buttons">
        <h1>Lista de Pokémons:</h1>
        <div className="buttons-order">
          <Button variant="primary" onClick={() => sortPokemons('id')}>
            Ordenar por ID{' '}
            {orderPokemons.sortBy === 'id' &&
              (orderPokemons.ascending ? '↑' : '↓')}
          </Button>
          <Button variant="primary" onClick={() => sortPokemons('weight')}>
            Ordenar por peso{' '}
            {orderPokemons.sortBy === 'weight' &&
              (orderPokemons.ascending ? '↑' : '↓')}
          </Button>
          <Button variant="primary" onClick={() => sortPokemons('height')}>
            Ordenar por altura{' '}
            {orderPokemons.sortBy === 'height' &&
              (orderPokemons.ascending ? '↑' : '↓')}
          </Button>
        </div>
      </div>

      <ul className="list-pokemon">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card style={{ width: '18rem' }}>
              <Link to={`/pokemon/${pokemon.id}`}>
                <Card.Img
                  variant="top"
                  src={pokemon.img}
                  alt={pokemon.name}
                  className="img-pokemons"
                />
              </Link>
              <Card.Body className="card-pokemons">
                <Card.Title>
                  #{pokemon.id} {pokemon.name.toUpperCase()}
                </Card.Title>
                <Card.Text>Peso: {pokemon.weight} </Card.Text>
                <Card.Text>Altura: {pokemon.height} </Card.Text>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <Button variant="primary">Ver detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
