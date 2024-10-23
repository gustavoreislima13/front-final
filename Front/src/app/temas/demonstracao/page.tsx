import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';



export default async function demonstracao() {
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 4)
  
  return (
    <div className="bg-sky-600 flex flex-col items-center justify-center min-h-screen text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">A teoria de Vênus como o planeta que nasceu do caos</h1>
      <p className="text-lg max-w-3xl text-center">
      A teoria de Vênus como o planeta que nasceu do caos, proposta por Immanuel Velikovsky em seu livro Mundo em Colisão 1950, apresenta uma narrativa fascinante sobre a formação e a trajetória de Vênus, desafiando as visões tradicionais da astronomia.</p>
      <h2 className="text-4xl font-bold mb-8">A origem de Vênus</h2>
      <p className="text-lg max-w-3xl text-center">Velikovsky argumentou que Vênus não era o planeta calmo e brilhante que observamos hoje, mas sim um cometa recém-nascido. Segundo ele, Vênus foi ejetado de Júpiter e começou a vagar pelo Sistema Solar em uma órbita caótica. Essa descrição se distancia da visão convencional de Vênus como um planeta formado a partir da nebulosa solar, o que provocou críticas entre os cientistas.</p>
      <h2 className="text-4xl font-bold mb-8">Interações celestiais e desastres naturais</h2>
      <p className="text-lg max-w-3xl text-center">De acordo com Velikovsky, a trajetória errática de Vênus causou uma série de catástrofes na Terra. Ele sugeriu que, em sua aproximação, Vênus desencadeou desastres naturais, como:
Terremotos: A influência gravitacional de Vênus em sua passagem próxima à Terra poderia ter provocado instabilidades na crosta terrestre, resultando em tremores.
Erupções vulcânicas: As interações gravitacionais e as mudanças atmosféricas poderiam ter estimulado erupções em várias regiões do planeta.
Tempestades de fogo: A passagem de Vênus poderia ter gerado fenômenos atmosféricos intensos, levando a incêndios em massa.</p>
      <h2 className="text-4xl font-bold mb-8"> Vênus e eventos históricos</h2>
      <p className="text-lg max-w-3xl text-center">Velikovsky fez conexões entre essas catástrofes e eventos históricos documentados, especialmente no contexto bíblico. Ele ligou o surgimento de Vênus a acontecimentos como:
As Pragas do Egito: Ele sugeriu que as calamidades enfrentadas pelo Egito, como as pragas, poderiam ter sido influenciadas por eventos celestiais, incluindo a passagem de Vênus.
A separação do Mar Vermelho: Velikovsky propôs que a divisão das águas, conforme descrito no Êxodo, poderia ser explicada por fenômenos naturais desencadeados pela aproximação de Vênus.</p>
      <h2 className="text-4xl font-bold mb-8">Miraculos ou fenômenos naturais?</h2>
      <p className="text-lg max-w-3xl text-center">Velikovsky reinterpreta muitos eventos considerados milagrosos em textos sagrados, como a Bíblia, sugerindo que esses episódios eram, na verdade, respostas naturais a interações cósmicas. Essa visão provocou debates acalorados entre historiadores, teólogos e cientistas, já que desafiava a compreensão tradicional da história e da ciência.</p>
      <h2 className="text-4xl font-bold mb-8">Impacto e controvérsia</h2>
      <p className="text-lg max-w-3xl text-center">A teoria de Velikovsky gerou controvérsias significativas na comunidade científica, com muitos rejeitando suas afirmações por falta de evidências empíricas e rigor científico. No entanto, sua obra despertou interesse em diversas áreas, incluindo psicologia, história e filosofia, incentivando debates sobre a relação entre ciência, religião e a interpretação da história.</p>
      <div className="mt-8">
        <Image
        src={imagem.img} 
        alt="Ilustração de erro"
        width={500} 
        height={300}
        />
        </div>
    </div>
  );
}
