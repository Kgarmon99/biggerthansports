import { useState, useEffect } from 'react';
import { Heart, Users, Calendar, MapPin, Mail, Phone, ArrowRight, Star, Trophy, HandHeart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img 
                src="/biggerthansports/assets/logo-white.jpg" 
                alt="Bigger Than Sports" 
                className={`h-12 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-0 hidden' : 'opacity-100'}`}
              />
              <img 
                src="/biggerthansports/assets/logo-black.jpg" 
                alt="Bigger Than Sports" 
                className={`h-12 w-auto transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 hidden'}`}
              />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Mission', 'Programs', 'Impact', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium hover:text-red-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition">
                Donate
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 mb-1.5 transition ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 mb-1.5 transition ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
              <div className={`w-6 h-0.5 transition ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-4 py-4 space-y-3">
              {['Mission', 'Programs', 'Impact', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 font-medium"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-red-600 text-white py-3 rounded-full font-semibold">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-[url('/biggerthansports/assets/training.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium">Cincinnati's Premier Athlete Community</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Community Through <span className="text-red-500">Sports</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              We connect athletes with the Cincinnati community, creating lasting impact through mentorship, 
              events, and meaningful engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center gap-2">
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg transition">
                Our Programs
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              {[
                { number: '2,500+', label: 'Lives Impacted' },
                { number: '150+', label: 'Athlete Partners' },
                { number: '40+', label: 'Community Events' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">{stat.number}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-semibold uppercase tracking-wide">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                More Than Just a Game
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bigger Than Sports is dedicated to creating a platform for positive social change. 
                Our mission is to empower individuals and communities through inclusive sports programs, 
                educational opportunities, and impactful outreach initiatives.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our programs, we bridge the gap between professional athletes and the communities 
                that support them, fostering relationships that extend far beyond the final whistle.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Users className="w-6 h-6" />, title: 'Community First', desc: 'Putting Cincinnati families first' },
                  { icon: <HandHeart className="w-6 h-6" />, title: 'Giving Back', desc: 'Creating lasting positive impact' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
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
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Est. 2018</div>
                    <div className="text-gray-500">Serving Cincinnati</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold uppercase tracking-wide">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Our Programs & Events
            </h2>
            <p className="text-lg text-gray-600">
              From youth mentorship to community events, we create opportunities for athletes to give back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-red-600 text-sm font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {program.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.desc}</p>
                  <button className="text-red-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-500 font-semibold uppercase tracking-wide">Our Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Making a Difference in Cincinnati
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Since 2018, we've been dedicated to creating positive change through sports and community engagement.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Users />, stat: '2,500+', label: 'Community Members Served' },
                  { icon: <Heart />, stat: '150+', label: 'Volunteer Athletes' },
                  { icon: <Trophy />, stat: '40+', label: 'Successful Events' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-red-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{item.stat}</div>
                      <div className="text-gray-400">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/biggerthansports/assets/youth-group.jpg" alt="Youth program" className="rounded-2xl w-full h-48 object-cover" />
              <img src="/biggerthansports/assets/training.jpg" alt="Training session" className="rounded-2xl w-full h-48 object-cover mt-8" />
              <img src="/biggerthansports/assets/team-trophy.jpg" alt="Championship team" className="rounded-2xl w-full h-48 object-cover" />
              <img src="/biggerthansports/assets/medals.jpg" alt="Awards ceremony" className="rounded-2xl w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Supporters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-gray-500 font-medium mb-8">Supported by Cincinnati's Finest</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['University of Cincinnati', 'Xavier University', 'Tampa Spartans', 'Local Partners'].map((partner, i) => (
              <div key={i} className="text-xl font-bold text-gray-400">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Whether you're an athlete looking to give back or a community member wanting to get involved, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                Volunteer With Us
              </button>
              <button className="bg-red-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-900 transition">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <Mail />, title: 'Email', info: 'tremainedees@biggerthansportsnonprofit.com' },
              { icon: <Phone />, title: 'Phone', info: '(513) 313-1068' },
              { icon: <MapPin />, title: 'Location', info: 'Cincinnati, Ohio' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500">{item.title}</div>
                  <div className="font-semibold text-gray-900 text-sm">{item.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/biggerthansports/assets/logo-white.jpg" alt="Bigger Than Sports" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting athletes with the Cincinnati community to create lasting positive impact 
                through mentorship, events, and engagement.
              </p>
              <div className="flex gap-4">
                {['IG', 'X', 'FB'].map((label, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition text-sm font-bold">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {['About Us', 'Our Programs', 'Get Involved', 'Donate', 'Contact'].map((link) => (
                  <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest events and impact stories.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 Bigger Than Sports Foundation. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
