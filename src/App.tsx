import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Brain, Briefcase, Calendar, GraduationCap, ArrowRight, Users, Zap, Globe, Star, Target, Shield } from "lucide-react";
import Jobs from "./components/Jobs";
import EventPage from "./components/EventsPage";
import Courses from "./components/Courses";

const Landing: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
    {/* Professional background pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(79,70,229,0.06)_1px,transparent_0)] [background-size:22px_22px]"></div>
    
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      
      {/* Logo & Title */}
      <header className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-5 animate-fade-in">
        <div className="p-3 sm:p-4 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl">
          <Brain className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
          AI Collective
        </h1>
      </header>

      {/* Subtitle */}
      <div className="max-w-3xl md:max-w-4xl space-y-4 animate-fade-in-delay">
        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
          Your Gateway to the Future of Artificial Intelligence
        </p>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
          Join the world's most vibrant AI community where innovation meets opportunity. 
          Connect with industry leaders, discover breakthrough careers, attend exclusive events,
          and master cutting-edge skills that will shape tomorrow's technology landscape.
        </p>
      </div>

      {/* Feature cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl animate-fade-in-delay-2">
        {[
          { icon: Target, color: "from-blue-500 to-indigo-500", title: "Smart Matching", text: "AI-powered algorithms connect you with the perfect opportunities based on your skills and goals." },
          { icon: Shield, color: "from-purple-500 to-pink-500", title: "Trusted Network", text: "Verified professionals and companies ensuring quality connections and opportunities." },
          { icon: Zap, color: "from-green-500 to-teal-500", title: "Real-time Updates", text: "Stay ahead with instant notifications about new opportunities and industry trends." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 text-left hover:shadow-xl transition">
            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Main buttons */}
      <nav className="flex flex-col md:flex-row gap-4 mt-4 animate-fade-in-delay-3">
        {[
          { to: "/jobs", icon: Briefcase, text: "Explore Careers", gradient: "from-indigo-600 to-purple-600", textColor: "text-white" },
          { to: "/events", icon: Calendar, text: "Join Events", gradient: "from-white/80 to-white/80", border: "border border-indigo-200", textColor: "text-indigo-700" },
          { to: "/courses", icon: GraduationCap, text: "Learn & Grow", gradient: "from-white/80 to-white/80", border: "border border-purple-200", textColor: "text-purple-700" }
        ].map((btn, idx) => (
          <NavLink
            key={idx}
            to={btn.to}
            className={`group flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 ${btn.border || ""} ${btn.textColor} ${btn.gradient.includes("white") ? "hover:border-opacity-75" : ""} bg-gradient-to-r ${btn.gradient}`}
          >
            <btn.icon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>{btn.text}</span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        ))}
      </nav>

      {/* Buddy Finder */}
      <div className="mt-6 animate-fade-in-delay-4">
        <a
          href="https://pmcollective.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl hover:from-pink-400 hover:to-rose-400 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
          Find Your AI Buddy
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">Connect with like-minded AI enthusiasts</p>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 max-w-4xl animate-fade-in-delay-5">
        {[
          { count: "15K+", label: "AI Professionals", color: "from-green-400 to-emerald-400" },
          { count: "2K+", label: "Job Opportunities", color: "from-blue-400 to-indigo-400" },
          { count: "500+", label: "Events Hosted", color: "from-purple-400 to-pink-400" },
          { count: "50+", label: "Countries", color: "from-orange-400 to-red-400" }
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center items-center mb-1">
              <div className={`w-3 h-3 bg-gradient-to-r ${stat.color} rounded-full animate-pulse mr-2`}></div>
              <span className="text-xl sm:text-2xl font-bold text-slate-800">{stat.count}</span>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-600">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-16 max-w-6xl animate-fade-in-delay-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-10">Why Choose AI Collective?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Globe, color: "from-blue-500 to-cyan-500", title: "Global Reach", text: "Connect with AI professionals worldwide" },
            { icon: Star, color: "from-green-500 to-teal-500", title: "Quality First", text: "Curated opportunities from top companies" },
            { icon: Zap, color: "from-purple-500 to-pink-500", title: "Fast Growth", text: "Accelerate your AI career journey" },
            { icon: Users, color: "from-orange-500 to-red-500", title: "Community", text: "Learn and grow with peers" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 mb-1">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Animation styles */}
    <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 0.8s ease-out; }
      .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.15s both; }
      .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.3s both; }
      .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.45s both; }
      .animate-fade-in-delay-4 { animation: fade-in 0.8s ease-out 0.6s both; }
      .animate-fade-in-delay-5 { animation: fade-in 0.8s ease-out 0.75s both; }
      .animate-fade-in-delay-6 { animation: fade-in 0.8s ease-out 0.9s both; }
    `}</style>
  </div>
);

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/jobs" element={<div className="min-h-screen"><Jobs /></div>} />
      <Route path="/events" element={<div className="min-h-screen"><EventPage /></div>} />
      <Route path="/courses" element={<div className="min-h-screen"><Courses /></div>} />
    </Routes>
  </Router>
);

export default App;
