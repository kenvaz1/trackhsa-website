import React, { useState, useEffect } from 'react'
import { 
  Scan, 
  FolderOpen, 
  Brain, 
  Shield, 
  Menu,
  X,
  Apple,
  ChevronDown,
  ChevronRight,
  Heart,
  DollarSign,
  Search,
  BarChart3,
  Lock,
  Stethoscope,
  Pill,
  Eye,
  Camera,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Star
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI-Powered Extraction",
      description: "Instantly extracts provider names, amounts, dates, and line items from medical receipts with over 95% accuracy."
    },
    {
      icon: <FolderOpen className="w-7 h-7" />,
      title: "Auto-Categorization",
      description: "Receipts are automatically sorted into Medical, Dental, Vision, Pharmacy, and other HSA-eligible categories."
    },
    {
      icon: <Camera className="w-7 h-7" />,
      title: "Scan & Go",
      description: "Snap a photo and let AI do the rest. Batch scan multiple receipts at once for maximum efficiency."
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "Instant Search",
      description: "Find any receipt by provider, amount, date, or category. Never lose track of an HSA expense again."
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Spending Insights",
      description: "Visualize your HSA spending across categories and time periods to make smarter healthcare decisions."
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Private & Secure",
      description: "Your health data stays yours. Encrypted storage with industry-standard security practices."
    }
  ]

  const hsaCategories = [
    { name: "Medical", icon: <Stethoscope className="w-6 h-6" />, color: "bg-red-50 text-red-600 border-red-100" },
    { name: "Dental", icon: <Heart className="w-6 h-6" />, color: "bg-blue-50 text-blue-600 border-blue-100" },
    { name: "Vision", icon: <Eye className="w-6 h-6" />, color: "bg-purple-50 text-purple-600 border-purple-100" },
    { name: "Pharmacy", icon: <Pill className="w-6 h-6" />, color: "bg-green-50 text-green-600 border-green-100" },
  ]

  const benefits = [
    "Never miss an HSA-eligible deduction",
    "Organized records for tax season",
    "Track spending across all healthcare categories",
    "Export receipts for reimbursement claims",
    "AI handles the tedious data entry",
    "Works with any medical receipt format"
  ]

  const testimonials = [
    {
      text: "TrackHSA saved me hours during tax season. I had every medical receipt organized and ready to go. The AI is shockingly accurate.",
      author: "Sarah M.",
      role: "HSA Account Holder",
      stars: 5
    },
    {
      text: "I used to throw receipts in a drawer and hope for the best. Now I scan them in seconds and everything is categorized automatically.",
      author: "James T.",
      role: "Family Plan Member",
      stars: 5
    },
    {
      text: "The auto-categorization is a game changer. Medical, dental, vision, pharmacy - it gets it right every time. Highly recommend.",
      author: "Maria G.",
      role: "FSA Account Holder",
      stars: 5
    },
    {
      text: "Finally an app that understands HSA receipts. It even picks up line items from complex medical bills. Worth every penny of the premium.",
      author: "David K.",
      role: "HSA Investor",
      stars: 5
    }
  ]

  const faqs = [
    {
      question: "What is an HSA and why do I need to track receipts?",
      answer: "A Health Savings Account (HSA) lets you save pre-tax money for qualified medical expenses. Keeping receipts is essential for tax documentation, reimbursement claims, and proving expenses are HSA-eligible. TrackHSA makes this effortless."
    },
    {
      question: "Does TrackHSA work with FSA receipts too?",
      answer: "Absolutely! TrackHSA works with HSA, FSA, and HRA receipts. Any healthcare-related expense receipt can be scanned, categorized, and organized."
    },
    {
      question: "How accurate is the AI at reading medical receipts?",
      answer: "Our AI achieves over 95% accuracy extracting data from medical receipts including provider names, amounts, dates, and individual line items. It handles everything from simple copay receipts to complex medical bills."
    },
    {
      question: "What's included in the Free vs Premium tier?",
      answer: "Free includes up to 20 AI receipt scans per day, auto-categorization, search, folder organization, and unlimited PDF/CSV report generation + sharing, with occasional ads. Premium ($4.99/month) removes ads and unlocks unlimited AI scanning."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes. Your receipt data is stored locally on your device and protected using iOS data protection. We currently do not offer cloud backup or multi-device sync. If you use AI analysis, receipt text is securely processed to extract receipt details and return results to your app. We do not sell your data."
    },
    {
      question: "Can I export receipts for reimbursement?",
      answer: "Yes. Both Free and Premium include unlimited PDF/CSV report generation and sharing. Export individual receipts or full categories for reimbursement claims or tax prep."
    },
    {
      question: "Does it work with all types of medical receipts?",
      answer: "Yes. Our AI is trained on receipts from hospitals, doctor's offices, dentists, optometrists, pharmacies, labs, and more. It adapts to different formats automatically."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TrackHSA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary-700 transition font-medium text-sm">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-primary-700 transition font-medium text-sm">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-primary-700 transition font-medium text-sm">
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-primary-700 transition font-medium text-sm">
                FAQ
              </button>
              <button onClick={() => scrollToSection('download')} className="bg-primary-600 text-white px-5 py-2 rounded-full hover:bg-primary-700 transition text-sm font-semibold shadow-sm">
                Download Free
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 py-3 px-3 rounded-lg transition">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 py-3 px-3 rounded-lg transition">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 py-3 px-3 rounded-lg transition">
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 py-3 px-3 rounded-lg transition">
                FAQ
              </button>
              <button onClick={() => scrollToSection('download')} className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition w-full font-semibold mt-2">
                Download Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary-100/60 via-accent-100/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-primary-50/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered HSA Receipt Tracking</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Your HSA Receipts,
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent pb-2">
                Organized by AI
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Scan medical receipts, auto-categorize HSA-eligible expenses, and stay tax-ready year-round. Stop losing receipts. Start saving smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#download" 
                className="group bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all flex items-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Apple className="w-7 h-7" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                  <div className="text-lg font-semibold -mt-0.5">App Store</div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <button 
                onClick={() => scrollToSection('features')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 transition-all font-semibold"
              >
                See How It Works
              </button>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              Free to use &bull; No credit card required &bull; Premium available
            </p>
          </div>

          {/* HSA Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-14">
            {hsaCategories.map((cat, i) => (
              <div key={i} className={`flex items-center space-x-2 px-5 py-2.5 rounded-full border ${cat.color} animate-slide-up`} style={{ animationDelay: `${i * 0.1}s` }}>
                {cat.icon}
                <span className="font-semibold text-sm">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">95%+</div>
              <div className="text-sm text-gray-500 mt-1">AI Accuracy</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-500 mt-1">App Store Rating</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-500 mt-1">Expense Categories</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-500 mt-1">Free Core Features</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <br />Track HSA Expenses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From scanning to tax-ready exports, TrackHSA handles the entire lifecycle of your healthcare receipts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-7 rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TrackHSA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Why TrackHSA</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Stop Losing Money on Untracked HSA Expenses
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The average American leaves <strong>$1,000+ in HSA tax savings</strong> on the table each year due to lost or unorganized receipts. TrackHSA ensures every eligible expense is captured and categorized.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl shadow-primary-200/30 border border-gray-100 p-8">
                <div className="space-y-4">
                  {/* Mock receipt cards */}
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="w-5 h-5 text-red-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Dr. Smith Family Practice</div>
                        <div className="text-xs text-gray-500">Jan 15, 2026 &bull; Medical</div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900">$185.00</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Bright Smile Dental</div>
                        <div className="text-xs text-gray-500">Jan 22, 2026 &bull; Dental</div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900">$320.00</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-purple-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">ClearView Optometry</div>
                        <div className="text-xs text-gray-500">Feb 3, 2026 &bull; Vision</div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900">$250.00</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center space-x-3">
                      <Pill className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">CVS Pharmacy</div>
                        <div className="text-xs text-gray-500">Feb 8, 2026 &bull; Pharmacy</div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-900">$45.99</div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total HSA Expenses</span>
                  <span className="text-xl font-bold text-primary-700">$800.99</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary-100 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Three Steps to HSA Clarity
            </h2>
            <p className="text-lg text-gray-600">
              From receipt to organized record in seconds
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scan Your Receipt</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Open the app and snap a photo of any medical, dental, vision, or pharmacy receipt. Batch scan multiple at once.
              </p>
              <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-gray-300" />
            </div>
            
            <div className="relative text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Does the Work</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our AI extracts provider, amount, date, and line items, then auto-categorizes it as Medical, Dental, Vision, or Pharmacy.
              </p>
              <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-gray-300" />
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay Tax-Ready</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All receipts are organized in smart folders. Search, export, or review anytime. Tax season becomes effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Reviews</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by HSA Holders
            </h2>
            <p className="text-lg text-gray-600">
              See why people love managing their healthcare expenses with TrackHSA
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Take Control of Your
                <br />HSA Expenses Today
              </h2>
              <p className="text-lg text-white/85 mb-10 max-w-xl mx-auto">
                Download TrackHSA and never lose track of a healthcare receipt again. Your future self at tax time will thank you.
              </p>
              <a 
                href="https://apps.apple.com/app/your-app-id" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl group"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">Download on the</div>
                  <div className="text-xl font-semibold -mt-0.5">App Store</div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <p className="mt-6 text-white/60 text-sm">
                Free to download &bull; Premium available for $4.99/month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">TrackHSA</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered HSA & FSA receipt tracking. Scan, organize, and stay tax-ready with zero effort.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('features')} className="block text-gray-400 hover:text-white transition text-sm">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block text-gray-400 hover:text-white transition text-sm">How It Works</button>
                <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-white transition text-sm">FAQ</button>
                <button onClick={() => scrollToSection('download')} className="block text-gray-400 hover:text-white transition text-sm">Download</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <div className="space-y-3">
                <a href="/privacy-policy.html" className="block text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
                <a href="/terms-of-service.html" className="block text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
                <a href="mailto:support@trackhsaapp.com" className="block text-gray-400 hover:text-white transition text-sm">Contact Support</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Innovative AI Apps LLC. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs">
              HSA, FSA, and HRA are account types offered by employers and financial institutions. TrackHSA is not affiliated with any HSA provider.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
