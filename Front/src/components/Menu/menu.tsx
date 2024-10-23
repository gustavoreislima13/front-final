import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="flex space-x-8">
        <li><Link href="/" className="text-white text-xl hover:text-gray-200">Página inicial</Link></li>
        <li><Link href="/temas/tema1" className="text-white text-xl hover:text-gray-200">História Humana e da Geologia</Link></li>
        <li><Link href="/temas/tema2" className="text-white text-xl hover:text-gray-200">Vênus, O Planeta que Nasceu do Caos</Link></li>
        <li><Link href="/temas/tema3" className="text-white text-xl hover:text-gray-200">As Guerras dos Deuses e Marte</Link></li>
        <li><Link href="/temas/demonstracao" className="text-white text-xl hover:text-gray-200">A teoria de Vênus</Link></li>
      </ul>
    </nav>
  );
}
