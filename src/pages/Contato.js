import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

export default function Contato() {
  
  const faqItems = [
    {
      question: "Como funciona o primeiro atendimento?",
      answer: "Após o contato inicial, agendamos uma reunião (presencial ou online) para entender suas necessidades. Nossa equipe realiza um diagnóstico preliminar e apresenta um plano personalizado para sua operação."
    },
    {
      question: "Vocês atendem a qualquer tamanho de propriedade rural?",
      answer: "Sim, trabalhamos com produtores de todos os portes, desde pequenas propriedades familiares até grandes fazendas e grupos empresariais do agronegócio."
    },
    {
      question: "É possível fazer atendimento remoto para propriedades em regiões distantes?",
      answer: "Sem dúvida. Utilizamos tecnologia avançada para prestar atendimento remoto completo, com a mesma qualidade do presencial. Realizamos visitas técnicas periódicas quando necessário."
    },
    {
      question: "Quanto custam os serviços da B2agro?",
      answer: "O investimento varia de acordo com a complexidade da operação e os serviços contratados. Oferecemos pacotes personalizados com excelente custo-benefício. Entre em contato para uma proposta específica."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas e apresentar as
            melhores soluções para o seu negócio rural.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-6">
                  Envie sua mensagem
                </h2>
                <p className="text-gray-700 mb-8">
                  Complete o formulário abaixo e nossa equipe entrará em contato
                  em até 24 horas úteis.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-1"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-1"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="contabilidade">Contabilidade Rural</option>
                      <option value="tributacao">Consultoria Tributária</option>
                      <option value="sucessao">Planejamento Sucessório</option>
                      <option value="regularizacao">
                        Regularização Fundiária
                      </option>
                      <option value="declaracoes">
                        Declarações Obrigatórias
                      </option>
                      <option value="financeira">Gestão Financeira</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" id="privacy" className="mt-1 mr-2" />
                    <label htmlFor="privacy" className="text-gray-700 text-sm">
                      Concordo com a{" "}
                      <a href="#" className="text-green-600 hover:underline">
                        Política de Privacidade
                      </a>{" "}
                      e autorizo o contato por e-mail e telefone.
                    </label>
                  </div>

                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                    Enviar mensagem <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>

              <div>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center">
                      <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                      Atendimento
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Nossa equipe de atendimento está disponível para
                      esclarecer dúvidas e fornecer informações sobre nossos
                      serviços.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex">
                        <Phone className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">(61) 98161-4932</span>
                      </li>
                      <li className="flex">
                        <Mail className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          contatob2agro@gmail.com
                        </span>
                      </li>
                      <li className="flex">
                        <Clock className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Segunda a Sexta: 8h às 18h
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-950 mb-4 flex items-center">
                      <Calendar className="h-6 w-6 text-green-600 mr-2" />
                      Agende uma consulta
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Prefere conversar diretamente com um de nossos
                      especialistas? Agende uma consulta gratuita.
                    </p>
                    <a
                      href="https://wa.me/556181614932?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+especialista+em+contabilidade+para+fazendas+da+B2agro.+Vi+o+bot%C3%A3o+no+site+e+quero+iniciar+um+atendimento+gratuito."
                      className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
                    >
                      Agendar via Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respostas para dúvidas comuns sobre nosso atendimento.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-950 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Onde Estamos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Presença estratégica nas principais regiões agrícolas do Brasil.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.743482907982!2d-47.883141!3d-15.713730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b6b5b5b5b5b%3A0x123456789abcdef!2sSHIN%20CA%206%20Conjunto%202%20Lote%203%2C%20Bras%C3%ADlia%20-%20DF%2C%2071503-502!5e0!3m2!1sen!2sbr!4v1681234567890!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localizações B2agro"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar a contabilidade da sua fazenda?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Junte-se a mais de 1.500 produtores rurais que já contam com a
            expertise da B2agro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/*<button className="bg-white text-green-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Agendar consulta gratuita
            </button>*/}
            <button className="border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              <a href="https://wa.me/556181614932?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+especialista+em+contabilidade+para+fazendas+da+B2agro.+Vi+o+bot%C3%A3o+no+site+e+quero+iniciar+um+atendimento+gratuito.">
                Fale com um especilista via Whatsapp
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-blue-900 rounded-lg p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Assine nossa newsletter
                </h3>
                <p className="text-white opacity-90">
                  Receba dicas exclusivas sobre gestão contábil rural e
                  novidades do setor.
                </p>
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
      </section>

      <Footer />
    </div>
  );
}