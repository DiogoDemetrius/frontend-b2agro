import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, FileText, TrendingUp, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contabilidade especializada para o agronegócio</h1>
              <p className="text-xl mb-8">Transformamos números em estratégias para impulsionar sua fazenda com soluções contábeis personalizadas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-950 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                  <a href="/contato">Fale com um especialista</a> <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-950 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                  <a href="/servicos">Conheça nossos serviços</a>
                </button>
              </div>
            </div>
            {/*<div className="md:w-1/2">
              <img src="/api/placeholder/600/400" alt="Gestão contábil agropecuária" className="rounded-lg shadow-xl" />
            </div>*/}
          </div>
        </div>
      </section>
      
      {/* Credibilidade */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Por que escolher a B2agro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Somos especialistas em contabilidade para o agronegócio, focados em resultados que fazem sua propriedade prosperar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-600">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expertise Rural</h3>
              <p className="text-gray-600">Mais de 10 anos de experiência exclusiva em contabilidade rural e domínio da legislação do agronegócio.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-950">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-900 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Tecnologia Avançada</h3>
              <p className="text-gray-600">Sistemas integrados que proporcionam visão clara dos seus resultados financeiros e tributários em tempo real.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-600">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageCircle className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Atendimento Personalizado</h3>
              <p className="text-gray-600">Consultores dedicados que entendem as particularidades da sua operação e oferecem soluções sob medida.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Serviços */}
      {/*<section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Soluções completas para maximizar seus resultados e minimizar sua carga tributária.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultoria Tributária Rural",
                description: "Estratégias fiscais específicas para produtores rurais, otimizando a tributação de acordo com as particularidades do seu negócio."
              },
              {
                title: "Gestão Contábil Agropecuária",
                description: "Controle financeiro completo com demonstrativos claros e orientação para tomada de decisões estratégicas."
              },
              {
                title: "Planejamento Sucessório",
                description: "Preparação da transferência patrimonial e empresarial para as próximas gerações com segurança jurídica e tributária."
              },
              {
                title: "Declaração de ITR e CAFIR",
                description: "Elaboração e assessoria completa para declarações obrigatórias junto à Receita Federal."
              },
              {
                title: "Análise de Viabilidade",
                description: "Estudos aprofundados para determinar a rentabilidade de novos projetos e investimentos em sua propriedade."
              },
              {
                title: "Regularização Fundiária",
                description: "Suporte completo para legalização de propriedades rurais e adequação às normas ambientais vigentes."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="/servicos" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
      
      {/* Depoimentos */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="max-w-2xl mx-auto opacity-80">A confiança de produtores rurais de todos os tamanhos em todo o Brasil.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                role: "Produtor de Soja - DF",
                testimonial: "A B2agro transformou nossa gestão financeira. Conseguimos reduzir nossa carga tributária em 23% no primeiro ano e ter uma visão muito mais clara dos nossos custos de produção."
              },
              {
                name: "Ana Oliveira",
                role: "Pecuarista - GO",
                testimonial: "O conhecimento técnico e a dedicação da equipe são impressionantes. Encontraram soluções que nenhum outro contador havia proposto antes para nossa fazenda."
              },
              {
                name: "Carlos Mendes",
                role: "Produtor de Café - MG",
                testimonial: "Profissionalismo e agilidade são marcas da B2agro. As análises mensais nos permitem tomar decisões rápidas e precisas para melhorar nossos resultados."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-blue-950 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-100">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-blue-100">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Números */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Clientes atendidos" },
              { number: "10+", label: "Anos de experiência" },
              { number: "32%", label: "Média de economia tributária" },
              { number: "98%", label: "Taxa de retenção de clientes" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl font-bold text-green-600 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar a gestão da sua fazenda?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">Agende uma análise gratuita das suas finanças e descubra oportunidades de economia e crescimento.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              <a href="/contato">Agendar consulta gratuita</a>
            </button>
            {/*<button className="border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Solicitar proposta
            </button>*/}
          </div>
        </div>
      </section>
      
      {/* Blog preview */}
      {/*<section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Blog B2agro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Conteúdos exclusivos sobre gestão rural, tributação e contabilidade para o agronegócio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fundos de investimento para o agronegócio: como funcionam?",
                date: "15/04/2025",
                image: "/api/placeholder/400/240",
                excerpt: "Conheça as opções de captação de recursos para expandir sua produção com vantagens fiscais."
              },
              {
                title: "ITR 2025: Mudanças importantes para produtores rurais",
                date: "02/05/2025",
                image: "/api/placeholder/400/240",
                excerpt: "Fique por dentro das novas regras para declaração do Imposto Territorial Rural neste ano."
              },
              {
                title: "Agricultura 4.0: Impactos contábeis e tributários",
                date: "28/04/2025",
                image: "/api/placeholder/400/240",
                excerpt: "Como a tecnologia no campo está mudando a gestão financeira das propriedades rurais."
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-green-600 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-900 font-semibold hover:text-green-600 flex items-center">
                    Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-950 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Ver todos os artigos
            </a>
          </div>
        </div>
      </section>|*
      
      {/* Newsletter */}
      {/*<section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-blue-900 rounded-lg p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Assine nossa newsletter</h3>
                <p className="text-white opacity-90">Receba dicas exclusivas sobre gestão contábil rural e novidades do setor.</p>
              </div>
              <div className="md:w-1/3">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="flex-1 p-3 rounded-l-lg focus:outline-none"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-r-lg transition duration-300">
                    Assinar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      
      <Footer />
    </div>
  );
}