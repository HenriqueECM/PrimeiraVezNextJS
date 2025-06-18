import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header title="Bem-vindo à página inicial" />
      <p>Esta é a página inicial do nosso site.</p>
      <Link href="/about">Ir para a página de detalhes</Link>
    </div>
  );
}
