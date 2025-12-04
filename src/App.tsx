import { motion } from 'framer-motion'
import { useState } from 'react'

// ============================================================================
// SVG COMPONENTS
// ============================================================================

const InfinityLogo = ({ className = "w-8 h-8", color = "#000000" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none">
    <path
      d="M25 25C25 17 18 10 10 10C2 10 -5 17 -5 25C-5 33 2 40 10 40C18 40 25 33 25 25ZM25 25C25 17 32 10 40 10C48 10 55 17 55 25C55 33 48 40 40 40C32 40 25 33 25 25Z"
      transform="translate(30, 0)"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DiamondLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <polygon
      points="50,5 95,50 50,95 5,50"
      stroke="#000000"
      strokeWidth="3"
      fill="none"
    />
    <polygon
      points="50,20 80,50 50,80 20,50"
      stroke="#000000"
      strokeWidth="2"
      fill="none"
    />
  </svg>
)

// ============================================================================
// BADGE COMPONENT
// ============================================================================

const CourseBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="inline-flex items-center gap-3 px-5 py-3 bg-black-pure text-white-pure rounded-full mb-8"
  >
    <InfinityLogo className="w-5 h-5" color="#FFFFFF" />
    <span className="text-sm font-semibold tracking-wide">MENTE LENDÁRIA</span>
    <span className="text-xs px-2 py-0.5 bg-white-pure/20 rounded-full">CURSO GRÁTIS</span>
  </motion.div>
)

// ============================================================================
// EMAIL FORM COMPONENT
// ============================================================================

const EmailForm = ({ buttonText = "Quero Minha Mente Lendária" }: { buttonText?: string }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black-pure flex items-center justify-center">
          <svg className="w-8 h-8 text-white-pure" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-black-pure mb-2">Você está dentro!</h3>
        <p className="text-gray-600">Verifique seu e-mail para acessar o curso.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="flex-1 px-5 py-4 rounded-full border-2 border-black-pure/20 focus:border-black-pure focus:outline-none transition-colors text-center sm:text-left"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-black-pure text-white-pure rounded-full font-semibold hover:bg-black-deep transition-all duration-300 hover:scale-105 whitespace-nowrap"
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}

// ============================================================================
// MAIN APP - V5: O EXCESSO QUE PARALISA
// ============================================================================

function App() {
  return (
    <div className="min-h-screen bg-white-pure">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <CourseBadge />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black-pure leading-tight mb-6"
          >
            Você nunca teve acesso a{' '}
            <span className="italic">tanta informação</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8"
          >
            E nunca produziu tão pouco com ela.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12"
          >
            <p>
              Livros, cursos, podcasts, newsletters, vídeos... você consome sem parar.
              Mas na hora de criar, decidir ou executar, nada vem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <EmailForm />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <InfinityLogo className="w-4 h-4" color="#6B7280" />
              O SINTOMA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black-pure">
              Repertório infinito,<br />output zero
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { icon: "📚", text: "Você tem 47 livros na fila e não terminou nenhum" },
              { icon: "📑", text: "Salvou 200+ artigos que nunca vai ler" },
              { icon: "🎧", text: "Consome horas de podcast sem aplicar nada" },
              { icon: "💻", text: "Comprou 12 cursos e não terminou 1" },
              { icon: "📝", text: "Tem 500 notas espalhadas em 8 apps diferentes" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white-pure rounded-2xl border border-gray-200"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-lg text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-black-pure text-white-pure rounded-3xl text-center"
          >
            <p className="text-xl md:text-2xl font-medium">
              O problema não é falta de conhecimento.<br />
              <span className="opacity-70">É excesso sem sistema.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Paradox Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <DiamondLogo className="w-4 h-4" />
              O PARADOXO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black-pure mb-8">
              Quanto mais você consome,<br />menos você produz
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            <div className="p-8 bg-gray-50 rounded-3xl text-left">
              <h3 className="text-2xl font-bold text-black-pure mb-4">O que você faz</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  Consome mais conteúdo buscando clareza
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  Salva tudo "para depois"
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  Sente que precisa aprender mais antes de agir
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">→</span>
                  Paralisa diante das opções
                </li>
              </ul>
            </div>
            <div className="p-8 bg-black-pure text-white-pure rounded-3xl text-left">
              <h3 className="text-2xl font-bold mb-4">O que acontece</h3>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-start gap-3">
                  <span className="opacity-50">→</span>
                  Mais ruído, menos sinal
                </li>
                <li className="flex items-start gap-3">
                  <span className="opacity-50">→</span>
                  "Depois" nunca chega
                </li>
                <li className="flex items-start gap-3">
                  <span className="opacity-50">→</span>
                  A barreira fica cada vez maior
                </li>
                <li className="flex items-start gap-3">
                  <span className="opacity-50">→</span>
                  Você não decide, a inércia decide por você
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mt-12 max-w-2xl mx-auto"
          >
            Esse ciclo tem nome: <strong className="text-black-pure">Paralisia por Excesso</strong>.
            E ele não se resolve com mais informação.
          </motion.p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <InfinityLogo className="w-4 h-4" color="#6B7280" />
              A SOLUÇÃO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black-pure mb-4">
              Mente Lendária
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um sistema que transforma o caos informacional em clareza e ação
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Filtro Inteligente",
                description: "Separa o que importa do que só parece importante",
                icon: "🎯"
              },
              {
                title: "Conexão de Ideias",
                description: "Liga os pontos entre tudo que você já aprendeu",
                icon: "🔗"
              },
              {
                title: "Ação Imediata",
                description: "Transforma insight em decisão em segundos",
                icon: "⚡"
              },
              {
                title: "Memória Externa",
                description: "Sua IA lembra o que você esqueceu que sabia",
                icon: "🧠"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white-pure rounded-3xl border border-gray-200"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-black-pure mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <DiamondLogo className="w-4 h-4" />
              O MÉTODO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black-pure">
              Os 4Cs da Mente Lendária
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                letter: "C",
                title: "Consumir",
                subtitle: "com intenção",
                description: "Aprenda a filtrar antes de absorver. Menos é mais quando o mais é estratégico."
              },
              {
                letter: "C",
                title: "Capturar",
                subtitle: "com sistema",
                description: "Pare de perder ideias. Cada insight vai para o lugar certo automaticamente."
              },
              {
                letter: "C",
                title: "Conectar",
                subtitle: "com contexto",
                description: "Suas notas conversam entre si. A IA encontra padrões que você não viu."
              },
              {
                letter: "C",
                title: "Criar",
                subtitle: "com velocidade",
                description: "De 100 fontes para 1 output em minutos. Seu conhecimento trabalha para você."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 bg-gray-50 rounded-3xl"
              >
                <div className="w-16 h-16 bg-black-pure text-white-pure rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {item.letter}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black-pure">
                    {item.title} <span className="font-normal text-gray-500">{item.subtitle}</span>
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 px-6 bg-black-pure text-white-pure">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold opacity-50 mb-4">
              <InfinityLogo className="w-4 h-4" color="#FFFFFF" />
              A TRANSFORMAÇÃO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              De colecionador para criador
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white-pure/20"
            >
              <h3 className="text-sm font-semibold opacity-50 mb-4">ANTES</h3>
              <ul className="space-y-3 opacity-70">
                <li>• Ansiedade por não dar conta</li>
                <li>• 500 notas espalhadas</li>
                <li>• Horas para escrever um e-mail</li>
                <li>• "Sei que vi isso em algum lugar"</li>
                <li>• Paralisia nas decisões</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white-pure/10"
            >
              <h3 className="text-sm font-semibold opacity-50 mb-4">DEPOIS</h3>
              <ul className="space-y-3">
                <li>• Clareza sobre o que importa</li>
                <li>• Sistema organizado e vivo</li>
                <li>• Conteúdo em minutos</li>
                <li>• Tudo acessível em segundos</li>
                <li>• Ação rápida e confiante</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <DiamondLogo className="w-4 h-4" />
              ACESSO GRATUITO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black-pure mb-4">
              O que você vai aprender
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { module: "01", title: "Diagnóstico", desc: "Identifique os vazamentos do seu sistema atual" },
              { module: "02", title: "Arquitetura", desc: "Construa sua base no Obsidian + IA" },
              { module: "03", title: "Captura", desc: "Nunca mais perca uma ideia importante" },
              { module: "04", title: "Conexão", desc: "Faça suas notas trabalharem juntas" },
              { module: "05", title: "Criação", desc: "Transforme conhecimento em output" },
              { module: "06", title: "Automação", desc: "Coloque o sistema no piloto automático" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl"
              >
                <span className="text-sm font-bold text-gray-400">MÓDULO {item.module}</span>
                <h3 className="text-lg font-bold text-black-pure mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gray-50 rounded-3xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-black-pure">+ Bônus Exclusivo</h3>
                <p className="text-gray-600 mt-2">
                  Templates prontos para Obsidian + Prompts de IA otimizados
                </p>
              </div>
              <span className="text-4xl font-bold text-gray-300">GRÁTIS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <CourseBadge />

            <h2 className="text-3xl md:text-5xl font-bold text-black-pure mb-6">
              Chega de acumular.<br />
              <span className="text-gray-400">É hora de criar.</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto">
              Transforme seu excesso em sistema.
              Sua paralisia em produção.
            </p>

            <EmailForm buttonText="Quero Minha Mente Lendária" />

            <p className="text-sm text-gray-400 mt-6">
              Acesso imediato • 100% gratuito • Sem cartão de crédito
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <DiamondLogo className="w-6 h-6" />
            <span className="font-semibold text-black-pure">Academia Lendária</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 Academia Lendária. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
