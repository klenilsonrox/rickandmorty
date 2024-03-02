import React from "react";

type Params = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Params) => {

  const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  const dados = await response.json()

  return (
    <div className="p-2 max-w-sm mx-auto flex items-center justify-center">
      <div className="flex gap-2 mx-auto flex-wrap max-w-sm w-screen  my-4 border-2 overflow-hidden rounded-md" key={dados.id}>
          <img src={dados.image} alt="" className="w-screen"/>
          <div className="p-2">
          <h1>Nome: <strong>{dados.name}</strong></h1>
          <p className="flex gap-2 items-center">Status: <span className={`h-3 rounded-full w-3 flex ${dados.status==="Alive" ? "bg-green-600":""} ${dados.status==="Dead" ? "bg-red-600":""} ${dados.status==="unknown" ? "bg-slate-400":""}` }></span> <strong>{dados.status}</strong></p>
          <p>Espécie : <strong>{dados.species}</strong> </p>
          <p>Gênero: <strong>{dados.gender ==="unknown" ? "Desconhecido":dados.gender}</strong> </p>
          <p>Origem: <strong>{dados.origin.name ==="unknown" ? "Desconhecida":dados.origin.name}</strong> </p>
          <p>Localização: <strong>{dados.location.name}</strong> </p>
          <button className="mt-2"><a href="/personagens">← Voltar</a></button>
          </div>
      </div>
    </div>
  );
};

export default page;
