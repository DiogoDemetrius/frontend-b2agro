import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, TrendingUp, Users, Shield, Calendar, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

export default function Servicos() {
  const servicos = [
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: "Contabilidade Rural",
      description:
        "Serviços contábeis especializados para produtores rurais, adaptados às particularidades do setor agrícola.",
      features: [
        "Escrituração contábil completa",
        "Demonstrativos financeiros adaptados ao agronegócio",
        "Análise de custos de produção",
        "Controle patrimonial rural",
        "Conciliações bancárias e financeiras",
      ],
      link: "/servicos/contabilidade-rural",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-950" />,
      title: "Consultoria Tributária",
      description:
        "Estratégias fiscais especializadas para minimizar a carga tributária da sua atividade rural.",
      features: [
        "Planejamento tributário para o agronegócio",
        "Recuperação de créditos tributários",
        "Análise comparativa entre regimes tributários",
        "Acompanhamento de fiscalizações",
        "Orientação para manutenção da regularidade fiscal",
      ],
      link: "/servicos/consultoria-tributaria",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Planejamento Sucessório",
      description:
        "Preparação da transferência patrimonial com segurança jurídica e tributária para as próximas gerações.",
      features: [
        "Análise patrimonial completa",
        "Estruturação societária",
        "Avaliação de alternativas de sucessão",
        "Planejamento da transição de gestão",
        "Minimização de impactos tributários",
      ],
      link: "/servicos/planejamento-sucessorio",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-950" />,
      title: "Regularização Fundiária",
      description:
        "Suporte para adequação legal e ambiental de propriedades rurais conforme a legislação vigente.",
      features: [
        "Regularização documental da propriedade",
        "Adequação ao Cadastro Ambiental Rural (CAR)",
        "Assessoria para licenciamento ambiental",
        "Organização de documentação para financiamentos",
        "Averbação de reserva legal",
      ],
      link: "/servicos/regularizacao-fundiaria",
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Declarações Obrigatórias",
      description:
        "Elaboração e entrega das obrigações fiscais, acessórias e declarações específicas do setor rural.",
      features: [
        "Declaração de ITR",
        "CAFIR e CCIR",
        "DIRPF para produtores rurais",
        "DCTF e outras obrigações acessórias",
        "Declarações ambientais obrigatórias",
      ],
      link: "/servicos/declaracoes-obrigatorias",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-950" />,
      title: "Gestão Financeira",
      description:
        "Acompanhamento financeiro completo para otimizar os resultados de sua atividade rural.",
      features: [
        "Análise de viabilidade de projetos",
        "Assessoria para captação de recursos",
        "Fluxo de caixa especializado para safras",
        "Indicadores financeiros para o agronegócio",
        "Suporte à tomada de decisões estratégicas",
      ],
      link: "/servicos/gestao-financeira",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Soluções completas em contabilidade e consultoria financeira para
            impulsionar seu negócio rural.
          </p>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Soluções Completas para o Agronegócio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos um conjunto abrangente de serviços especializados para
              atender às necessidades específicas de produtores rurais e
              empresas do agronegócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="bg-white p-4 rounded-full inline-block mb-4">
                    {servico.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">
                    {servico.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{servico.description}</p>

                  <ul className="space-y-2 mb-6">
                    {servico.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle
                          size={18}
                          className="text-green-600 mr-2 flex-shrink-0 mt-1"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/*<a
                    href={servico.link}
                    className="text-blue-950 font-bold hover:text-green-600 flex items-center transition duration-300"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-5 w-5" />
                  </a>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado para entregar resultados consistentes,
              sempre considerando as particularidades do seu negócio rural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description:
                  "Análise detalhada da situação atual, levantamento de documentação e identificação de oportunidades.",
              },
              {
                step: "02",
                title: "Planejamento",
                description:
                  "Elaboração de estratégias personalizadas e definição de um plano de ação específico para sua operação.",
              },
              {
                step: "03",
                title: "Implementação",
                description:
                  "Execução das soluções contábeis e financeiras com acompanhamento constante de especialistas.",
              },
              {
                step: "04",
                title: "Monitoramento",
                description:
                  "Avaliação contínua dos resultados, ajustes estratégicos e relatórios periódicos de desempenho.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
                  <div className="bg-gradient-to-r from-green-600 to-blue-950 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos atendidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Segmentos que Atendemos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa expertise abrange todas as áreas do agronegócio, oferecendo
              soluções adaptadas para cada segmento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Agricultura",
              "Pecuária",
              "Avicultura",
              "Suinocultura",
              "Fruticultura",
              "Silvicultura",
              "Piscicultura",
              "Horticultura",
              "Agroindústria",
              "Cooperativas",
              "Empresas de Insumos",
              "Armazenamento",
            ].map((segmento, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:border-green-600 hover:shadow-md transition duration-300"
              >
                <p className="font-bold text-blue-950">{segmento}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Por que escolher a B2agro?
            </h2>
            <p className="max-w-2xl mx-auto opacity-80">
              Combinamos experiência, conhecimento técnico e tecnologia para
              oferecer o melhor serviço para o seu negócio rural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise Especializada",
                description:
                  "Equipe dedicada exclusivamente ao agronegócio, com conhecimento profundo das particularidades do setor.",
              },
              {
                title: "Tecnologia Avançada",
                description:
                  "Sistemas integrados e plataformas digitais que oferecem acesso em tempo real às suas informações contábeis e financeiras.",
              },
              {
                title: "Atendimento Personalizado",
                description:
                  "Acompanhamento próximo e comunicação constante, com profissionais dedicados ao seu negócio.",
              },
            ].map((diferencial, index) => (
              <div key={index} className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{diferencial.title}</h3>
                <p className="text-blue-100">{diferencial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respostas para as perguntas mais comuns sobre nossos serviços.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question:
                  "Quais os benefícios da contabilidade especializada para produtores rurais?",
                answer:
                  "A contabilidade especializada para o agronegócio permite um controle mais preciso dos custos de produção, otimização tributária específica para o setor rural, adequação às normas específicas da atividade agrícola e suporte para decisões estratégicas considerando as particularidades do negócio rural.",
              },
              {
                question: "Como faço para iniciar uma parceria com a B2agro?",
                answer:
                  "O processo é simples e inicia com uma consulta gratuita onde avaliamos suas necessidades. Entre em contato conosco por telefone, e-mail ou pelo formulário no site para agendar uma reunião com nossos especialistas.",
              },
              {
                question: "A B2agro atende em todo o Brasil?",
                answer:
                  "Sim, graças à nossa estrutura tecnológica, atendemos clientes em todo o território nacional, com suporte remoto eficiente e visitas técnicas programadas quando necessário.",
              },
              {
                question:
                  "Qual a importância do planejamento tributário para produtores rurais?",
                answer:
                  "O planejamento tributário adequado pode reduzir significativamente a carga fiscal do produtor rural, considerando as particularidades da legislação agrícola, benefícios específicos do setor e estratégias legais para minimização de impostos.",
              },
              {
                question: "Vocês oferecem suporte para acesso a crédito rural?",
                answer:
                  "Sim, auxiliamos na preparação da documentação necessária, demonstrativos financeiros adequados, análise de capacidade de pagamento e orientação sobre as melhores linhas de crédito disponíveis para sua atividade específica.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-6 last:border-b-0"
              >
                <h3 className="text-lg font-bold text-blue-950 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para otimizar seu negócio rural?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Agende uma consulta gratuita com nossos especialistas e descubra
            como podemos ajudar sua fazenda a prosperar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contato"
              className="bg-white text-green-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Falar com um especialista
            </a>
            {/*<a href="/contato" className="border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Solicitar proposta
            </a>*/}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}