import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Check, FileText, Lock, Eye, Server, BookOpen, MessageSquare } from 'lucide-react';

export default function PoliticaPrivacidade() {
  const lastUpdated = "10 de maio de 2025";
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Proteção e transparência com seus dados são prioridades na B2agro
          </p>
          <p className="text-sm mt-4">
            Última atualização: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg mb-10">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-blue-950 mb-3">Nosso Compromisso com sua Privacidade</h2>
                  <p className="text-gray-700">
                    A B2agro tem o compromisso de proteger a privacidade e os dados pessoais de nossos clientes, parceiros e visitantes. Esta política descreve como coletamos, usamos, compartilhamos e protegemos suas informações ao utilizar nosso site e serviços. Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-10">
              {/* Dados Coletados */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-green-600 mr-2" />
                  Dados que Coletamos
                </h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Podemos coletar os seguintes tipos de informações ao utilizar nosso site ou contratar nossos serviços:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Dados de identificação:</strong> Nome completo, CPF, RG, e-mail, telefone, endereço.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Dados da propriedade rural:</strong> Localização, tamanho, atividades desenvolvidas e outras informações relevantes para a prestação dos serviços.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Dados financeiros e contábeis:</strong> Faturamento, despesas, impostos, documentos fiscais e outras informações necessárias para serviços contábeis.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Dados de navegação:</strong> Cookies, endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Comunicações:</strong> Conteúdo de mensagens trocadas por e-mail, WhatsApp, formulários de contato ou outros canais.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Finalidade do Uso */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-green-600 mr-2" />
                  Como Utilizamos seus Dados
                </h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    As informações coletadas são utilizadas para as seguintes finalidades:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Prestação de serviços:</strong> Executar os serviços contratados de contabilidade rural, consultoria tributária e demais soluções oferecidas pela B2agro.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Comunicação:</strong> Responder a solicitações, enviar atualizações sobre serviços e fornecer suporte ao cliente.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Marketing:</strong> Enviar informações sobre novos serviços, eventos e conteúdos relevantes para o agronegócio, sempre com opção de descadastramento.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Melhoria contínua:</strong> Analisar o uso do site para aprimorar a experiência do usuário e desenvolver novos serviços.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Obrigações legais:</strong> Cumprir exigências fiscais, contábeis e outras obrigações legais aplicáveis.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compartilhamento */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
                  <Server className="h-6 w-6 text-green-600 mr-2" />
                  Compartilhamento de Dados
                </h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    A B2agro poderá compartilhar seus dados pessoais nas seguintes situações:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Parceiros e fornecedores:</strong> Compartilhamos dados com empresas parceiras e fornecedores que nos auxiliam na prestação dos serviços, como softwares de contabilidade, instituições financeiras e consultores especializados.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Órgãos governamentais:</strong> Podemos compartilhar dados para cumprir obrigações legais junto a órgãos como Receita Federal, secretarias de fazenda estaduais e municipais, e outros órgãos reguladores.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Requisição judicial:</strong> Em caso de ordem judicial, podemos ser obrigados a fornecer dados pessoais a autoridades competentes.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Todos os nossos parceiros e fornecedores estão sujeitos a rigorosos contratos que garantem a confidencialidade e a segurança de seus dados pessoais.
                  </p>
                </div>
              </div>

              {/* Segurança */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-green-600 mr-2" />
                  Segurança dos Dados
                </h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    A B2agro implementa medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição. Entre as medidas adotadas, destacamos:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Criptografia:</strong> Utilizamos protocolos seguros (SSL/TLS) para transmissão de dados.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Controle de acesso:</strong> Restringimos o acesso a dados pessoais apenas a funcionários autorizados.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Backups regulares:</strong> Realizamos cópias de segurança para preservar a integridade dos dados.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Avaliações de segurança:</strong> Conduzimos auditorias periódicas para identificar e corrigir vulnerabilidades.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Política de mesa limpa:</strong> Garantimos que documentos físicos com dados sensíveis sejam armazenados adequadamente.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Direitos do Titular */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                  Seus Direitos como Titular dos Dados
                </h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos em relação aos seus dados pessoais:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Acesso:</strong> Solicitar acesso aos seus dados pessoais que tratamos.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Eliminação:</strong> Solicitar a exclusão de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Portabilidade:</strong> Solicitar a transferência de seus dados a outro fornecedor de serviço.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Revogação do consentimento:</strong> Revogar seu consentimento para tratamento de dados a qualquer momento.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Para exercer esses direitos, entre em contato conosco pelos canais indicados no final desta política.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4">Cookies e Tecnologias Semelhantes</h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Nosso site utiliza cookies e tecnologias semelhantes para melhorar a experiência do usuário, analisar o tráfego e personalizar conteúdos. Os cookies que utilizamos podem ser:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Cookies necessários:</strong> Essenciais para o funcionamento básico do site.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Cookies de preferências:</strong> Permitem que o site lembre suas escolhas e preferências.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Cookies estatísticos:</strong> Ajudam-nos a entender como os visitantes interagem com o site.</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Cookies de marketing:</strong> Utilizados para rastrear visitantes em websites com o objetivo de exibir anúncios relevantes.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Você pode configurar seu navegador para recusar alguns ou todos os cookies, ou para alertá-lo quando websites definem ou acessam cookies. Se você desabilitar ou recusar cookies, alguns recursos do site podem ficar indisponíveis ou não funcionar corretamente.
                  </p>
                </div>
              </div>

              {/* Prazo de Retenção */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4">Prazo de Retenção dos Dados</h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700">
                    Manteremos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo obrigações legais, contábeis e fiscais. Para dados utilizados para fins contábeis e fiscais, o prazo mínimo de retenção é de 5 anos, conforme legislação brasileira. Após esse período, os dados serão excluídos ou anonimizados, a menos que exista uma base legal para sua manutenção.
                  </p>
                </div>
              </div>

              {/* Alterações na Política */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4">Alterações nesta Política</h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700">
                    Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas de privacidade. Recomendamos que você revise esta página regularmente para se manter informado sobre as atualizações. As alterações entram em vigor a partir da data de publicação. Em caso de alterações significativas, enviaremos uma notificação por e-mail ou publicaremos um aviso em nosso site.
                  </p>
                </div>
              </div>

              {/* Contato */}
              <div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4 flex items-center">
                  <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
                  Contato
                </h2>
                <div className="bg-white p-5 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Para exercer seus direitos como titular dos dados ou esclarecer dúvidas sobre esta política de privacidade, entre em contato com nosso Encarregado de Proteção de Dados:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>E-mail:</strong> privacidade@b2agro.com.br</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Telefone:</strong> (61) 98161-4932</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Endereço:</strong> SHIN CA 6 Conjunto 2 Lote 3, Brasília - DF, 71503-502</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Responderemos a todas as solicitações dentro do prazo legal de 15 dias.
                  </p>
                </div>
              </div>
            </div>

            {/* Acceptance */}
            <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h2 className="text-xl font-bold text-blue-950 mb-3">Aceitação dos Termos</h2>
              <p className="text-gray-700">
                Ao utilizar nosso site e serviços, você concorda com esta Política de Privacidade. Se você não concordar com os termos desta política, por favor, não utilize nosso site ou serviços. Continuamos comprometidos em manter a transparência e proteger seus dados pessoais conforme as melhores práticas e legislações aplicáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Ainda tem dúvidas sobre como tratamos seus dados?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Nossa equipe está pronta para esclarecer qualquer questão relacionada à proteção de seus dados pessoais.
          </p>
          <a
            href="/contato"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Entre em contato
          </a>
        </div>
      </section>*/}

      <Footer />
    </div>
  );
}