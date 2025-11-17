import React, { useState } from "react";
import { Code, Smartphone, Zap, CheckCircle, MessageCircle } from 'lucide-react';
import './index.css'
import minhaFoto from './assets/minha-foto.jpg';


function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const servicos = [
    {
      icon: <Code className="w-10 h-10" />,
      titulo: "Sites Profissionais",
      descricao: "Landing pages, portfólios e sites institucionais modernos e responsivos.",
      preco: "A partir de R$ 1.200"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      titulo: "Sites para Negócios Locais",
      descricao: "Restaurantes, salões, lojas e serviços - conquiste mais clientes online.",
      preco: "A partir de R$ 1.000"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      titulo: "Manutenção e Melhorias",
      descricao: "Correções, atualizações e otimizações contínuas.",
      preco: "A partir de R$ 300/mês"
    }
  ];

  const enviarWhatsApp = () => {
    const msg = `Olá! Meu nome é ${nome || 'Cliente'} e gostaria de um orçamento. ${mensagem || ''}`;
    window.open(`https://wa.me/5571991454707?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Header */}
      <header className="bg-slate-800/70 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
            <Code className="w-6 h-6" /> Arianna Figueiredo
          </h1>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
          >
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme sua ideia em <span className="text-purple-400">um site profissional</span> hoje mesmo!
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Sites modernos, rápidos e responsivos que fazem sua marca se destacar.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button 
              onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg transition"
            >
              Ver Serviços
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
            <section id="sobre" className="bg-slate-800/40 py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Mim</h2>
          <p className="text-gray-300 text-lg mb-6">
            Olá! Eu sou Ariana Figueiredo, desenvolvedora de sistemas e criadora de soluções digitais. Transformo ideias em sites responsivos, modernos e rápidos, sempre com foco na experiência do usuário e resultados reais.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Meu diferencial? União de <span className="text-purple-400 font-semibold">tecnologia, criatividade e atenção aos detalhes</span>. Cada projeto que entrego é pensado para gerar impacto e valor para o seu negócio.
          </p>
          <div className="flex justify-center mt-6">
            <img 
              src={minhaFoto} // ✅ usando a foto local
              alt="Ariana Figueiredo" 
              className="w-40 h-40 rounded-full border-4 border-purple-500 object-cover"
            />
          </div>
        </div>
      </section>
      {/* Como Funciona */}
      <section className="bg-slate-800/40 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-purple-700/30 p-8 rounded-2xl hover:bg-purple-700/50 transition">
              
              <h3 className="text-2xl font-bold text-white mb-2">1. Você me conta a ideia</h3>
              <p className="text-gray-300">Preencha o formulário e me mande uma mensagem pelo WhatsApp.</p>
            </div>
            <div className="bg-purple-700/30 p-8 rounded-2xl hover:bg-purple-700/50 transition">
              
              <h3 className="text-2xl font-bold text-white mb-2">2. Planejamento e proposta</h3>
              <p className="text-gray-300">Vou analisar seu projeto e enviar uma proposta personalizada com valor e prazo.</p>
            </div>
            <div className="bg-purple-700/30 p-8 rounded-2xl hover:bg-purple-700/50 transition">
              
              <h3 className="text-2xl font-bold text-white mb-2">3. Entrega e acompanhamento</h3>
              <p className="text-gray-300">Após a aprovação, entrego seu site completo e posso manter a manutenção contínua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-slate-800/40 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-purple-700/30 p-8 rounded-xl hover:bg-purple-700/50 transition">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Entrega Rápida</h3>
            <p className="text-gray-300">Projetos prontos em 7-15 dias - seu site no ar rápido!</p>
          </div>
          <div className="bg-purple-700/30 p-8 rounded-xl hover:bg-purple-700/50 transition">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Qualidade Garantida</h3>
            <p className="text-gray-300">Código limpo, profissional e otimizado para performance.</p>
          </div>
          <div className="bg-purple-700/30 p-8 rounded-xl hover:bg-purple-700/50 transition">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">100% Responsivo</h3>
            <p className="text-gray-300">Funciona em todos dispositivos - desktop, tablet e mobile.</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="container mx-auto px-4 py-28">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {servicos.map((servico, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/70 transition hover:scale-105">
              <div className="text-purple-400 mb-6">{servico.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{servico.titulo}</h3>
              <p className="text-gray-300 mb-4">{servico.descricao}</p>
              <p className="text-purple-400 font-bold text-xl">{servico.preco}</p>
              <p className="text-gray-400 mt-2 text-sm">Entre em contato e personalize seu projeto!</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-slate-800/30 py-28">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">Vamos conversar?</h2>
          <p className="text-gray-300 text-center mb-12">Preencha o formulário e me envie sua ideia via WhatsApp</p>
          
          <div className="bg-slate-800/50 border border-purple-500/30 rounded-2xl p-10 shadow-lg">
            <div className="mb-6">
              <label className="block text-white mb-2 font-semibold">Nome</label>
              <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white text-lg"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-white mb-2 font-semibold">Mensagem</label>
              <textarea 
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white h-36 text-lg"
                placeholder="Descreva seu projeto..."
              />
            </div>
            
            <button 
              onClick={enviarWhatsApp}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 text-lg shadow-lg transition transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Enviar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-purple-500/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Arianna Figueiredo - Camaçari, BA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
