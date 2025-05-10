import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, User, Tag, Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: "Agropecuária 4.0: Como a tecnologia está revolucionando o campo",
      excerpt: "Descubra como a digitalização e a implementação de novas tecnologias estão transformando a produtividade e a gestão rural.",
      image: "/api/placeholder/800/400",
      category: "Tecnologia",
      author: "Pedro Santos",
      date: "08/05/2025",
      tags: ["Tecnologia", "Inovação", "Agronegócio 4.0"]
    },
    {
      id: 2,
      title: "Mudanças na legislação do ITR: O que você precisa saber",
      excerpt: "As principais alterações na tributação rural e como elas afetam os produtores de diferentes portes.",
      image: "/api/placeholder/800/400",
      category: "Tributação",
      author: "Mariana Lima",
      date: "02/05/2025",
      tags: ["Tributação", "ITR", "Legislação"]
    }
  ];

  const posts = [
    {
      id: 3,
      title: "Planejamento sucessório: Como garantir a continuidade do seu negócio rural",
      excerpt: "Estratégias jurídicas e contábeis para preparar a transferência patrimonial e gerencial da sua propriedade rural.",
      image: "/api/placeholder/400/250",
      category: "Sucessão",
      author: "Carlos Oliveira",
      date: "29/04/2025",
      tags: ["Sucessão", "Planejamento", "Família"]
    },
    {
      id: 4,
      title: "Fundos de investimento para o agronegócio: Como funcionam?",
      excerpt: "Conheça as opções de captação de recursos para expandir sua produção com vantagens fiscais.",
      image: "/api/placeholder/400/250",
      category: "Investimentos",
      author: "Ana Rodrigues",
      date: "15/04/2025",
      tags: ["Investimentos", "Financiamento", "Expansão"]
    },
    {
      id: 5,
      title: "Como reduzir os custos de produção na sua fazenda",
      excerpt: "Técnicas contábeis e gerenciais para identificar e eliminar desperdícios e otimizar recursos.",
      image: "/api/placeholder/400/250",
      category: "Gestão",
      author: "Roberto Silva",
      date: "10/04/2025",
      tags: ["Custos", "Gestão", "Produtividade"]
    },
    {
      id: 6,
      title: "ITR 2025: Mudanças importantes para produtores rurais",
      excerpt: "Fique por dentro das novas regras para declaração do Imposto Territorial Rural neste ano.",
      image: "/api/placeholder/400/250",
      category: "Tributação",
      author: "Mariana Lima",
      date: "02/04/2025",
      tags: ["ITR", "Impostos", "Declarações"]
    },
    {
      id: 7,
      title: "Agricultura 4.0: Impactos contábeis e tributários",
      excerpt: "Como a tecnologia no campo está mudando a gestão financeira das propriedades rurais.",
      image: "/api/placeholder/400/250",
      category: "Tecnologia",
      author: "Pedro Santos",
      date: "28/03/2025",
      tags: ["Tecnologia", "Contabilidade", "Tributação"]
    },
    {
      id: 8,
      title: "Crédito rural: Melhores opções para cada tipo de produtor",
      excerpt: "Um guia completo sobre as linhas de financiamento disponíveis para diferentes perfis e necessidades.",
      image: "/api/placeholder/400/250",
      category: "Financiamento",
      author: "Julia Mendes",
      date: "20/03/2025",
      tags: ["Crédito", "Financiamento", "Bancos"]
    }
  ];

  const categories = [
    { name: "Tributação", count: 12 },
    { name: "Gestão", count: 9 },
    { name: "Tecnologia", count: 8 },
    { name: "Contabilidade", count: 15 },
    { name: "Sucessão", count: 6 },
    { name: "Investimentos", count: 7 },
    { name: "Legislação", count: 10 }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-950 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog B2agro</h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-center">Conteúdos exclusivos sobre contabilidade, gestão rural e tributação para o agronegócio.</p>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Pesquisar artigos..." 
              className="w-full py-3 px-6 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-950">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm ml-3">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm ml-3">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="text-green-600 font-semibold hover:text-blue-950 flex items-center transition duration-300">
                    Ler artigo completo <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">Últimos Artigos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm ml-3">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-blue-950 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <a href={`/blog/${post.id}`} className="text-green-600 font-semibold hover:text-blue-950 flex items-center transition duration-300">
                        Ler artigo <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">
                    <ChevronLeft size={16} />
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-950 text-white border border-blue-950">1</a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">2</a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">3</a>
                  <span className="flex items-center justify-center w-10 h-10">...</span>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">8</a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-blue-950 hover:text-white hover:border-blue-950 transition duration-300">
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold text-blue-950 mb-4">Categorias</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href={`/blog/categoria/${category.name.toLowerCase()}`} className="flex justify-between items-center py-2 text-gray-700 hover:text-green-600 transition duration-300">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-r from-green-600 to-blue-950 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Assine nossa newsletter</h3>
                <p className="mb-4 opacity-90">Receba conteúdos exclusivos e atualizações sobre contabilidade e gestão rural.</p>
                <div className="flex flex-col space-y-3">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="w-full py-2 px-4 rounded-lg text-gray-800 focus:outline-none"
                  />
                  <button className="bg-white text-blue-950 hover:bg-gray-100 transition duration-300 font-bold py-2 px-4 rounded-lg">
                    Inscrever-se
                  </button>
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-bold text-blue-950 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[...new Set(posts.flatMap(post => post.tags))].map((tag, index) => (
                    <a 
                      key={index} 
                      href={`/blog/tag/${tag.toLowerCase()}`} 
                      className="bg-gray-100 hover:bg-green-100 hover:text-green-600 transition duration-300 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Precisa de ajuda com a contabilidade da sua fazenda?</h2>
          <p className="max-w-2xl mx-auto mb-8">Nossa equipe de especialistas em contabilidade rural está pronta para ajudar seu negócio a crescer.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contato" className="bg-white text-green-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300">
              Fale com um especialista
            </a>
            <a href="/servicos" className="border-2 border-white hover:bg-white hover:text-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}