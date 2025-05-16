import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, FileText, TrendingUp, Users, Shield, Calendar, Briefcase } from 'lucide-react';

export default function ServicoDetalhe() {
  // Este é um objeto de serviço de exemplo que você pode substituir com dados dinâmicos
  // ou importar de um arquivo de dados separado
  const servico = {
    // Informações básicas do serviço (a personalizar para cada serviço)
    icon: <FileText className="h-12 w-12 text-green-600" />,
    title: "Nome do Serviço",
    description: "Descrição completa do serviço que explica sua importância e principais características.",
    
    // Características principais
    features: [
      "Característica principal do serviço",
      "Outra característica importante",
      "Mais um diferencial relevante",
      "Outro aspecto importante",
      "Característica adicional do serviço"
    ],
    
    // Benefícios detalhados
    benefits: [
      {
        title: "Aumento de Eficiência",
        description: "Explicação de como este serviço ajuda a aumentar a eficiência operacional do negócio rural."
      },
      {
        title: "Redução de Custos",
        description: "Detalhes sobre como o serviço contribui para a diminuição de custos operacionais e financeiros."
      },
      {
        title: "Conformidade Legal",
        description: "Informações sobre como o serviço ajuda a manter o negócio em conformidade com as regulamentações."
      },
      {
        title: "Suporte Estratégico",
        description: "Explicação sobre o apoio estratégico oferecido para tomada de decisões mais eficazes."
      }
    ],
    
    // Etapas do processo
    process: [
      {
        step: "01",
        title: "Análise Inicial",
        description: "Avaliação detalhada da situação atual do cliente e levantamento de necessidades específicas."
      },
      {
        step: "02",
        title: "Elaboração de Estratégia",
        description: "Desenvolvimento de um plano de ação personalizado com base nas necessidades identificadas."
      },
      {
        step: "03",
        title: "Implementação",
        description: "Execução do plano de ação com acompanhamento constante e ajustes quando necessário."
      },
      {
        step: "04",
        title: "Monitoramento",
        description: "Acompanhamento contínuo dos resultados e otimização dos processos implementados."
      }
    ],
    
    // Perguntas frequentes sobre o serviço
    faqs: [
      {
        question: "Quanto tempo leva para implementar este serviço?",
        answer: "O tempo de implementação varia conforme a complexidade da operação, mas geralmente conseguimos estabelecer as bases em 2-4 semanas, com melhorias contínuas ao longo do tempo."
      },
      {
        question: "Este serviço é adequado para pequenos produtores?",
        answer: "Sim, adaptamos nossa abordagem e ferramentas para atender desde pequenos produtores até grandes empresas do agronegócio, sempre considerando as particularidades de cada operação."
      },
      {
        question: "Como este serviço se integra com os demais serviços oferecidos pela B2agro?",
        answer: "Todos os nossos serviços são projetados para funcionar de forma integrada, compartilhando informações e processos para maximizar os resultados para nossos clientes."
      },
      {
        question: "Quais são os resultados típicos que posso esperar?",
        answer: "Os resultados variam de acordo com a situação inicial, mas nossos clientes costumam relatar melhorias significativas em eficiência operacional, redução de custos e maior controle sobre suas operações."
      }
    ],
    
    // Serviços relacionados (para cross-selling)
    relatedServices: [
      {
        icon: <TrendingUp className="h-8 w-8 text-blue-950" />,
        title: "Serviço Relacionado 1",
        description: "Breve descrição de um serviço complementar que pode interessar ao cliente."
      },
      {
        icon: <Users className="h-8 w-8 text-green-600" />,
        title: "Serviço Relacionado 2",
        description: "Breve descrição de outro serviço complementar que pode ser relevante."
      },
      {
        icon: <Shield className="h-8 w-8 text-blue-950" />,
        title: "Serviço Relacionado 3",
        description: "Breve descrição de mais um serviço que se integra bem com o serviço atual."
      }
    ]
  };

  // Mapeamento de ícones por título para facilitar a personalização
  const iconMap = {
    "Contabilidade Rural": <FileText className="h-12 w-12 text-green-600" />,
    "Consultoria Tributária": <TrendingUp className="h-12 w-12 text-blue-950" />,
    "Planejamento Sucessório": <Users className="h-12 w-12 text-green-600" />,
    "Regularização Fundiária": <Shield className="h-12 w-12 text-blue-950" />,
    "Declarações Obrigatórias": <Calendar className="h-12 w-12 text-green-600" />,
    "Gestão Financeira": <Briefcase className="h-12 w-12 text-blue-950" />
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{servico.title}</h1>
              <p className="text-xl mb-6">{servico.description}</p>
              <a href="/contato" className="bg-white text-blue-950 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg inline-block transition duration-300">
                Solicitar proposta
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <div className="bg-white p-6 rounded-full">
                {servico.icon}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Características principais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">O que oferecemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Soluções completas e personalizadas para atender às necessidades específicas do seu negócio rural.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servico.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <p className="text-gray-800 text-lg">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Benefícios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Vantagens concretas que nosso serviço proporciona para o seu negócio rural.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servico.benefits.map((benefit, index) => (
              <div key={index} className="flex">
                <div className="bg-green-600 text-white rounded-lg p-4 flex-shrink-0 flex items-center justify-center mr-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Processo de trabalho */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Como funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Um processo estruturado para entregar resultados eficientes e consistentes para o seu negócio.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servico.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 h-full">
                  <div className="bg-gradient-to-r from-green-600 to-blue-950 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{step.title}</h3>
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
      
      {/* Depoimentos/Casos de Sucesso (placeholder) */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="max-w-2xl mx-auto opacity-80">Veja como nossos serviços têm ajudado produtores rurais a transformar seus negócios.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-blue-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Nome do Cliente</h4>
                    <p className="text-sm opacity-75">Segmento de atuação</p>
                  </div>
                </div>
                <p className="italic">"Depoimento do cliente sobre os resultados obtidos com o serviço e como isso impactou positivamente seu negócio rural."</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Respostas para as dúvidas mais comuns sobre este serviço.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {servico.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-6 last:border-b-0">
                <h3 className="text-lg font-bold text-blue-950 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Serviços relacionados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Serviços Relacionados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Conheça outros serviços que podem complementar sua estratégia no agronegócio.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servico.relatedServices.map((relatedService, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="bg-gray-50 p-4 rounded-full inline-block mb-4">
                  {relatedService.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{relatedService.title}</h3>
                <p className="text-gray-700 mb-4">{relatedService.description}</p>
                <a href="#" className="text-blue-950 font-bold hover:text-green-600 flex items-center transition duration-300">
                  Saiba mais <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para otimizar seu negócio rural?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua operação a alcançar melhores resultados.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contato" className="bg-white text-green-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Falar com um especialista
            </a>
            <a href="/contato" className="border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Solicitar proposta
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}