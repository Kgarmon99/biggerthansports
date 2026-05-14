import { useState, useEffect } from 'react';
import { Heart, Users, Calendar, MapPin, Mail, Phone, ArrowRight, Star, Trophy, HandHeart, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showThanksgivingModal, setShowThanksgivingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className={`relative transition-all duration-500 ${scrolled ? 'opacity-0 hidden' : 'opacity-100'}`}>
                <img 
                  src="/biggerthansports/assets/logo-white.jpg" 
                  alt="Bigger Than Sports" 
                  className="h-14 w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
              <div className={`relative transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <img 
                  src="/biggerthansports/assets/logo-black.jpg" 
                  alt="Bigger Than Sports" 
                  className="h-14 w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {['Mission', 'Programs', 'Impact', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${scrolled ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => setShowDonateModal(true)}
                className="ml-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                Donate Now
              </button>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-100">
            <div className="px-6 py-6 space-y-2">
              {['Mission', 'Programs', 'Impact', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => { setShowDonateModal(true); setIsMenuOpen(false); }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-full font-semibold mt-4 shadow-lg shadow-red-500/25"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-[url('/biggerthansports/assets/training.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        
        {/* Animated background accent */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full mb-8">
              <Star className="w-4 h-4 text-red-400 fill-red-400" />
              <span className="text-sm font-medium tracking-wide">Cincinnati's Premier Athlete Community</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Building Community{' '}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Through Sports
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-500/30 -skew-x-3"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              We connect athletes with the Cincinnati community, creating lasting impact through mentorship, 
              events, and meaningful engagement.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowVolunteerModal(true)}
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 flex items-center gap-2"
              >
                Get Involved
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              >
                Our Programs
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/10">
              {[
                { number: '2,500+', label: 'Lives Impacted' },
                { number: '150+', label: 'Athlete Partners' },
                { number: '40+', label: 'Community Events' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">{stat.number}</div>
                  <div className="text-sm text-gray-400 mt-2 font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                More Than Just a Game
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bigger Than Sports is dedicated to creating a platform for positive social change. 
                Our mission is to empower individuals and communities through inclusive sports programs, 
                educational opportunities, and impactful outreach initiatives.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Through our programs, we bridge the gap between professional athletes and the communities 
                that support them, fostering relationships that extend far beyond the final whistle.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Users className="w-6 h-6" />, title: 'Community First', desc: 'Putting Cincinnati families first' },
                  { icon: <HandHeart className="w-6 h-6" />, title: 'Giving Back', desc: 'Creating lasting positive impact' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-500/25">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/biggerthansports/assets/group-arena.jpg" 
                  alt="Bigger Than Sports Community" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/25">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">Est. 2018</div>
                    <div className="text-gray-500 text-sm">Serving Cincinnati</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="inline-block text-red-600 font-bold uppercase tracking-widest text-sm mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
              Our Programs & Events
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              From youth mentorship to community events, we create opportunities for athletes to give back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Hometown Heroes Thanksgiving',
                desc: 'Annual Thanksgiving meal giveaway serving hundreds of Cincinnati families.',
                image: '/biggerthansports/assets/thanksgiving-drive.jpg',
                date: 'November 2024'
              },
              {
                title: 'Youth Mentorship Program',
                desc: 'Pairing professional athletes with local youth for guidance and inspiration.',
                image: '/biggerthansports/assets/youth-group.jpg',
                date: 'Year-round'
              },
              {
                title: 'Basketball Camps',
                desc: 'Free sports clinics teaching skills and building confidence in young athletes.',
                image: '/biggerthansports/assets/team-trophy.jpg',
                date: 'Monthly'
              },
              {
                title: 'School Supplies Drives',
                desc: 'Providing school supplies and resources to underserved students.',
                image: '/biggerthansports/assets/ms-basketball.jpg',
                date: 'August 2024'
              },
              {
                title: 'Homeless Support Initiatives',
                desc: 'Supporting our homeless community with meals, supplies, and resources.',
                image: '/biggerthansports/assets/medals.jpg',
                date: 'Year-round'
              },
              {
                title: 'Athlete Speaker Series',
                desc: 'Inspiring talks from professional athletes sharing their journeys.',
                image: '/biggerthansports/assets/tampa-spartans.jpg',
                date: 'Quarterly'
              },
            ].map((program, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-red-600 text-sm font-bold uppercase tracking-wide mb-3">
                    <Calendar className="w-4 h-4" />
                    {program.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.desc}</p>
                  {program.title === 'Hometown Heroes Thanksgiving' ? (
                    <button 
                      onClick={() => setShowThanksgivingModal(true)}
                      className="text-red-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                    >
                      View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <a 
                      href={`mailto:tremainedees@biggerthansportsnonprofit.com?subject=Inquiry about ${encodeURIComponent(program.title)}`}
                      className="text-red-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                    >
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 md:py-28 bg-gray-900 text-white relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-red-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Our Impact</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 leading-tight">
                Making a Difference in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Cincinnati
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
                Since 2018, we've been dedicated to creating positive change through sports and community engagement.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: <Users />, stat: '2,500+', label: 'Community Members Served' },
                  { icon: <Heart />, stat: '150+', label: 'Volunteer Athletes' },
                  { icon: <Trophy />, stat: '40+', label: 'Successful Events' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl md:rounded-2xl flex items-center justify-center text-red-400 group-hover:from-red-600 group-hover:to-red-700 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-2xl md:text-4xl font-extrabold">{item.stat}</div>
                      <div className="text-gray-500 text-sm md:text-base">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img src="/biggerthansports/assets/youth-group.jpg" alt="Youth program" className="rounded-xl md:rounded-2xl w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-500" />
              <img src="/biggerthansports/assets/training.jpg" alt="Training session" className="rounded-xl md:rounded-2xl w-full h-40 md:h-56 object-cover mt-6 md:mt-12 hover:scale-105 transition-transform duration-500" />
              <img src="/biggerthansports/assets/team-trophy.jpg" alt="Championship team" className="rounded-xl md:rounded-2xl w-full h-40 md:h-56 object-cover hover:scale-105 transition-transform duration-500" />
              <img src="/biggerthansports/assets/medals.jpg" alt="Awards ceremony" className="rounded-xl md:rounded-2xl w-full h-40 md:h-56 object-cover mt-6 md:mt-12 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Supporters */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-gray-400 font-medium mb-8 md:mb-12 tracking-wide uppercase text-xs md:text-sm">Supported by Cincinnati's Finest</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
            {['University of Cincinnati', 'Xavier University', 'Tampa Spartans', 'Local Partners'].map((partner, i) => (
              <div key={i} className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8">
                Join the Movement
              </h2>
              <p className="text-base md:text-xl text-red-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                Whether you're an athlete looking to give back or a community member wanting to get involved, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
                <button 
                  onClick={() => setShowVolunteerModal(true)}
                  className="bg-white text-red-600 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Volunteer With Us
                </button>
                <button 
                  onClick={() => setShowPartnerModal(true)}
                  className="bg-red-900/50 backdrop-blur-sm border-2 border-white/30 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-red-900/70 transition-all duration-300 hover:scale-105"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20">
            {[
              { icon: <Mail />, title: 'Email', info: 'tremainedees@biggerthansportsnonprofit.com' },
              { icon: <Phone />, title: 'Phone', info: '(513) 313-1068' },
              { icon: <MapPin />, title: 'Location', info: 'Cincinnati, Ohio' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-5 justify-start p-4 md:p-6 rounded-2xl bg-gray-50 hover:bg-red-50 transition-colors group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-500/25 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">{item.title}</div>
                  <div className="font-bold text-gray-900 text-sm md:text-base truncate">{item.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <img src="/biggerthansports/assets/logo-white.jpg" alt="Bigger Than Sports" className="h-14 md:h-16 w-auto object-contain rounded-lg shadow-xl" />
              </div>
              <p className="text-gray-400 mb-6 md:mb-8 max-w-md text-base md:text-lg leading-relaxed">
                Connecting athletes with the Cincinnati community to create lasting positive impact 
                through mentorship, events, and engagement.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'X', 'Facebook'].map((label, i) => (
                  <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-xs font-bold">{label.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                {['About Us', 'Our Programs', 'Get Involved', 'Donate', 'Contact'].map((link) => (
                  <li key={link}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-lg">Newsletter</h4>
              <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">Stay updated with our latest events and impact stories.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 md:px-5 py-3 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                />
                <button className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all hover:scale-105 whitespace-nowrap">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm md:text-base text-center sm:text-left">© 2024 Bigger Than Sports Foundation. All rights reserved.</p>
            <div className="flex gap-6 md:gap-8 text-gray-500 text-sm md:text-base">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Donate Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowDonateModal(false)}
          ></div>
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl transform transition-all">
            <button 
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Support Our Mission</h3>
              <p className="text-gray-600">Your donation helps us continue serving the Cincinnati community.</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://www.paypal.com/donate?business=tremainedees@biggerthansportsnonprofit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-bold text-center transition-all hover:scale-[1.02]"
              >
                Donate with PayPal
              </a>
              
              <a 
                href="mailto:tremainedees@biggerthansportsnonprofit.com?subject=Donation Inquiry"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-center transition-all"
              >
                Contact Us About Donating
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Bigger Than Sports Foundation is a registered 501(c)(3) nonprofit organization. <br/>
                All donations are tax-deductible.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Volunteer Modal */}
      {showVolunteerModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowVolunteerModal(false)}
          ></div>
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl transform transition-all">
            <button 
              onClick={() => setShowVolunteerModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Become a Volunteer</h3>
              <p className="text-gray-600">Join our team of dedicated volunteers making a difference in Cincinnati.</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:tremainedees@biggerthansportsnonprofit.com?subject=Volunteer Application"
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-center transition-all hover:scale-[1.02]"
              >
                Email Us to Volunteer
              </a>
              
              <a 
                href="tel:5133131068"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-center transition-all"
              >
                Call (513) 313-1068
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                We're always looking for passionate individuals to help with events, mentorship, and community outreach.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Partner Modal */}
      {showPartnerModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowPartnerModal(false)}
          ></div>
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl transform transition-all">
            <button 
              onClick={() => setShowPartnerModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner With Us</h3>
              <p className="text-gray-600">Collaborate with Bigger Than Sports to create meaningful community impact.</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:tremainedees@biggerthansportsnonprofit.com?subject=Partnership Inquiry"
                className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold text-center transition-all hover:scale-[1.02]"
              >
                Email About Partnership
              </a>
              
              <a 
                href="tel:5133131068"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-xl font-bold text-center transition-all"
              >
                Call (513) 313-1068
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                We partner with businesses, schools, and organizations to expand our reach and impact.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Thanksgiving Gallery Modal */}
      {showThanksgivingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setShowThanksgivingModal(false)}
          ></div>
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
            <button 
              onClick={() => setShowThanksgivingModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition shadow-lg"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <span className="inline-block text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Event Gallery</span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Hometown Heroes Thanksgiving
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Our annual Thanksgiving meal giveaway serving hundreds of Cincinnati families. 
                  Thanks to our amazing volunteers and community partners for making this possible.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="/biggerthansports/assets/thanksgiving-1.jpg" 
                    alt="Thanksgiving Drive - Handing out meals"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="/biggerthansports/assets/thanksgiving-2.jpg" 
                    alt="Thanksgiving Drive - Volunteers helping"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="/biggerthansports/assets/thanksgiving-3.jpg" 
                    alt="Thanksgiving Drive - Community gathering"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="/biggerthansports/assets/thanksgiving-4.jpg" 
                    alt="Thanksgiving Drive - Team photo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <a 
                  href="mailto:tremainedees@biggerthansportsnonprofit.com?subject=Hometown Heroes Thanksgiving Inquiry"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-red-500/25"
                >
                  Get Involved Next Year <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
