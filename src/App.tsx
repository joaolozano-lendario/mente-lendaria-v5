import { motion } from 'framer-motion'
import { useState } from 'react'
import { Target, Link2, Zap, Brain, BookOpen, Layers, Sparkles, Cpu, FileText } from 'lucide-react'

// ============================================================================
// SVG COMPONENTS - OFFICIAL ACADEMIA LENDÁRIA LOGOS
// ============================================================================

const InfinityLogo = ({ className = "w-8 h-auto", color = "#000000" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 400 184" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M393.3 57.2C388.7 45.8 381.9 35.6 373.2 26.9C364.4 18.2 354.2 11.4 342.9 6.8C331.8 2.3 320.2 0 308.3 0C296.4 0 284.8 2.3 273.8 6.7C262.4 11.3 252.2 18.1 243.5 26.8L200 70.3L156.5 26.8C147.7 18.1 137.5 11.3 126.2 6.7C115.2 2.3 103.6 0 91.7 0C79.8 0 68.2 2.3 57.2 6.7C45.8 11.3 35.6 18.1 26.9 26.8C18.2 35.6 11.4 45.8 6.8 57.1C2.3 68.2 0 79.8 0 91.7C0 103.6 2.3 115.2 6.7 126.2C11.3 137.6 18.1 147.8 26.8 156.5C35.5 165.2 45.8 172 57.1 176.6C68.1 181.1 79.7 183.3 91.6 183.3C103.5 183.3 115.1 181 126.1 176.6C137.5 172 147.7 165.2 156.4 156.5L199.9 113L210.4 123.5L243.4 156.5C252.2 165.2 262.4 172 273.7 176.6C284.7 181.1 296.3 183.3 308.2 183.3C320.1 183.3 331.7 181 342.7 176.6C354.1 172 364.3 165.2 373 156.5C381.7 147.7 388.5 137.5 393.1 126.2C397.6 115.2 399.8 103.6 399.8 91.7C399.8 79.8 397.5 68.2 393.1 57.2H393.3ZM369.7 91.7C369.7 108.1 363.3 123.6 351.7 135.2C340.1 146.8 324.7 153.2 308.2 153.2C291.7 153.2 276.3 146.8 264.7 135.2L221.2 91.7L264.7 48.2C276.3 36.6 291.7 30.2 308.2 30.2C324.7 30.2 340.1 36.6 351.7 48.2C363.3 59.8 369.7 75.2 369.7 91.7ZM178.6 91.7L135.1 135.2C123.5 146.8 108.1 153.2 91.6 153.2C75.2 153.2 59.7 146.8 48.1 135.2C36.5 123.6 30.1 108.2 30.1 91.7C30.1 75.2 36.5 59.8 48.1 48.2C59.7 36.6 75.1 30.2 91.6 30.2C108 30.2 123.5 36.6 135.1 48.2L178.5 91.6V91.7H178.6Z" fill={color} />
  </svg>
)

const DiamondLogo = ({ className = "w-6 h-6", color = "#000000" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 320 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={color} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z" />
  </svg>
)

// ============================================================================
// HEADER LOGO COMPONENT
// ============================================================================

const AcademiaLogo = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex items-center justify-center gap-2 mb-6">
    <DiamondLogo className="w-5 h-5 sm:w-6 sm:h-6" color="#000000" />
    <span className="text-sm sm:text-base font-medium tracking-wide text-gray-600">
      Academia Lendár<span className="font-bold text-black-pure">[IA]</span>
    </span>
  </motion.div>
)

// ============================================================================
// BADGE COMPONENT
// ============================================================================

const CourseBadge = ({ className = "" }: { className?: string }) => (
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
    className={`inline-flex items-center gap-2 px-4 py-2 bg-black-pure rounded-full border border-gray-700 ${className}`}>
    <DiamondLogo className="w-3.5 h-3.5" color="#FFFFFF" />
    <span className="text-[10px] sm:text-xs font-medium tracking-widest text-white-pure/90 uppercase">Mente Lendária</span>
    <span className="w-px h-3 bg-gray-600" />
    <span className="text-[10px] sm:text-xs font-bold tracking-wide text-emerald-400 uppercase">Curso Gratuito</span>
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
    if (email) setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto px-4 sm:px-0">
      <div className="flex flex-col gap-3">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor e-mail" required
          className="w-full px-5 py-4 rounded-full border-2 border-black-pure/20 focus:border-black-pure focus:outline-none transition-colors text-center" />
        <button type="submit"
          className="w-full px-6 py-4 bg-[#FFCC00] text-black-pure rounded-full font-bold hover:bg-[#E6B800] transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-base sm:text-lg">
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
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          <AcademiaLogo />
          <CourseBadge />

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 mt-8">
            <span className="font-normal text-gray-700">Você nunca teve acesso à</span>{' '}
            <span className="font-bold text-black-pure italic">tanta informação</span><span className="font-bold text-black-pure">.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">
            <span className="text-gray-500 font-light">E nunca produziu</span>{' '}
            <span className="text-black-pure font-semibold">tão pouco</span>{' '}
            <span className="text-gray-500 font-light">com ela.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            <p>Livros, cursos, podcasts, newsletters, vídeos... você consome sem parar. Mas na hora de criar, decidir ou executar, nada vem.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <EmailForm />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <InfinityLogo className="w-5 h-auto" color="#6B7280" />
              O SINTOMA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black-pure">
              <span className="font-bold">Repertório infinito,</span><br />
              <span className="font-light text-gray-500">output</span> <span className="font-black">zero</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { icon: BookOpen, text: "Você tem 47 livros na fila e não terminou nenhum" },
              { icon: FileText, text: "Salvou 200+ artigos que nunca vai ler" },
              { icon: Sparkles, text: "Consome horas de podcast sem aplicar nada" },
              { icon: Cpu, text: "Comprou 12 cursos e não terminou 1" },
              { icon: Layers, text: "Tem 500 notas espalhadas em 8 apps diferentes" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white-pure rounded-2xl border border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black-pure rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white-pure" />
                </div>
                <span className="text-base sm:text-lg text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-8 sm:mt-12 p-6 sm:p-8 bg-black-pure text-white-pure rounded-2xl sm:rounded-3xl text-center">
            <p className="text-lg sm:text-xl md:text-2xl">
              <span className="font-normal opacity-90">O problema não é falta de conhecimento.</span><br />
              <span className="font-bold text-[#FFCC00]">É excesso sem sistema.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Paradox Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <DiamondLogo className="w-4 h-4" color="#6B7280" />
              O PARADOXO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black-pure mb-6 sm:mb-8">
              <span className="font-light text-gray-600">Quanto mais você</span> <span className="font-bold">consome,</span><br />
              <span className="font-light text-gray-600">menos você</span> <span className="font-black">produz</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="p-6 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-black-pure mb-3 sm:mb-4">O que você faz</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-gray-400">→</span>Consome mais conteúdo buscando clareza</li>
                <li className="flex items-start gap-3"><span className="text-gray-400">→</span>Salva tudo "para depois"</li>
                <li className="flex items-start gap-3"><span className="text-gray-400">→</span>Sente que precisa aprender mais antes de agir</li>
                <li className="flex items-start gap-3"><span className="text-gray-400">→</span>Paralisa diante das opções</li>
              </ul>
            </div>
            <div className="p-6 sm:p-8 bg-black-pure text-white-pure rounded-2xl sm:rounded-3xl text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">O que acontece</h3>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-start gap-3"><span className="opacity-50">→</span>Mais ruído, menos sinal</li>
                <li className="flex items-start gap-3"><span className="opacity-50">→</span>"Depois" nunca chega</li>
                <li className="flex items-start gap-3"><span className="opacity-50">→</span>A barreira fica cada vez maior</li>
                <li className="flex items-start gap-3"><span className="opacity-50">→</span>Você não decide, a inércia decide por você</li>
              </ul>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 mt-8 sm:mt-12 max-w-2xl mx-auto">
            <span className="font-light">Esse ciclo tem nome:</span>{' '}
            <strong className="text-black-pure font-bold">Paralisia por Excesso</strong>.<br />
            <span className="font-light text-gray-500">E ele não se resolve com mais informação.</span>
          </motion.p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <InfinityLogo className="w-5 h-auto" color="#6B7280" />
              A SOLUÇÃO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black-pure mb-3 sm:mb-4">
              <span className="font-light text-gray-600">Mente</span> <span className="font-black">Lendária</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              <span className="text-gray-500 font-light">Um sistema que transforma o</span>{' '}
              <span className="text-black-pure font-medium">caos informacional</span>{' '}
              <span className="text-gray-500 font-light">em</span>{' '}
              <span className="text-black-pure font-semibold">clareza</span>{' '}
              <span className="text-gray-500 font-light">e</span>{' '}
              <span className="text-black-pure font-semibold">ação</span>
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Filtro Inteligente", description: "Separa o que importa do que só parece importante", icon: Target },
              { title: "Conexão de Ideias", description: "Liga os pontos entre tudo que você já aprendeu", icon: Link2 },
              { title: "Ação Imediata", description: "Transforma insight em decisão em segundos", icon: Zap },
              { title: "Memória Externa", description: "Sua IA lembra o que você esqueceu que sabia", icon: Brain },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="p-6 sm:p-8 bg-white-pure rounded-2xl sm:rounded-3xl border border-gray-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black-pure rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white-pure" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black-pure mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <DiamondLogo className="w-4 h-4" color="#6B7280" />
              O MÉTODO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black-pure">
              <span className="font-light text-gray-600">Os</span> <span className="font-black">4Cs</span> <span className="font-light text-gray-600">da Mente</span> <span className="font-bold">Lendária</span>
            </h2>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { letter: "C", title: "Consumir", subtitle: "com intenção", description: "Aprenda a filtrar antes de absorver. Menos é mais quando o mais é estratégico." },
              { letter: "C", title: "Capturar", subtitle: "com sistema", description: "Pare de perder ideias. Cada insight vai para o lugar certo automaticamente." },
              { letter: "C", title: "Conectar", subtitle: "com contexto", description: "Suas notas conversam entre si. A IA encontra padrões que você não viu." },
              { letter: "C", title: "Criar", subtitle: "com velocidade", description: "De 100 fontes para 1 output em minutos. Seu conhecimento trabalha para você." },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 p-5 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black-pure text-white-pure rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0 transition-all duration-300 group-hover:bg-[#FFCC00] group-hover:text-black-pure">
                  {item.letter}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black-pure">
                    {item.title} <span className="font-normal text-gray-500">{item.subtitle}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black-pure text-white-pure">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold opacity-50 mb-4">
              <InfinityLogo className="w-5 h-auto" color="#FFFFFF" />
              A TRANSFORMAÇÃO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl">
              <span className="font-light opacity-70">De</span> <span className="font-normal">colecionador</span>{' '}
              <span className="font-light opacity-70">para</span> <span className="font-black text-[#FFCC00]">criador</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white-pure/20">
              <h3 className="text-sm font-semibold opacity-50 mb-3 sm:mb-4">ANTES</h3>
              <ul className="space-y-3 opacity-70">
                <li>• Ansiedade por não dar conta</li>
                <li>• 500 notas espalhadas</li>
                <li>• Horas para escrever um e-mail</li>
                <li>• "Sei que vi isso em algum lugar"</li>
                <li>• Paralisia nas decisões</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white-pure/10">
              <h3 className="text-sm font-semibold opacity-50 mb-3 sm:mb-4">DEPOIS</h3>
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
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-4">
              <DiamondLogo className="w-4 h-4" color="#6B7280" />
              ACESSO GRATUITO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black-pure mb-3 sm:mb-4">
              <span className="font-light text-gray-600">O que você vai</span> <span className="font-bold">aprender</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {[
              { module: "01", title: "Diagnóstico", desc: "Identifique onde seu conhecimento está vazando" },
              { module: "02", title: "Arquitetura", desc: "Monte seu Segundo Cérebro no Obsidian" },
              { module: "03", title: "Captura Inteligente", desc: "Sistema para nunca mais perder uma ideia" },
              { module: "04", title: "Smart Connections", desc: "IA que conecta suas notas automaticamente" },
              { module: "05", title: "Criação Acelerada", desc: "De 100 fontes para 1 output em minutos" },
              { module: "06", title: "Seu Jarvis", desc: "Configure sua IA pessoal integrada" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
                <span className="text-xs sm:text-sm font-bold text-gray-400">MÓDULO {item.module}</span>
                <h3 className="text-base sm:text-lg font-bold text-black-pure mt-1 sm:mt-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* O que está incluso */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-8 sm:mt-12 p-6 sm:p-8 bg-white-pure border border-gray-200 rounded-2xl sm:rounded-3xl">
            <h3 className="text-lg sm:text-xl font-bold text-black-pure mb-4 sm:mb-6 text-center">O que você recebe:</h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "6 aulas em vídeo direto ao ponto",
                "Vault Obsidian pré-configurado",
                "Plugin Smart Connections instalado",
                "12 templates de notas prontos",
                "Guia de prompts para IA",
                "Acesso vitalício ao conteúdo"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-black-pure flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white-pure" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bônus */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-4 sm:mt-6 p-5 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black-pure">+ Bônus: Os 12 Problemas de Feynman</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">Framework para manter 12 perguntas-chave sempre ativas na sua mente</p>
              </div>
              <span className="text-3xl sm:text-4xl font-bold text-[#FFCC00]">GRÁTIS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black-pure">Perguntas frequentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Quanto tempo leva para implementar?", a: "O curso tem ~2h de conteúdo. Você pode ter seu sistema funcionando no mesmo dia. A maioria implementa em um final de semana." },
              { q: "Preciso saber programar ou ser técnico?", a: "Não. O Obsidian é gratuito e simples. Entregamos o vault pronto — você só precisa usar." },
              { q: "Funciona para qualquer área?", a: "Sim. O sistema é agnóstico. Funciona para devs, marketeiros, escritores, pesquisadores, empreendedores..." },
              { q: "Por que é gratuito?", a: "Porque queremos que você experimente o método antes de conhecer nossos programas avançados. Sem truques." },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                className="p-5 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
                <h3 className="font-bold text-black-pure mb-2">{item.q}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <CourseBadge className="mb-10 sm:mb-12" />

            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black-pure mb-4 sm:mb-6">
              <span className="font-light text-gray-500">Chega de</span> <span className="font-bold">acumular.</span><br />
              <span className="font-light text-gray-400">É hora de</span> <span className="font-black text-[#FFCC00]">criar.</span>
            </h2>

            <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-xl mx-auto">
              <span className="text-gray-500 font-light">Transforme seu</span>{' '}
              <span className="text-black-pure font-medium">excesso</span>{' '}
              <span className="text-gray-500 font-light">em</span>{' '}
              <span className="text-black-pure font-semibold">sistema.</span><br />
              <span className="text-gray-500 font-light">Sua</span>{' '}
              <span className="text-black-pure font-medium">paralisia</span>{' '}
              <span className="text-gray-500 font-light">em</span>{' '}
              <span className="text-black-pure font-semibold">produção.</span>
            </p>

            <EmailForm buttonText="Quero Minha Mente Lendária" />

            <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
              Acesso imediato • 100% gratuito • Sem cartão de crédito
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <DiamondLogo className="w-5 h-5 sm:w-6 sm:h-6" color="#000000" />
            <span className="text-sm sm:text-base text-gray-600">
              Academia Lendár<span className="font-bold text-black-pure">[IA]</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">© 2025 Academia Lendár[IA]. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
