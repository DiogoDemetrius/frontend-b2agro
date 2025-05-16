import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Building, History, Target, ChevronRight } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conheça a B2agro
          </h1>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Especialistas em contabilidade e consultoria financeira para o
            agronegócio.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-blue-950 mb-4 text-center">
                Nossa História
              </h2>
              <p className="text-gray-700 mb-4 text-center">
                Fundada em 2010 por contadores com vasta experiência no setor
                agrícola, a B2agro nasceu com a missão de oferecer soluções
                contábeis e financeiras especializadas para produtores rurais e
                empresas do agronegócio.
              </p>
              <p className="text-gray-700 mb-4 text-center">
                Ao longo de mais de 15 anos, nos consolidamos como referência no
                mercado, combinando expertise contábil com profundo conhecimento
                das particularidades do setor rural brasileiro.
              </p>
              <p className="text-gray-700 mb-4 text-center">
                Nossa trajetória é marcada pela constante evolução e inovação,
                sempre acompanhando as mudanças legislativas e tecnológicas para
                oferecer o melhor serviço aos nossos clientes.
              </p>

              <div className="grid grid-cols-2 gap-4 justify-items-center mt-20">
                <div className="flex items-start text-left">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <History className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Fundação</h4>
                    <p className="text-sm text-gray-600">2016</p>
                  </div>
                </div>
                <div className="flex items-start text-left">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Equipe</h4>
                    <p className="text-sm text-gray-600">+50 especialistas</p>
                  </div>
                </div>
                <div className="flex items-start text-left">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Building className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Escritórios</h4>
                    <p className="text-sm text-gray-600">1 unidade</p>
                  </div>
                </div>
                <div className="flex items-start text-left">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Target className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950">Atendimento</h4>
                    <p className="text-sm text-gray-600">Todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que norteiam nossa atuação e definem quem somos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-600">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Missão</h3>
              <p className="text-gray-700">
                Transformar a contabilidade em uma ferramenta estratégica para o
                crescimento e a prosperidade dos produtores rurais e empresas do
                agronegócio, oferecendo soluções personalizadas e inovadoras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-950">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a principal referência em contabilidade e
                consultoria financeira para o agronegócio no Brasil,
                estabelecendo um novo padrão de excelência e inovação no setor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-600">
              <h3 className="text-xl font-bold text-blue-950 mb-4">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                  <span>Excelência técnica</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                  <span>Integridade e transparência</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                  <span>Inovação constante</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                  <span>Foco no cliente</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                  <span>Sustentabilidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os especialistas que transformam números em estratégias
              para o seu negócio rural.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Bruno Vinícius",
                role: "Fundador e CEO",
                image: "/api/placeholder/300/300",
                bio: "Contador com 20 anos de experiência no agronegócio e especialista em tributação rural.",
              },
              {
                name: "Gabriela",
                role: "Diretora de Operações",
                image: "/api/placeholder/300/300",
                bio: "Especialista em gestão de propriedades rurais e processos contábeis agrícolas.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-[280px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nossa equipe é composta por profissionais altamente qualificados,
              incluindo contadores, economistas, advogados e especialistas em
              agronegócio, prontos para atender suas necessidades específicas.
            </p>
            <a
              href="/contato"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Entre em contato com nossos especialistas
            </a>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Certificações e Reconhecimentos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nosso compromisso com a excelência é reconhecido pelas principais
              instituições do setor.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
              >
                <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="text-lg font-bold text-blue-950 text-center">
                  Certificação {index + 1}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Reconhecimento de excelência em serviços contábeis para o
                  agronegócio
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar a gestão da sua fazenda?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Entre em contato hoje mesmo e descubra como podemos ajudar no
            crescimento do seu negócio.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-green-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Fale com nossos especialistas
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}