import React from 'react';
import { Linkedin, ThumbsUp, MessageCircle, Share2, MoreHorizontal, ArrowUpRight, Globe, Heart } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: "Marina Paula Méndez",
    role: "Ejecutiva Internacional de Medios",
    time: "Destacado",
    content: "Un honor anunciar que el Atlético de Madrid se une a los 'Clásicos por la Paz'. El fútbol tiene el poder único de unir culturas y promover la integración social. Gracias a todos los que hacen esto posible. ⚽🌍 #FutbolConValores #Paz #AtleticoMadrid",
    image: "",
    likes: "2.4k",
    comments: "142",
    link: "https://www.atleticodemadrid.com/noticias/el-atletico-de-madrid-se-une-a-futbol-por-la-paz"
  },
  {
    id: 2,
    author: "Marina Paula Méndez",
    role: "Ejecutiva Internacional de Medios",
    time: "Destacado",
    content: "Compartiendo visión y estrategia en la primera conferencia 'Cultura Huracán' junto a CONMEBOL. La profesionalización de la comunicación en los clubes es fundamental para el crecimiento de nuestra industria. 🎙️📈",
    image: "",
    likes: "1.8k",
    comments: "98",
    link: "https://cahuracan.com/noticias/primera-conferencia-cultura-huracan-con-conmebol"
  },
  {
    id: 3,
    author: "Marina Paula Méndez",
    role: "Ejecutiva Internacional de Medios",
    time: "Destacado",
    content: "Firmamos un acuerdo de colaboración estratégico con la AFA. Un paso más en nuestro compromiso por fomentar una cultura de paz, educación y valores a través del deporte en Argentina y el mundo. 🇦🇷🤝",
    image: "",
    likes: "3.1k",
    comments: "215",
    link: "https://www.afa.com.ar/6397/posts/acuerdo-de-colaboracion"
  }
];

const LinkedIn: React.FC = () => {
  return (
    <section id="linkedin" className="py-24 px-6 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 bg-[#0077b5] rounded-md">
                    <Linkedin className="w-4 h-4 text-white" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-[#0077b5]">Red Profesional</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-neutral-900 font-medium">Actividad Reciente</h2>
            <p className="text-neutral-500 mt-4 max-w-xl text-lg font-light">
                Conecta conmigo en LinkedIn para seguir las últimas novedades sobre gestión deportiva, eventos globales y alianzas estratégicas.
            </p>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/marinamendez/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-[#0077b5] text-white rounded-full font-medium hover:bg-[#006097] transition-all hover:shadow-lg hover:shadow-blue-900/20"
          >
            <span>Conectar en LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
                <div key={post.id} className="bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    {/* LinkedIn Card Header */}
                    <div className="p-4 flex gap-3 border-b border-neutral-50">
                        <img 
                            src="" 
                            alt={post.author} 
                            className="w-12 h-12 rounded-full object-cover border border-neutral-100 bg-neutral-200"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h3 className="text-sm font-semibold text-neutral-900 truncate">{post.author}</h3>
                                <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                            </div>
                            <p className="text-xs text-neutral-500 truncate">{post.role}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-[10px] text-neutral-400">{post.time}</span>
                                <span className="text-[10px] text-neutral-400">•</span>
                                <Globe className="w-3 h-3 text-neutral-400" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-4 py-3">
                        <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line mb-1">
                            {post.content}
                        </p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#0077b5] hover:underline font-medium">ver más</a>
                    </div>

                    {/* Image Attachment */}
                    {post.image && (
                        <div className="mt-auto">
                             <a href={post.link} target="_blank" rel="noopener noreferrer" className="block aspect-video overflow-hidden bg-neutral-100">
                                <img src={post.image} alt="Post content" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </a>
                        </div>
                    )}
                    {/* Fallback for when image is empty string but property exists, which it does in our loop now */}
                    {post.image === "" && (
                       <div className="mt-auto">
                          <a href={post.link} target="_blank" rel="noopener noreferrer" className="block aspect-video overflow-hidden bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs">
                             <span className="sr-only">Imagen del post</span>
                          </a>
                       </div>
                    )}

                    {/* Social Counts (Decorative) */}
                    <div className="px-4 py-2 border-b border-neutral-50 flex items-center justify-between text-xs text-neutral-400">
                        <div className="flex items-center gap-1">
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-white">
                                    <ThumbsUp className="w-2 h-2 text-white fill-current" />
                                </div>
                                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border border-white">
                                    <Heart className="w-2 h-2 text-white fill-current" />
                                </div>
                            </div>
                            <span>{post.likes}</span>
                        </div>
                        <div>
                            {post.comments} comentarios
                        </div>
                    </div>

                    {/* Action Buttons (Decorative) */}
                    <div className="px-2 py-1 flex justify-between">
                        <button className="flex-1 py-3 flex items-center justify-center gap-2 text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors group/btn">
                            <ThumbsUp className="w-4 h-4 group-hover/btn:text-[#0077b5]" />
                            <span className="text-xs font-medium">Recomendar</span>
                        </button>
                        <button className="flex-1 py-3 flex items-center justify-center gap-2 text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors group/btn">
                            <MessageCircle className="w-4 h-4 group-hover/btn:text-[#0077b5]" />
                            <span className="text-xs font-medium">Comentar</span>
                        </button>
                         <button className="flex-1 py-3 flex items-center justify-center gap-2 text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors group/btn">
                            <Share2 className="w-4 h-4 group-hover/btn:text-[#0077b5]" />
                            <span className="text-xs font-medium">Compartir</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedIn;