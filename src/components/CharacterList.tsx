'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const[loading,setLoading]=React.useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        setCharacters(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
        {loading && <div className="flex items-center justify-center h-screen fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="border-t-4 border-r-4 border-b-4 border-l-transparent border-t-transparent  border-purple-700 rounded-full animate-spin h-12 w-12"></div>
    </div>}
      <h1 className='text-center py-4 font-semibold text-2xl'>Lista de Personagens</h1>
      <div className='w-screen  flex items-center justify-center gap-4 max-w-7xl mx-auto'>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <button onClick={handleNextPage}>Próxima</button>
      </div>
      <ul className='container'>
        {!loading && characters.map(({id,name,status,species,gender,origin,location,image}) => (
            <li key={id} className='overflow-hidden rounded-md shadow-md border personagem'>
            <img src={image} alt="" className='w-screen'/>
            <div className='p-2'>
                <h1>nome: <strong>{name}</strong></h1>
                <p className='flex gap-2 items-center'>Status: <span className={`flex h-3 w-3 ${status==="Dead" ? "bg-red-600":"bg-green-600"} ${status==="unknown" ? "bg-slate-400":""} rounded-full`}></span> <strong>{status}</strong></p>
                <p>Espécie : <strong>{species}</strong></p>
                <div>
                <button className='mt-2'><a href={`/personagens/${id}`}>mais informações
                </a></button>
                </div>
            </div>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
