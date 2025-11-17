import React, { useState } from "react";
import { Code, Smartphone, Zap, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const servicos = [
    {
      icon: <Code className="w-8 h-8" />,
      titulo: "Sites Profissionais",
      descricao: "Landing pages, sites institucionais e portfólios responsivos",
      preco: "A partir de R$ 1.200",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      titulo: "Sites para Negócios Locais",
      descricao: "Restaurantes, salões, lojas e serviços",
      preco: "A partir de R$ 1.000",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      titulo: "Manutenção e Melhorias",
      descricao: "Correções, atualizações e otimizações",
      preco: "A partir de R$ 300/mês",
    },
  ];

  const enviarWhatsApp = () => {
    const msg = `Olá! Meu nome é ${nome || "Cliente"}. ${
      mensagem || "Gostaria de um orçamento."
    }`;
    window.open(`https://wa.me/5571991454707?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Ariana Figueiredo
          </h1>
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformo suas ideias em <span className="text-purple-400">sites profissionais</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Desenvolvedora de sistemas em Camaçari-BA. Sites responsivos, rápidos e modernos.
          </motion.p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Ver Serviços
            </button>
            <button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-8 h-8 text-white" />, titulo: "Entrega Rápida", desc: "Projetos em 7-15 dias" },
            { icon: <CheckCircle className="w-8 h-8 text-white" />, titulo: "Qualidade Garantida", desc: "Código limpo e profissional" },
            { icon: <Smartphone className="w-8 h-8 text-white" />, titulo: "100% Responsivo", desc: "Funciona em todos dispositivos" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.titulo}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="text-purple-400 mb-4">{servico.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{servico.titulo}</h3>
              <p className="text-gray-400 mb-4">{servico.descricao}</p>
              <p className="text-purple-400 font-bold text-lg">{servico.preco}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Vamos conversar?</h2>
          <p className="text-gray-400 text-center mb-12">Preencha e envie via WhatsApp</p>
          
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-8">
            <div className="mb-6">
              <label className="block text-white mb-2 font-semibold">Nome</label>
              <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-white mb-2 font-semibold">Mensagem</label>
              <textarea 
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full bg-slate-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white h-32"
                placeholder="Descreva seu projeto..."
              />
            </div>
            
            <button 
              onClick={enviarWhatsApp}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-purple-500/10 text-center text-gray-400">
        <p>© 2025 Ariana Figueiredo - Camaçari, BA</p>
      </footer>
    </div>
  );
}

export default App;
