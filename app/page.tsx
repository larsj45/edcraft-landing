export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-600/5"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 backdrop-blur-sm bg-slate-900/50 border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black gradient-text tracking-tight">EdCraft</div>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            Let's Build →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-3 mb-8 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            <span className="block text-slate-200">Where</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-green-400 bg-clip-text text-transparent animate-pulse">EdTech</span>
            <span className="block text-slate-200">Meets</span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">Excellence</span>
          </h1>
          
          <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just build EdTech. We craft digital experiences that transform education. 
            <span className="text-blue-400 font-medium">Brazilian innovation</span> meets 
            <span className="text-green-400 font-medium"> global standards</span>.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="#portfolio" 
              className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 flex items-center gap-3"
            >
              View Our Arsenal
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="group border-2 border-slate-600 bg-slate-800/30 backdrop-blur-sm text-slate-200 px-10 py-5 rounded-full text-xl font-semibold hover:border-blue-400 hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Something Epic
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">20+</div>
              <div className="text-slate-400 font-medium">Years Combined EdTech</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2">99.9%</div>
              <div className="text-slate-400 font-medium">AI Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-400 mb-2">3</div>
              <div className="text-slate-400 font-medium">Active Global Markets</div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Problem Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-200">
              The <span className="text-red-400">Problem</span> is Real
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              While EdTech is booming, most companies are stuck fighting the same battles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5C3.312 16.333 4.273 18 5.812 18z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300 group-hover:text-red-200 transition-colors">Talent Desert</h3>
              <p className="text-slate-400 leading-relaxed">Senior EdTech developers? Rare as unicorns. Most teams spend 6+ months just finding the right talent.</p>
            </div>
            
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300 group-hover:text-orange-200 transition-colors">Speed Kills</h3>
              <p className="text-slate-400 leading-relaxed">In EdTech, slow means dead. Your competitors are shipping while you're still hiring.</p>
            </div>
            
            <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 group-hover:text-yellow-200 transition-colors">Generic Solutions</h3>
              <p className="text-slate-400 leading-relaxed">Most developers treat EdTech like any other app. The learning experience suffers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-slate-200">Our</span> <span className="text-green-400">Answer</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We cracked the code: Brazilian talent + EdTech obsession + global execution
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-300">Elite Brazilian Talent</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed ml-16">
                  Not just "good developers" - we're talking about engineers who eat, sleep, and breathe EdTech. 
                  Competitive advantages that make your budget smile.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">EdTech DNA</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed ml-16">
                  We don't learn EdTech - we ARE EdTech. 20+ years building platforms that millions of students actually use. 
                  We know what works.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300">Global Execution</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed ml-16">
                  GDPR? Check. COPPA? Check. Enterprise security? Double check. 
                  We speak compliance in three languages.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    The EdgeCraft Formula
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                    <span className="text-slate-300 font-medium">Brazilian Innovation</span>
                    <span className="text-green-400 font-bold">★★★★★</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                    <span className="text-slate-300 font-medium">EdTech Mastery</span>
                    <span className="text-blue-400 font-bold">★★★★★</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                    <span className="text-slate-300 font-medium">Global Standards</span>
                    <span className="text-purple-400 font-bold">★★★★★</span>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <span className="text-slate-300 font-medium">Competitive Edge</span>
                    <span className="text-yellow-400 font-bold">★★★★★</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-200">
              Battle-<span className="text-blue-400">Tested</span> Arsenal
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              These aren't just projects. They're platforms powering real education, right now.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* NovaLearn */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-1">NovaLearn UK</h3>
                  <div className="text-slate-500 text-sm font-medium">AI Detection Platform</div>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                99.9% accuracy AI plagiarism detection using Pangram technology. 
                Currently protecting academic integrity across UK institutions.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Advanced ML algorithms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Real-time analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Multi-language support</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">AI/ML</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">EdTech</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">SaaS</span>
              </div>
            </div>
            
            {/* VigiExam */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-300 mb-1">VigiExam</h3>
                  <div className="text-slate-500 text-sm font-medium">Proctoring Revolution</div>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                Next-gen exam proctoring that universities trust. Advanced monitoring without the creepy factor.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Smart behavior detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Privacy-first approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Global compliance</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">Proctoring</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">AI Vision</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">Enterprise</span>
              </div>
            </div>
            
            {/* Gridline */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-1">Gridline</h3>
                  <div className="text-slate-500 text-sm font-medium">LMS Fortress</div>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                Enterprise-grade LMS hosting that scales. Security so tight, even your IT team sleeps well.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Military-grade security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">99.99% uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-400 text-sm">Auto-scaling</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">Infrastructure</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium">Security</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">LMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-200">
              The <span className="text-blue-400">Architect</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Meet the visionary behind EdCraft's global EdTech revolution
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-12 shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-green-600/5 rounded-3xl"></div>
              
              <div className="relative flex flex-col lg:flex-row items-center gap-12">
                {/* Avatar placeholder */}
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl font-black text-white">LJ</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h3 className="text-4xl font-black text-slate-200 mb-2">Lars Janér</h3>
                    <div className="text-xl text-blue-400 font-semibold mb-4">Founder & CTO</div>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Two decades deep in EdTech trenches. Former CEO of LearnBase, architect of platforms 
                    that millions of students depend on daily. Swedish strategic thinking meets Brazilian execution excellence.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-black text-blue-400 mb-1">20+</div>
                      <div className="text-slate-400 text-sm font-medium">Years EdTech</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-black text-green-400 mb-1">3</div>
                      <div className="text-slate-400 text-sm font-medium">Continents</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">EdTech Visionary</span>
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">Product Strategist</span>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">Global Markets</span>
                    <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold">Tech Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-green-600/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-200">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Dominate</span> EdTech?
            </h2>
            <p className="text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stop fighting for scraps in the talent marketplace. Join the elite who build with EdCraft.
            </p>
            <div className="flex items-center justify-center gap-8 text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <span>Response in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                <span>Global delivery</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-4">Let's Start Something Epic</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto"></div>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Company & Role" 
                  className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <select className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 focus:border-blue-400 focus:outline-none transition-colors">
                    <option value="">Project Budget</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-250k">$100k - $250k</option>
                    <option value="250k+">$250k+</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                  
                  <select className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 focus:border-blue-400 focus:outline-none transition-colors">
                    <option value="">Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="3months">3 months</option>
                    <option value="6months">6 months</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>
                
                <textarea 
                  placeholder="Tell us about your EdTech vision. What problem are you solving?"
                  rows={4}
                  className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-green-500 text-white p-5 rounded-xl text-xl font-bold hover:from-blue-500 hover:to-green-400 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Launch Your EdTech Empire
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6">EdCraft</div>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Where global EdTech leaders come to build the future of education.
            </p>
            
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-300">São Paulo</div>
                <div className="text-slate-500 text-sm">Innovation Hub</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-300">Global</div>
                <div className="text-slate-500 text-sm">Delivery</div>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-slate-500 text-sm mb-4 md:mb-0">
                © 2026 EdCraft. Crafted with 🔥 in Brazil for the world.
              </div>
              <div className="flex items-center gap-6 text-slate-500 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}