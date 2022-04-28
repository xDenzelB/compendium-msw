import { useEffect, useState } from "react"
import { rickAndMortyFetch } from "../services/fetch-utils"

export default function Compendium() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Alive');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setStatus(event.target.value);

    const characterStatus = characters.filter((character) =>
      character.status);
    setResults(characterStatus);
  }

  useEffect(() => {
    const getCharacters = async () => {
      const characterList = await rickAndMortyFetch();
      setCharacters(characterList);
      setLoading(false);
    }
    getCharacters();
  }, [])
  return (
    <div>
      <label>
        Current Character Status:
        <select value={status} onChange={handleChange}>
          <option value='Alive'>Alive</option>
          <option value='Dead'>Dead</option>
          <option value='Unknown'>Unknown</option>
        </select>
      </label>
    </div>
  )
}
