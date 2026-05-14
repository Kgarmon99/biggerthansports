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
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                BTS
              </div>
              <span className={`font-bold text-xl hidden sm:block ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                Bigger Than Sports
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Mission', 'Programs', 'Impact', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium hover:text-orange-500 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition">
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
              <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552674605-469523170d9e?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium">Cincinnati's Premier Athlete Community</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Community Through <span className="text-orange-400">Sports</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              We connect athletes with the Cincinnati community, creating lasting impact through mentorship, 
              events, and meaningful engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center gap-2">
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
                { number: '500+', label: 'Lives Impacted' },
                { number: '50+', label: 'Athlete Partners' },
                { number: '25+', label: 'Community Events' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400">{stat.number}</div>
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
              <span className="text-orange-500 font-semibold uppercase tracking-wide">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                More Than Just a Game
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bigger Than Sports Foundation believes that athletes have the power to inspire change 
                beyond the field. We create opportunities for athletes to connect with their communities, 
                mentor youth, and make a lasting difference.
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
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
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
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800" 
                  alt="Community gathering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-orange-500" />
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
            <span className="text-orange-500 font-semibold uppercase tracking-wide">What We Do</span>
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
                image: 'https://images.unsplash.com/photo-1547573854-ea31895c1b6e?w=600',
                date: 'November 2024'
              },
              {
                title: 'Youth Mentorship Program',
                desc: 'Pairing professional athletes with local youth for guidance and inspiration.',
                image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600',
                date: 'Year-round'
              },
              {
                title: 'Community Sports Clinics',
                desc: 'Free sports clinics teaching skills and building confidence in young athletes.',
                image: 'https://images.unsplash.com/photo-1461896836934- voices-2a115be63bfc?w=600',
                date: 'Monthly'
              },
              {
                title: 'Back-to-School Drives',
                desc: 'Providing school supplies and resources to underserved students.',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
                date: 'August 2024'
              },
              {
                title: 'Holiday Toy Drive',
                desc: 'Bringing joy to families during the holiday season.',
                image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600',
                date: 'December 2024'
              },
              {
                title: 'Athlete Speaker Series',
                desc: 'Inspiring talks from professional athletes sharing their journeys.',
                image: 'https://images.unsplash.com/photo-1558403194-611308249627?w=600',
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
                  <div className="flex items-center gap-2 text-orange-500 text-sm font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {program.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.desc}</p>
                  <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 font-semibold uppercase tracking-wide">Our Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Making a Difference in Cincinnati
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Since 2018, we've been dedicated to creating positive change through sports and community engagement.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Users />, stat: '2,500+', label: 'Community Members Served' },
                  { icon: <Heart />, stat: '150+', label: 'Volunteer Athletes' },
                  { icon: <Trophy />, stat: '40+', label: 'Successful Events' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-orange-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{item.stat}</div>
                      <div className="text-blue-200">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400" alt="Community" className="rounded-2xl w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400" alt="Youth" className="rounded-2xl w-full h-48 object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400" alt="Sports" className="rounded-2xl w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400" alt="Team" className="rounded-2xl w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Supporters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-gray-500 font-medium mb-8">Supported by Cincinnati's Finest</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Cincinnati Bengals', 'FC Cincinnati', 'Cincinnati Reds', 'Xavier Athletics', 'UC Bearcats'].map((partner, i) => (
              <div key={i} className="text-xl font-bold text-gray-400">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Whether you're an athlete looking to give back or a community member wanting to get involved, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                Volunteer With Us
              </button>
              <button className="bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <Mail />, title: 'Email', info: 'info@biggerthansports.org' },
              { icon: <Phone />, title: 'Phone', info: '(513) 555-0123' },
              { icon: <MapPin />, title: 'Location', info: 'Cincinnati, Ohio' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-gray-500">{item.title}</div>
                  <div className="font-semibold text-gray-900">{item.info}</div>
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center font-bold">
                  BTS
                </div>
                <span className="font-bold text-xl">Bigger Than Sports</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting athletes with the Cincinnati community to create lasting positive impact 
                through mentorship, events, and engagement.
              </p>
              <div className="flex gap-4">
                {['IG', 'X', 'FB'].map((label, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition text-sm font-bold">
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
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
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

export default App;// Deploy trigger
