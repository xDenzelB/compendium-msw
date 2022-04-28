import { useEffect, useState } from "react"
import { rickAndMortyFetch } from "../services/fetch-utils"

export default function Compendium() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Dead');
  const [results, setResults] = useState([]);

  const currentStatus = !!status.length;
  const noResults = currentStatus && !results.length;
  const characterList = currentStatus ? results : characters;

  const handleChange = (event) => {
    setStatus(event.target.value);
  }

  useEffect(() => {
    const getCharacters = async () => {
      const characterList = await rickAndMortyFetch();
      setCharacters(characterList);
      setStatus('Alive');
      setLoading(false);
    }
    getCharacters();
  }, [])

  useEffect(() => {
    const characterStatus = characters.filter((character) => {
      return character.status === status;
    });
    setResults(characterStatus);
  }, [status])
  return (
    <div>
      <h2>Rick and Morty Characters!!</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <><label>
          Current Character Status:
          <select value={status} onChange={handleChange}>
            <option value='Alive'>Alive</option>
            <option value='Dead'>Dead</option>
            <option value='unknown'>Unknown</option>
          </select>
        </label><ul>
            {characterList.map((character) => {
              return (
                <li>
                  <img src={character.img} />
                  <h3>{character.name}</h3>
                  <p>{character.status}</p>
                </li>
              );
            })}
          </ul></>
      )}
      {noResults && <p>No Results Found ):</p>}
    </div>
  )
}
