import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Bot, Code2, Zap, TrendingUp, Shield, Cpu, ChevronRight, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleChatClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/chat');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 font-sans selection:bg-orange-600/30 relative">
      <Navbar />
      
      {/* Floating Chat Button (Left Corner) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 left-8 z-50"
      >
        <button 
          onClick={handleChatClick}
          className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] hover:scale-110 transition-all duration-300"
        >
          <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />
          <span className="absolute left-full ml-4 px-3 py-1 bg-stone-800 text-stone-200 text-sm rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with AI
          </span>
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-orange-600/20 to-purple-600/20 rounded-full blur-[120px] animate-slow-spin" 
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-blue-600/20 to-cyan-600/20 rounded-full blur-[120px] animate-float" 
          />
        </div>

        <div className="z-10 max-w-7xl w-full px-6 flex flex-col items-center text-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 
                border border-white/10 backdrop-blur-md text-sm text-stone-300 
                mb-4 shadow-glass mt-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              v2.0 is now live with advanced RAG
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white font-display leading-[0.9] drop-shadow-2xl">
              Master <br />
              <span className="text-gradient">
                Codeforces
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
              Your AI-powered competitive programming coach. Analyze, optimize, and dominate the leaderboard with personalized insights.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <Button 
                onClick={handleChatClick} 
                className="!text-lg !px-8 !py-4"
              >
                Start Chatting <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="secondary"
                className="!text-lg !px-8 !py-4"
              >
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Floating UI Elements */}
          <div className="relative w-full max-w-5xl h-[400px] mt-12 hidden md:block perspective-1000">
             <motion.div 
               initial={{ opacity: 0, rotateX: 20, y: 100 }}
               animate={{ opacity: 1, rotateX: 10, y: 0 }}
               transition={{ delay: 0.4, duration: 1 }}
               className="absolute left-1/2 -translate-x-1/2 w-full h-full preserve-3d"
             >
                <div className="glass-card w-full h-full p-1">
                   <div className="bg-stone-950/80 w-full h-full rounded-[20px] flex items-center justify-center border border-white/5 backdrop-blur-sm p-6">
                     <div className="grid grid-cols-3 gap-8 w-full h-full">
                        <div className="col-span-1 bg-stone-900/50 rounded-xl p-4 border border-white/5 flex flex-col gap-4 shadow-inner">
                            <div className="h-8 w-24 bg-stone-800 rounded-lg animate-pulse" />
                            <div className="h-32 w-full bg-stone-800/50 rounded-lg" />
                            <div className="h-4 w-full bg-stone-800/30 rounded animate-pulse" />
                            <div className="h-4 w-2/3 bg-stone-800/30 rounded animate-pulse" />
                        </div>
                        <div className="col-span-2 bg-stone-900/50 rounded-xl p-4 border border-white/5 flex flex-col gap-4 relative overflow-hidden shadow-inner">
                            <div className="absolute top-0 right-0 p-4 text-orange-500 font-mono text-xs">AI ANALYSIS_</div>
                            <div className="space-y-3 mt-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500"><Bot size={16} /></div>
                                    <div className="flex-1 bg-stone-800/50 p-3 rounded-lg rounded-tl-none text-sm text-stone-300 border border-white/5">
                                        Based on your recent submissions, you're struggling with Dynamic Programming on trees. Here's a curated problem set to help you improve.
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full" /></div>
                                    <div className="bg-orange-600 p-3 rounded-lg rounded-tr-none text-sm text-white shadow-lg shadow-orange-600/20">
                                        Can you explain the state transition for the last problem?
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-stone-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { label: "Problems Analyzed", value: "10M+" },
                { label: "Active Users", value: "50k+" },
                { label: "Rating Gained", value: "+1500" },
                { label: "AI Interactions", value: "1M+" }
            ].map((stat, i) => (
                <div key={i} className="space-y-2 group cursor-default">
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-white group-hover:text-orange-500 transition-colors duration-300">{stat.value}</h3>
                    <p className="text-stone-500 font-medium group-hover:text-stone-300 transition-colors">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-display">Supercharge your growth</h2>
                <p className="text-stone-400 max-w-2xl mx-auto text-lg">Everything you need to reach Grandmaster, powered by state-of-the-art AI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Bot, title: "AI Coach", desc: "Personalized guidance tailored to your coding style and weaknesses.", col: "md:col-span-2" },
                    { icon: TrendingUp, title: "Rating Predictor", desc: "Accurate rating forecasts based on contest performance.", col: "md:col-span-1" },
                    { icon: Code2, title: "Code Analysis", desc: "Deep static analysis to find bugs and optimize complexity.", col: "md:col-span-1" },
                    { icon: Shield, title: "Progress Report", desc: "Track your progress and identify areas for improvement.", col: "md:col-span-2" },
                    { icon: Zap, title: "Instant Feedback", desc: "Real-time hints during practice sessions.", col: "md:col-span-1" },
                    { icon: Cpu, title: "System Testing", desc: "Run your code against thousands of test cases instantly.", col: "md:col-span-1" },
                    { icon: TrendingUp, title: "Contest Strategy", desc: "AI-generated strategies for upcoming contests.", col: "md:col-span-1" }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={feature.col}
                    >
                        <Card variant="premium" className="h-full hover:border-orange-500/30 transition-colors group cursor-pointer">
                            <div className="p-3 bg-stone-800/50 w-fit rounded-xl mb-6 group-hover:bg-orange-600/20 group-hover:text-orange-500 transition-colors border border-white/5">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-display group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                            <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold font-display">Ready to ascend?</h2>
            <p className="text-xl text-stone-400">Join thousands of competitive programmers who are leveling up with CFanatic.</p>
            <div className="flex justify-center">
              <Button
                onClick={handleChatClick}
                className="!px-10 !py-5 !text-xl shadow-2xl shadow-orange-600/40"
              >
                Get Started Now
              </Button>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
