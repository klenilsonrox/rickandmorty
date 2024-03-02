import React from 'react';

export type ProdutoType = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0|1; // Corrigido para boolean
};

const Produto = ({ item }: { item: ProdutoType }) => {
  return (
    <div key={item.id} className='bg-slate-100 p-2 mb-4 rounded-md shadow-sm'>
      <h1>{item.nome}</h1>
      <p>R$ {item.preco}</p>
    </div>
  );
};

export default Produto;
