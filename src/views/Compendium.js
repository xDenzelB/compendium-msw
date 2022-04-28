import { useEffect, useState } from "react"
import { rickAndMortyFetch } from "../services/fetch-utils"

export default function Compendium() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Alive');

  useEffect(() => {
    const getCharacters = async () => {
      const characterList = await rickAndMortyFetch();
      setCharacters(characterList);
      setLoading(false);
    }
    getCharacters();
  }, [])
  return (
    <div>Compendium</div>
  )
}
