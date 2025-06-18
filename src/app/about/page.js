import Header from '../../components/Header';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Header title="Página de Detalhes" />
      <p>Esta é a página de detalhes.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
