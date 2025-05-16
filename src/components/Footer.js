import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img src={logo} alt="B2agro Logo" className="h-10 w-10 rg-20" />
              <span className="text-2xl font-bold lg-20">B2<span className="text-green-400">agro</span></span>
            </div>
            <p className="mb-6 text-blue-100">
              Há mais de 10 anos transformando a contabilidade rural em uma ferramenta estratégica para o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-950 border-blue-900 hover:bg-green-600 p-2 rounded-full transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/b2agro_/" className="bg-blue-800 hover:bg-green-600 p-2 rounded-full transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/b2agro/" className="bg-blue-800 hover:bg-green-600 p-2 rounded-full transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              {/*<a href="#" className="bg-blue-800 hover:bg-green-600 p-2 rounded-full transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>*/}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-green-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/sobre" className="text-blue-200 hover:text-green-400 transition duration-300">Sobre Nós</a></li>
              <li><a href="/servicos" className="text-blue-200 hover:text-green-400 transition duration-300">Nossos Serviços</a></li>
              <li><a href="/blog" className="text-blue-200 hover:text-green-400 transition duration-300">Blog</a></li>
              <li><a href="/cases" className="text-blue-200 hover:text-green-400 transition duration-300">Casos de Sucesso</a></li>
              <li><a href="/contato" className="text-blue-200 hover:text-green-400 transition duration-300">Fale Conosco</a></li>
              <li><a href="/trabalhe" className="text-blue-200 hover:text-green-400 transition duration-300">Trabalhe Conosco</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Serviços
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-green-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="/servicos/contabilidade-rural" className="text-blue-200 hover:text-green-400 transition duration-300">Contabilidade Rural</a></li>
              <li><a href="/servicos/planejamento-tributario" className="text-blue-200 hover:text-green-400 transition duration-300">Planejamento Tributário</a></li>
              <li><a href="/servicos/gestao-financeira" className="text-blue-200 hover:text-green-400 transition duration-300">Gestão Financeira</a></li>
              <li><a href="/servicos/consultoria-agro" className="text-blue-200 hover:text-green-400 transition duration-300">Consultoria Especializada</a></li>
              <li><a href="/servicos/sucessao-familiar" className="text-blue-200 hover:text-green-400 transition duration-300">Sucessão Familiar</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Contato
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-green-600 -mb-2"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-blue-200">SHIN CA 6, conj. 2 lote 3<br/>Brasília - DF, 71503-506</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-blue-200">(61) 8161-4932</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-blue-200">contatob2agro@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <p className="text-blue-200">Seg - Sex: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="border-t border-blue-800 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Pronto para otimizar a gestão da sua fazenda?</h3>
              <p className="text-blue-200">Solicite uma avaliação personalizada gratuitamente.</p>
            </div>
            <a 
              href="/contato" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Solicitar avaliação
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-blue-950">
        <div className="container mx-auto px-4 py-6">
          <div className="md:flex items-center justify-between">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} B2agro. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              <a href="/politica-privacidade" className="hover:text-green-400 transition duration-300">Política de Privacidade</a>
              <a href="/termos-uso" className="hover:text-green-400 transition duration-300">Termos de Uso</a>
              <a href="/cookies" className="hover:text-green-400 transition duration-300">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}