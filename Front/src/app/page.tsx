import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';

export default async function Home(){
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 0)
  
  return (
    <div className="bg-sky-600 flex flex-col items-center justify-center min-h-screen text-gray-100 p-6">
      <p className="text-lg max-w-3xl text-center">Immanuel Velikovsky (1895-1979) foi um psicólogo e escritor russo, famoso por suas teorias controversas sobre astronomia e história. Nascido em Vitebsk, na Bielorrússia, ele estudou medicina na Universidade de Moscovo e, em 1921, se mudou para a Palestina. Em 1939, emigrou para os Estados Unidos, onde publicou seu livro mais conhecido, Mundo em Colisão (1950), que propunha que eventos cósmicos, como a passagem de Vênus, influenciaram a história da Terra e civilizações humanas.</p>
      <p className="text-lg max-w-3xl text-center">Suas ideias provocaram controvérsia, recebendo críticas da comunidade científica, mas também conquistaram um público considerável. Velikovsky continuou a escrever até sua morte em 17 de agosto de 1979, em Nova Iorque, deixando um legado de debate sobre a relação entre ciência, história e religião.</p>
      <div>
      <Image
        src={imagem.img} 
        alt="Ilustração de erro"
        width={500} 
        height={300}
        />
      </div>
    </div>
  )
}