import { useState, useEffect } from 'react';
import { 
  Scale, 
  Car, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Coins,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import logoInsta from './assets/LOGO_INSTA.png';
import juraImg from './assets/fotoCarrousel/jura.jpeg';
import jurandoImg from './assets/fotoCarrousel/jurando.jpeg';
import estudioImg from './assets/fotoCarrousel/estudio.jpeg';
import rabajando1Img from './assets/fotoCarrousel/rabajando 1.jpeg';
import trabajando2Img from './assets/fotoCarrousel/trabajando 2.jpeg';

// ==========================================
// VARIABLES DE ESTILO Y CONFIGURACIÓN
// ==========================================
const THEME = {
  // Paleta de colores (Clases de Tailwind)
  primaryColor: 'bg-slate-900', // Azul marino oscuro
  primaryText: 'text-slate-900',
  secondaryColor: 'bg-pink-400', // Dorado/Cobre
  secondaryText: 'bg-pink-700',
  secondaryHover: 'hover:bg-pink-400',
  
  // Enlaces y datos
  logoUrl: logoInsta,
  contactInfo: {
    phone: '+54 9 3434 196459',
    email: 'romanela-juridico@hotmail.com',
    address: 'Almte. Thomas Cochrane 1139, E3100 Paraná, Entre Ríos',
    instagram: 'https://www.instagram.com/abogada_romanela_bazan',
    facebook: 'https://www.facebook.com/share/1E8tUp7cx2/',
    whatsapp: 'https://wa.me/5493434196459'
  }
};

// Imágenes de muestra para el carrusel
const aboutImages = [
  juraImg,
  jurandoImg,
  estudioImg,
  rabajando1Img,
  trabajando2Img
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  // Efecto para pasar las fotos automáticamente cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="font-sans text-slate-700 bg-slate-50 min-h-screen relative scroll-smooth">
      
      {/* ================= BOTÓN FLOTANTE WHATSAPP ================= */}
      <a 
        href={THEME.contactInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full bg-zinc-50 shadow-sm z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <img src={THEME.logoUrl} alt="Estudio Jurídico Romanela Bazan" className="h-12 w-auto rounded shadow-sm" />
              <div className="ml-3 flex flex-col">
                <span className={`font-serif text-xl font-bold tracking-tight ${THEME.primaryText}`}>ROMANELA BAZAN</span>
                <span className="text-xs tracking-widest text-slate-500 uppercase font-medium">Abogada</span>
              </div>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Especialidades</a>
              <a href="#acerca-de-mi" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Acerca de mí</a>
              <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Contacto</a>
              
              <div className="flex items-center space-x-4 border-l border-slate-200 pl-8">
                <div className="flex items-center space-x-4">
                  <a href={THEME.contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-600 transition-colors" aria-label="Instagram">
                    <FaInstagram size={22} />
                  </a>
                  <a href={THEME.contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-600 transition-colors" aria-label="Facebook">
                    <FaFacebook size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Botón Menú Mobile */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-amber-600 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Panel Menú Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-md transition-colors">Inicio</a>
              <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-md transition-colors">Especialidades</a>
              <a href="#acerca-de-mi" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-md transition-colors">Acerca de mí</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 rounded-md transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="inicio" className="pt-20 relative bg-blue-950 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 overflow-hidden">
          {/* Imagen de fondo profesional (Reemplazar URL por foto real) */}
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000" 
            alt="Despacho legal" 
            className="w-full h-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r bg-blue-950 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Defendiendo tus derechos con <span className="text-pink-400">compromiso y excelencia.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed">
              Asesoramiento legal integral y personalizado. Me especializo en derecho de familia, accidentes de tránsito, amparos de salud y derecho laboral, para brindarte la tranquilidad que mereces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={THEME.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white ${THEME.secondaryColor} ${THEME.secondaryHover} transition-all shadow-lg hover:shadow-amber-600/30`}
              >
                <FaWhatsapp className="mr-2" size={20} />
                Contactar ahora
              </a>
              <a 
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS (ESPECIALIDADES) ================= */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`font-serif text-3xl md:text-4xl font-bold ${THEME.primaryText} mb-4`}>
              Áreas de Práctica
            </h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto mb-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group translate-y-0 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-700 transition-colors duration-300">
                <Heart className="text-pink-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className={`font-serif text-xl font-bold ${THEME.primaryText} mb-3`}>Derecho de Familia</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cuota Alimentaria, divorcios, régimen de comunicación y cuidado personal.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group translate-y-0 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-700 transition-colors duration-300">
                <Car className="text-pink-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className={`font-serif text-xl font-bold ${THEME.primaryText} mb-3`}>Accidentes de Tránsito</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Reclamos por daños y perjuicios, lesiones y negociaciones extrajudiciales con aseguradoras para obtener la máxima indemnización justa.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group translate-y-0 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-700 transition-colors duration-300">
                <Scale className="text-pink-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className={`font-serif text-xl font-bold ${THEME.primaryText} mb-3`}>Amparos de Salud</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Protección urgente de tu derecho a la salud. Reclamos ante obras sociales y prepagas por negativas de cobertura, tratamientos o medicamentos.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group translate-y-0 hover:-translate-y-2">
              <div className="w-14 h-14 bg-pink-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-700 transition-colors duration-300">
                <Coins className="text-pink-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className={`font-serif text-xl font-bold ${THEME.primaryText} mb-3`}>Derecho Laboral</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Defensa integral de tus derechos: despidos injustificados, trabajo en negro (no registrado), diferencias salariales, accidentes de trabajo y enfermedades profesionales. Reclamos firmes para resultados justos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACERCA DE MI ================= */}
      <section id="acerca-de-mi" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`font-serif text-3xl md:text-4xl font-bold ${THEME.primaryText} mb-4`}>
              Acerca de mí
            </h2>
            <div className="w-16 h-1 bg-pink-600 mx-auto mb-6 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carrusel de Imágenes */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl h-[400px] sm:h-[480px] lg:h-[620px]">
              <img 
                src={aboutImages[currentImageIndex]} 
                alt={`Romanela Bazan - Foto ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Controles del carrusel */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-amber-600 w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Texto Acerca de mí */}
            <div className="space-y-6">
              <h3 className={`font-serif text-2xl font-bold ${THEME.primaryText}`}>
                Dra. Romanela Bazan
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Soy abogada egresada de la Universidad Nacional del Litoral (2014) y mediadora, dedicada a brindar asesoramiento jurídico con un enfoque profundamente humano y empático. Mi prioridad es escuchar y entender la situación de cada cliente para ofrecerle la solución más justa y efectiva.
                Realice diversos cursos de posgrado y actualizacion tales como Procesos de Familia, Impuestos a las ganancias en Jubilados, abogado del niño, actualizacion en accidentes de transito, entre otros
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Con años de experiencia, me especializo en derecho de familia, accidentes de tránsito, amparos de salud y derecho laboral. Creo firmemente en la defensa apasionada de los derechos, el compromiso inquebrantable y la excelencia profesional en cada paso del proceso.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Mi objetivo es acompañarte y brindarte la tranquilidad de que tu caso está en buenas manos.
              </p>
              <div className="pt-4">
                <a 
                  href="#contacto"
                  className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white ${THEME.secondaryColor} ${THEME.secondaryHover} transition-all shadow-md`}
                >
                  Contactar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACTO Y REDES ================= */}
      <section id="contacto" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info y Mapa */}
            <div>
              <h2 className={`font-serif text-3xl md:text-4xl font-bold ${THEME.primaryText} mb-4`}>
                Contacto
              </h2>
              <div className="w-16 h-1 bg-pink-600 mb-8 rounded"></div>
              <p className="text-slate-600 mb-10 text-lg">
                Estoy a tu disposición para evaluar tu caso de manera confidencial. Contactame para agendar una consulta presencial o virtual.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="mt-1 bg-pink-50 p-3 rounded-full text-pink-600">
                    <MapPin size={22} />
                  </div>
                  <div className="ml-5">
                    <h4 className="font-bold text-slate-800">Dirección del Estudio</h4>
                    <p className="text-slate-600 mt-1">{THEME.contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-pink-50 p-3 rounded-full text-pink-600">
                    <Phone size={22} />
                  </div>
                  <div className="ml-5">
                    <h4 className="font-bold text-slate-800">Teléfono / WhatsApp</h4>
                    <p className="text-slate-600 mt-1">{THEME.contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-pink-50 p-3 rounded-full text-pink-600">
                    <Mail size={22} />
                  </div>
                  <div className="ml-5">
                    <h4 className="font-bold text-slate-800">Correo Electrónico</h4>
                    <p className="text-slate-600 mt-1">{THEME.contactInfo.email}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Mapa reubicado en lugar del formulario */}
            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full min-h-[420px]">
              <iframe 
                title="Ubicación del Estudio"
                src="https://maps.google.com/maps?q=Almte.%20Thomas%20Cochrane%201139,%20Paran%C3%A1,%20Entre%20R%C3%ADos&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`${THEME.primaryColor} text-slate-300 py-12 border-t border-slate-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <span className="font-serif text-2xl font-bold text-white block mb-2 tracking-tight">ROMANELA BAZAN</span>
              <span className="text-sm text-slate-400">Estudio Jurídico Integral</span>
            </div>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a href={THEME.contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:-translate-y-1">
                <FaInstagram size={22} />
              </a>
              <a href={THEME.contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:-translate-y-1">
                <FaFacebook size={22} />
              </a>
              <a href={THEME.contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:-translate-y-1">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Estudio Jurídico Romanela Bazan. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
