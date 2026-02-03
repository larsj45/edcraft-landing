export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">EdCraft</div>
          <a 
            href="#contact" 
            className="bg-edcraft-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Global <span className="gradient-text">EdTech</span>.
            <br />
            Brazilian <span className="gradient-text">Excellence</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Premium EdTech development powered by world-class Brazilian talent. 
            Superior quality, competitive advantage, accelerated time-to-market.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#portfolio" 
              className="bg-edcraft-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              View Our Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-edcraft-blue text-edcraft-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-edcraft-blue hover:text-white transition"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">The Global EdTech Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4 text-red-700">Talent Shortage</h3>
              <p className="text-gray-600">Global shortage of senior developers, especially in EdTech</p>
            </div>
            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-4 text-orange-700">Slow Time-to-Market</h3>
              <p className="text-gray-600">Limited access to specialized talent extends development cycles</p>
            </div>
            <div className="text-center p-8 bg-yellow-50 rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-700">Lack of EdTech Expertise</h3>
              <p className="text-gray-600">Few developers truly understand educational technology nuances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Solution: The Best of Both Worlds</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">Brazilian Excellence 🇧🇷</h3>
              <ul className="text-left space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  World-class developers with competitive advantages
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Deep EdTech experience and genuine passion
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Agile, collaborative, results-driven culture
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Flexible time zones for global collaboration
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">Global Standards 🌍</h3>
              <ul className="text-left space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  International compliance (GDPR, COPPA, etc.)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  International project management experience
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Global market understanding
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Enterprise-grade quality assurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Proven Track Record</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-edcraft-blue">NovaLearn UK</h3>
              <p className="text-gray-600 mb-4">AI-powered plagiarism detection with 99.9% accuracy using Pangram technology</p>
              <div className="text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">AI/ML</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">EdTech</span>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-edcraft-green">VigiExam</h3>
              <p className="text-gray-600 mb-4">Comprehensive exam proctoring SaaS for universities and institutions globally</p>
              <div className="text-sm text-gray-500">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">SaaS</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Proctoring</span>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-edcraft-orange">Gridline</h3>
              <p className="text-gray-600 mb-4">Secure LMS hosting and management solutions for universities worldwide</p>
              <div className="text-sm text-gray-500">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2">LMS</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Leadership Team</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Lars Janér - Founder & CTO</h3>
              <p className="text-gray-600 text-lg mb-4">
                20+ years in EdTech, former CEO of LearnBase, deep expertise in global education markets. 
                Swedish heritage, Brazilian operations, international vision.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">EdTech Expert</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">EU Markets</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Technical Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-edcraft-blue to-edcraft-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">
            Join global EdTech leaders who trust EdCraft for their most important projects.
          </p>
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 rounded-lg border border-gray-300 text-gray-900"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 rounded-lg border border-gray-300 text-gray-900"
              />
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full p-4 rounded-lg border border-gray-300 text-gray-900"
              />
              <textarea 
                placeholder="Tell us about your EdTech project..." 
                rows={4}
                className="w-full p-4 rounded-lg border border-gray-300 text-gray-900"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-edcraft-blue text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Your Project
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-4">EdCraft</div>
          <p className="text-gray-400">Global EdTech. Brazilian Excellence.</p>
          <p className="text-gray-500 text-sm mt-4">© 2026 EdCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}