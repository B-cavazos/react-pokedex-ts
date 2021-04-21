import React from 'react'
import { Link } from 'react-router-dom';

interface PkmnProps{
    pokemon: Pokemon[];
}

const ListItem: React.FC<PkmnProps>= ({pokemon}) => {
  return (
    <div id='list-item'>
        <div className='row my-3'>
            <div className='col'>
                <ul className='list-group'>
                    {pokemon.map((poke, index) => {
                        return (
                            <li
                                className='list-group-item d-flex justify-content-around align-items-center'
                                key={index}
                            >
                  {/* section img pulled to left */}
                                <img src={poke.img} alt={poke.name} />
                                <div className='poke-info'>
                                    <h2>
                                        <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
                                            {poke.name}
                                        </Link>
                                    </h2>
                                    <div>
                                        <small>Height: {poke.height}</small>
                                        <small>Weight: {poke.weight}</small>
                                    </div>
                                </div>
                  {/* section pokemon name that is wrapped in a link */}
                  {/* section for details under the pokemon name */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default ListItem;
