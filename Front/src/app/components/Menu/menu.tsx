import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-8">
        <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link href="/temas/tema1" className="text-white hover:text-gray-400">A Reinterpretação da História Humana e da Geologia</Link></li>
        <li><Link href="/temas/tema2" className="text-white hover:text-gray-400">Vênus, O Planeta que Nasceu do Caos</Link></li>
        <li><Link href="/temas/tema3" className="text-white hover:text-gray-400">As Guerras dos Deuses e Marte</Link></li>
        <li><Link href="/temas/demonstracao" className="text-white hover:text-gray-400">A teoria de Vênus como o planeta que nasceu do caos</Link></li>
      </ul>
    </nav>
  );
}
