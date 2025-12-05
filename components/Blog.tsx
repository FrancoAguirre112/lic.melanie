import React from 'react';
import { BlogPost } from '../types';
import { ExternalLink } from 'lucide-react';

const blogs: BlogPost[] = [
    { 
        id: '1', 
        title: '“El Atlético de Madrid se une a los Clásicos por la Paz”', 
        category: 'ATLÉTICO DE MADRID', 
        readTime: '19 Nov 2015', 
        description: 'Participación junto al Papa Francisco e impulso de la integración social.', 
        imageUrl: '',
        link: 'https://www.atleticodemadrid.com/noticias/el-atletico-de-madrid-se-une-a-futbol-por-la-paz'
    },
    { 
        id: '2', 
        title: 'Primera conferencia “Cultura Huracán” con CONMEBOL', 
        category: 'HURACÁN / CONMEBOL', 
        readTime: '20 Nov 2020', 
        description: 'Oradora junto a Presidente Conmebol en capacitación para prensa.', 
        imageUrl: '',
        link: 'https://cahuracan.com/noticias/primera-conferencia-cultura-huracan-con-conmebol'
    },
    { 
        id: '3', 
        title: 'Acuerdo de colaboración con la AFA', 
        category: 'AFA OFICIAL', 
        readTime: '29 Ago 2017', 
        description: 'Convenio centrado en cultura de paz, capacitación y difusión deportiva.', 
        imageUrl: '',
        link: 'https://www.afa.com.ar/6397/posts/acuerdo-de-colaboracion'
    },
];

const Blog: React.FC = () => {
  return (
    <section id="press" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                 <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Prensa</span>
                </div>
                <h2 className="text-4xl md:text-5xl text-neutral-900">Notas Destacadas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <a key={blog.id} href={blog.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-3 hover:shadow-lg transition-shadow duration-300 group">
                        <div className="aspect-[3/2] rounded-xl overflow-hidden mb-6 bg-neutral-200 relative">
                            <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                            <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full">
                                <ExternalLink className="w-4 h-4 text-black" />
                            </div>
                        </div>
                        <div className="px-2 pb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-neutral-900 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">{blog.category}</span>
                                <span className="text-xs text-neutral-400 font-medium">{blog.readTime}</span>
                            </div>
                            <h3 className="text-lg font-medium leading-snug text-neutral-900 mb-2 group-hover:text-blue-900 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-sm text-neutral-500 mt-2">{blog.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Blog;