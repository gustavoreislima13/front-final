import Layout from '../layout';
import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';

export default async function tema3() {
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 3)
  return (
    <Layout>
      <div className="bg-sky-600 flex flex-col items-center justify-center min-h-screen text-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-8">O Êxodo e as Catástrofes Cósmicas</h1>
        <p className="text-lg max-w-3xl text-center">
          Immanuel Velikovsky propôs uma interpretação revolucionária para os eventos descritos no Êxodo, a famosa fuga dos israelitas do Egito, liderada por Moisés. Segundo Velikovsky, esses eventos não foram simples milagres, mas sim consequências diretas de uma catástrofe cósmica envolvendo o planeta Vênus.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Ele sugeriu que, em sua fase inicial como um cometa, Vênus passou muito próximo da Terra, causando uma série de fenômenos naturais devastadores que ficaram registrados na Bíblia e em outras tradições antigas.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Velikovsky acreditava que as dez pragas do Egito, a escuridão que cobriu o país e a abertura do Mar Vermelho foram todos eventos desencadeados pela interação gravitacional entre Vênus e a Terra.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Ele sugeriu que a cauda de Vênus trouxe pedras incandescentes, poeira e gases, que se manifestaram como chuva de fogo e escuridão sobre o Egito. Velikovsky também ofereceu uma explicação científica para a abertura do Mar Vermelho: a intensa força gravitacional exercida por Vênus teria causado uma maré tão forte que as águas recuaram, permitindo a passagem dos israelitas.
        </p>
        <p className="mt-4 text-lg max-w-3xl text-center">
          Logo após, com o afastamento do cometa, as águas teriam retornado, afogando o exército do faraó. Essa visão do Êxodo não só desafia a narrativa tradicional religiosa, como também oferece uma perspectiva cósmica sobre um dos eventos mais conhecidos da história bíblica.
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
