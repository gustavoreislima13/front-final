import Layout from '../layout'; 
import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';

export default async function Tema1() {
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 1)
  
  return (
    <Layout>
      <div className="bg-sky-600 flex flex-col items-center justify-center min-h-screen text-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-8">A Reinterpretação da História Humana e da Geologia</h1>
        <p className="text-lg max-w-3xl text-center">
          Immanuel Velikovsky não apenas propôs que eventos cósmicos catastróficos moldaram a história da humanidade, mas também sugeriu que esses mesmos eventos alteraram drasticamente a geologia da Terra. Ele acreditava que grandes mudanças geológicas, como terremotos massivos, erupções vulcânicas e deslocamentos continentais, ocorreram de maneira súbita devido às interações planetárias.
        </p>
        <p className="text-lg max-w-3xl text-center">
          Para Velikovsky, as teorias geológicas tradicionais, como a tectônica de placas e a lenta erosão de montanhas ao longo de milhões de anos, não explicavam adequadamente certas formações geológicas e depósitos fósseis encontrados ao redor do mundo. Ele argumentou que muitas dessas formações foram o resultado de eventos cataclísmicos globais, como a aproximação de Vênus ou Marte, que causaram forças gravitacionais extremas, impactando a crosta terrestre.
        </p>
        <p className="text-lg max-w-3xl text-center">
          Em vez de longos períodos de evolução gradual, Velikovsky defendia uma geologia catastrofista, onde mudanças repentinas e destrutivas teriam remodelado a superfície do planeta em curtos períodos de tempo. Ele também sugeriu que as extinções em massa, como a dos dinossauros, poderiam estar relacionadas a esses eventos cósmicos e não apenas a impactos de asteroides ou erupções vulcânicas.
        </p>
        <p className="text-lg max-w-3xl text-center">
          Essa visão desafiava profundamente o entendimento científico da época, e mesmo hoje em dia, continua a suscitar debates entre geólogos e historiadores que discutem a possibilidade de eventos cataclísmicos terem desempenhado um papel maior na evolução da Terra do que se pensava anteriormente.
        </p>
        <div className="mt-8">
        <Image
        src={imagem.img} 
        alt="Ilustração de erro"
        width={500} 
        height={300}
        />
        </div>
      </div>
    </Layout>
  );
}