import React from 'react'
import { Link } from 'react-router-dom';
import {setTypeColor} from '../services'

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
                                        <small>Height: {poke.height}</small><br/>
                                        <small>Weight: {poke.weight}</small>
                                    </div>
                                </div>
                  {/* section pokemon name that is wrapped in a link */}
                                <div className='type-info'>
                                    <div>
                                        <small>Type:</small><br/>
                                        {poke.type.map((t, i) => {
                                            return (
                                                <span
                                                className='badge badge-pill text-white mx-1'
                                                style={{ backgroundColor: setTypeColor(t) }}
                                                key={i}>
                                                {t}
                                                </span>
                                            );
                                            })}
                                    </div>
                                    <div>
                                        <small>Weaknesses:</small><br/>
                                        {poke.weaknesses.map((w,i)=>{
                                            return(
                                                <span 
                                                className="badge badge-pill text-white mx-1"
                                                style={{backgroundColor: setTypeColor(w)}}
                                                key={i}
                                                >
                                                    {w}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
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
