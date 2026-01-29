import {useState} from 'react'
import axios from 'axios'
import './App.css'


    function App(){

        const [Pokemon, setPokemon] = useState (null)
        const [loading, setLoading] = useState (false)


            const traerPokemon = async () => {
                setLoading (true)
            try {
                const backend = await axios.get('http://localhost:6969/api/pokemon')
            setPokemon(backend.data)
            
            }catch (err) {
            console.error ('error:' , err)
            } finally {
                setLoading (false)
            }
            
            }
        return (
    <div className='container'
            style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Pokédex Aleatoria</h1>
            <button onClick={traerPokemon} disabled={loading}>
                {loading ? 'Cargando...' : 'Traer Pokémon'}
            </button>

            {Pokemon && (
            <div className="pokemon-card" style={{ marginTop: '20px' }}>
                <h2>{Pokemon.nombre}</h2>
                <div className= "pokemon-card-img">
                <img src={Pokemon.imagen} alt={Pokemon.nombre} width="200" />
                </div>
                <p><strong>Tipo(s)</strong>:<div className='tipos'>{Pokemon.tipos.join(', ')}</div></p>
                <p><strong>ID</strong>: {Pokemon.id}</p>
                <p><strong>Peso: {Pokemon.peso} kg</strong> </p>
                
            </div>
            )}
    </div>
  )
}
    
    export default App


