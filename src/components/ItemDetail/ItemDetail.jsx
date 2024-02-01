import './ItemDetail.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon({
          id: data.id,
          name: data.name,
          img: data.sprites.other.dream_world.front_default,
          weight: data.weight,
          height: data.height,
          type: data.types[0].type.name,
        });
      } catch (error) {
        console.error('Error cargando los detalles del Pokémon:', error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="card-pokemon">
      <Card style={{ width: '36rem' }} className="card-poke">
        <Card.Img
          variant="top"
          src={pokemon.img}
          alt={pokemon.name}
          className="img-pokemons"
        />

        <Card.Body className="card-body-pokemon">
          <Card.Title>
            #{pokemon.id} {pokemon.name.toUpperCase()}
          </Card.Title>
          <Card.Text>Peso: {pokemon.weight} </Card.Text>
          <Card.Text>Altura: {pokemon.height} </Card.Text>
          <Card.Text>Tipo: {pokemon.type} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
