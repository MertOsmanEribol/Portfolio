import React from 'react'
import card1 from "/Imgs/sermak.png"
import card2 from "/Imgs/MoeEco.png"
import card3 from "/Imgs/toksisite.png"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'

function Portfoliopage() {
  return (
    <div>
      <div className='min-h-screen font-mono background '>
              {/* Header - Sosyal Medya Linkleri */}
              <div className="w-full py-4 bg-gray-900 bg-opacity-50 backdrop-blur-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 flex justify-end">
                  <div className="flex gap-4">
                     <Link to="https://github.com/MertOsmanEribol" className="text-white hover:text-amber-500 transition-colors duration-300">
                      <FaGithub className="text-2xl" />
                    </Link>
                     <Link to="https://www.linkedin.com/in/merteribol/" className="text-white hover:text-amber-500 transition-colors duration-300">
                      <FaLinkedin className="text-2xl" />
                    </Link>
                     <Link to="mailto:mertosmaneribol@hotmail.com" className="text-white hover:text-amber-500 transition-colors duration-300">
                      <FaEnvelope className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
      
              <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  {/* Sol Taraf - Profil Bilgileri */}
                  <div className='mx-auto text-white max-w-lg'>
                    <img 
                      className='w-48 h-48 mt-10 shadow-2xl mx-auto rounded-full object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-opacity-20 border-white' 
                      src="https://avatars.githubusercontent.com/u/147248513?s=400&u=2075f965132830262bef7656ddab67004a691e8b&v=4" 
                      alt="Profil Fotoğrafı" 
                    />
                    <div className='pt-6'>
                      <h1 className='text-white font-mono text-center mb-2 text-3xl md:text-4xl'>MERT OSMAN ERİBOL</h1>
                      <div className='text-center'>
                        <span className='animate text-white font-mono text-center text-xl'>Junior</span>
                        <span className='animate text-white font-mono text-center text-xl'>FrontEnd</span>
                        <span className='animate text-white font-mono text-center text-xl'>Developver</span>
                      </div>
                      <div className='text-center mt-8'>
                        <p className='text-base md:text-xl font-mono leading-relaxed'>
                          Junior Front-End Developer'ım. HTML, CSS, Tailwind, Bootstrap, JavaScript ve React ile projeler geliştirdim. 
                          Node.js ve MSSQL ile back-end tecrübem de var. İstanbul Ticaret Odası, SoftITo Yazılım-Bilişim Akademisi'nde 320 saatlik Front-End eğitimi aldım, 
                          ekip çalışmasına yatkın ve öğrenmeye açık bir geliştiriciyim. Hedefim, modern teknolojilerle 
                          kullanıcı dostu arayüzler geliştirmek.
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Sağ Taraf - Projeler ve Yetenekler */}
                  <div className='text-white'>
                    {/* Projeler Başlık */}
                    <div className='mt-10'>
                      <h1 className='text-3xl md:text-4xl font-mono text-center lg:text-left relative inline-block'>
                        Projelerim
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </h1>
                      <div className="w-16 h-1 bg-amber-500 mt-2 mb-6 hidden lg:block"></div>
                    </div>
                    
                    {/* Projeler Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                      {/* Kart 1 */}
                      <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-700'>
                        <div className='h-48 overflow-hidden'>
                          <img src={card1} alt="Sermak Makina" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
                        </div>
                        <div className='p-4 flex flex-col flex-grow'>
                          <h3 className="text-xl mb-2 font-bold">Sermak Makina</h3>
                          <p className="text-gray-300 text-sm flex-grow">
                            Sermak Makina için müşteri isteği doğrultusunda basitçe oluşturulmuş site. Pure CSS ile yazıldı.
                          </p>
                          <div className="mt-4">
                             <Link to="https://sermakmkn.com/" target="_blank" rel="noopener noreferrer" className="block"> 
                              <button className='w-full p-2 rounded-lg bg-amber-700 hover:bg-amber-600 transition-colors hover:-translate-y-0.5 transform duration-300 hover:shadow-lg'>
                                Siteye git
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
      
                      {/* Kart 2 */}
                      <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-700'>
                        <div className='h-48 overflow-hidden'>
                          <img src={card2} alt="MoeEco" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
                        </div>
                        <div className='p-4 flex flex-col flex-grow'>
                          <h3 className="text-xl mb-2 font-bold">MoeEco</h3>
                          <p className="text-gray-300 text-sm flex-grow">
                            FullStack alışveriş sitesi projem. TailwindCSS, Javascript, React.js, Node.js, Express.js kullanıldı.
                          </p>
                          <div className="mt-4">
                             <Link to="#" target="_blank" rel="noopener noreferrer" className="block"> 
                              <button className='w-full p-2 rounded-lg bg-amber-700 hover:bg-amber-600 transition-colors hover:-translate-y-0.5 transform duration-300 hover:shadow-lg'>
                                Siteye git
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
      
                      {/* Kart 3 */}
                      <div className='bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-700'>
                        <div className='h-48 overflow-hidden'>
                          <img src={card3} alt="Toksisite" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
                        </div>
                        <div className='p-4 flex flex-col flex-grow'>
                          <h3 className="text-xl mb-2 font-bold">Toksisite</h3>
                          <p className="text-gray-300 text-sm flex-grow">
                            Toksisite projesi. Modern web teknolojileri kullanılarak geliştirildi.
                          </p>
                          <div className="mt-4">
                             <Link to="https://www.toksisite.net/" target="_blank" rel="noopener noreferrer" className="block"> 
                              <button className='w-full p-2 rounded-lg bg-amber-700 hover:bg-amber-600 transition-colors hover:-translate-y-0.5 transform duration-300 hover:shadow-lg'>
                                Siteye git
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    {/* Yetenekler Bölümü */}
                    <div className='mt-12'>
                      <h1 className='text-3xl md:text-4xl font-mono mb-2 text-center lg:text-left relative inline-block'>
                        Yeteneklerim
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </h1>
                      <div className="w-16 h-1 bg-amber-500 mt-2 mb-6 hidden lg:block"></div>
                      
                      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
                        {/* HTML */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <FaHtml5 className='text-4xl text-orange-500' />
                          </div>
                          <span className='mt-2 text-center'>HTML5</span>
                        </div>
                        
                        {/* CSS */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <FaCss3Alt className='text-4xl text-blue-500' />
                          </div>
                          <span className='mt-2 text-center'>CSS3</span>
                        </div>
                        
                        {/* JavaScript */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <SiJavascript className='text-4xl text-yellow-400' />
                          </div>
                          <span className='mt-2 text-center'>JavaScript</span>
                        </div>
                        
                        {/* React */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <FaReact className='text-4xl text-cyan-400' />
                          </div>
                          <span className='mt-2 text-center'>React</span>
                        </div>
                        
                        {/* Node.js */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <FaNodeJs className='text-4xl text-green-500' />
                          </div>
                          <span className='mt-2 text-center'>Node.js</span>
                        </div>
                        
                        {/* Tailwind */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <SiTailwindcss className='text-4xl text-cyan-500' />
                          </div>
                          <span className='mt-2 text-center'>Tailwind</span>
                        </div>
                        
                        {/* Bootstrap */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <FaBootstrap className='text-4xl text-purple-500' />
                          </div>
                          <span className='mt-2 text-center'>Bootstrap</span>
                        </div>
                        
                        {/* MSSQL */}
                        <div className='flex flex-col items-center group'>
                          <div className='w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-700'>
                            <FaDatabase className='text-4xl text-blue-400' />
                          </div>
                          <span className='mt-2 text-center'>MSSQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <footer className="mt-16  py-6 bg-gray-900 bg-opacity-50">
                <div className="container mx-auto px-4 text-center text-white">
                  <p>© {new Date().getFullYear()} Mert Osman Eribol | Tüm Hakları Saklıdır</p>
                  <div className="flex justify-center gap-4 mt-4">
                     <Link to="https://github.com/MertOsmanEribol" className="text-white hover:text-amber-500 transition-colors duration-300">
                      <FaGithub className="text-xl" />
                    </Link>
                     <Link to="https://www.linkedin.com/in/merteribol/" className="text-white hover:text-amber-500 transition-colors duration-300">
                      <FaLinkedin className="text-xl" />
                    </Link>
                     <Link to="mailto:mertosmaneribol@hotmail.com" className="text-white hover:text-amber-500 transition-colors duration-300">
                      <FaEnvelope className="text-xl" />
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
    </div>
  )
}

export default Portfoliopage
