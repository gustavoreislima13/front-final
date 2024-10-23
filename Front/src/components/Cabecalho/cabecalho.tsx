import Menu from '../Menu/menu';
import Image from 'next/image';

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-blue-500 w-full">
      <div className="flex items-center">
        <Image src="/porto_seguro_logo.png" alt="Porto Seguro Logo" width={50} height={50} />
      </div>
      <div>
        <h1 className="text-black text-3xl font-bold"></h1>
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
}
