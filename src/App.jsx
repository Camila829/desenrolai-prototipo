import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f9f9f9', padding: '20px' }}>
      <header style={{ backgroundColor: '#00c853', padding: '20px', color: 'white', borderRadius: '10px' }}>
        <h1>Desenrolaí!</h1>
        <p>Facilitando acordos, petições e acesso à justiça</p>
      </header>

      <section style={{ marginTop: '30px' }}>
        <h2>Abrir uma Reclamação Extrajudicial</h2>
        <p>Notifique empresas gratuitamente antes de entrar na justiça.</p>
        <button style={btnStyle}>Iniciar Reclamação</button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Fazer um Acordo Direto</h2>
        <p>Negocie dívidas e pendências com validade legal.</p>
        <button style={btnStyle}>Simular Acordo</button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Gerar Petição Inicial com IA</h2>
        <p>Conte sua história e receba uma petição pronta para imprimir.</p>
        <button style={btnStyle}>Criar Petição</button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Encontrar Advogados para Audiência</h2>
        <p>Conecte-se a profissionais disponíveis para audiências presenciais ou virtuais.</p>
        <button style={btnStyle}>Buscar Advogado</button>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Lista de Escritórios e Advogados</h2>
        <p>Consulte advogados cadastrados para representação e consultas.</p>
        <button style={btnStyle}>Ver Lista</button>
      </section>

      <footer style={{ marginTop: '40px', fontSize: '14px', color: '#777' }}>
        <p>© {new Date().getFullYear()} Desenrolaí. Todos os direitos reservados.</p>
        <p><a href="#" style={{ color: '#00c853' }}>Quem somos</a> | <a href="#" style={{ color: '#00c853' }}>Termos de uso</a> | <a href="#" style={{ color: '#00c853' }}>Política de privacidade</a></p>
      </footer>
    </div>
  )
}

const btnStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#00c853',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
}
