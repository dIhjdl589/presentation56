import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  BarChart4,
  HeartHandshake, 
  Scale, 
  Users, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  BarChart,
  FileText,
  ScrollText,
  BrainCircuit,
  Globe,
  Laptop,
  CloudCog,
  CalendarIcon
} from 'lucide-react';

import TimelineNav from '../components/TimelineNav';
import TypewriterEffect from '../components/TypewriterEffect';
import ScrollPrompt from '../components/ScrollPrompt';
import HoverRevealCard from '../components/HoverRevealCard';
import SwotAnalysis from '../components/SwotAnalysis';
import ScaleOnScroll from '../components/ScaleOnScroll';
import ComparisonChart from '../components/ComparisonChart';
import AnimatedCounter from '../components/AnimatedCounter';
import RecommendationScenarios from '../components/RecommendationScenarios';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ResizablePanelGroup, ResizablePanel } from '@/components/ui/resizable';

const navSections = [
  { id: 'accueil', title: 'Accueil' },
  { id: 'introduction', title: 'Introduction' },
  { id: 'contexte', title: 'Enjeux' },
  { id: 'dimensions', title: 'Dimensions' },
  { id: 'dispositifs', title: 'Dispositifs' },
  { id: 'acteurs', title: 'Acteurs' },
  { id: 'theories-classiques', title: 'Théories Classiques' },
  { id: 'theories-modernes', title: 'Théories Modernes' },
  { id: 'concepts', title: 'Concepts Clés' },
  { id: 'recherches', title: 'Recherches' },
  { id: 'conclusion', title: 'Conclusion' },
  { id: 'perspectives', title: 'Perspectives' },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative bg-gray-50">
      <TimelineNav sections={navSections} />
      
      {/* Section Accueil */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center p-4 md:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute w-96 h-96 rounded-full bg-blue-500 blur-3xl top-1/4 left-1/4 animate-pulse-slow" />
          <div className="absolute w-96 h-96 rounded-full bg-teal-500 blur-3xl bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            {Array.from({ length: 12 * 12 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Clock size={24} className="text-blue-900 opacity-20" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-blue-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            L'aménagement du temps de travail
          </motion.h1>
          
          <div className="h-16 md:h-20 overflow-hidden mb-8">
            <TypewriterEffect 
              text="Fondements théoriques et conceptuels de l'aménagement du temps de travail" 
              className="text-lg md:text-2xl text-teal-600 font-montserrat"
              delay={1000}
              speed={40}
            />
          </div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            {['CHEHBOUNI-EDDAOUDI Othmane', 'BENAGHMOUCH Hamza', 'CHHOUBI Mehdi', 'EL ALEJ Abderrahmane'].map((member, index) => (
              <motion.span 
                key={index}
                className="text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 + index * 0.3 }}
              >
                {member}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-sm text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            04/13/2025
          </motion.div>
          
          <ScrollPrompt targetId="introduction" className="mt-8" text="Défiler pour explorer" />
        </div>
      </section>
      
      {/* Content Sections - Each in a ScrollArea for contained scrolling */}
      {navSections.slice(1).map((section) => (
        <section 
          key={section.id} 
          id={section.id} 
          className="section-container min-h-screen flex flex-col items-center justify-center py-12 px-4 md:px-6"
        >
          <ScrollArea className="w-full max-w-5xl mx-auto h-[calc(100vh-6rem)]">
            {section.id === 'introduction' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Introduction & Contexte</h2>
                  
                  <div className="prose-content">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Définition de l'ATT</h3>
                        <p className="mb-4 text-gray-700">
                          L'aménagement du temps de travail désigne l'ensemble des dispositifs et pratiques visant à organiser, structurer et répartir les heures de travail des salariés au sein d'une organisation. Il s'agit d'un levier stratégique à l'intersection des préoccupations économiques (productivité, compétitivité), sociales (bien-être, équilibre vie pro-vie perso) et organisationnelles (flexibilité, adaptation aux besoins).
                        </p>
                      </div>
                      <div className="relative bg-blue-50 p-4 rounded-lg flex items-center justify-center">
                        <motion.div 
                          className="absolute inset-0 opacity-10 z-0"
                          animate={{ 
                            background: [
                              "linear-gradient(45deg, #4299e1, #38b2ac)",
                              "linear-gradient(45deg, #38b2ac, #4299e1)",
                              "linear-gradient(45deg, #4299e1, #38b2ac)"
                            ]
                          }}
                          transition={{ duration: 10, repeat: Infinity }}
                        />
                        <div className="relative z-10 text-center p-2">
                          <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                          <p className="text-sm text-blue-800 font-medium">
                            Au survol du terme ATT, une infographie explicative apparaît
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Problématique centrale</h3>
                    <p className="mb-4 text-gray-700">
                      Comment concilier <motion.span 
                        className="font-bold text-blue-600"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1 }}
                      >flexibilité</motion.span> (pour répondre aux besoins des organisations et des salariés), <motion.span 
                        className="font-bold text-green-600"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >performance</motion.span> (productivité, innovation) et <motion.span 
                        className="font-bold text-purple-600"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: 0.6 }}
                      >bien-être</motion.span> (qualité de vie au travail, santé mentale) dans un environnement professionnel en constante évolution ? Cette question soulève des enjeux d'équité (accès inégal aux dispositifs), de régulation (cadre juridique adapté) et de transformation managériale (passage du contrôle à la confiance).
                    </p>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="contexte" className="mt-8" />
              </div>
            )}
            
            {section.id === 'contexte' && (
              <div className="max-w-5xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Enjeux contemporains de l'ATT</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <HoverRevealCard
                      title="Digitalisation"
                      description="Les technologies numériques ont bouleversé les modalités traditionnelles du travail, permettant une déterritorialisation des activités et une flexibilisation des temporalités."
                      icon={<Laptop />}
                      delay={0.1}
                    />
                    
                    <HoverRevealCard
                      title="Mondialisation"
                      description="La pression concurrentielle accrue pousse les organisations à optimiser leurs ressources et à adapter leurs plages de fonctionnement."
                      icon={<Globe />}
                      delay={0.3}
                    />
                    
                    <HoverRevealCard
                      title="Nouvelles attentes des salariés"
                      description="Les travailleurs, notamment les jeunes générations, privilégient l'équilibre entre vie professionnelle et personnelle, remettant en cause le modèle fordiste des horaires fixes."
                      icon={<HeartHandshake />}
                      delay={0.5}
                    />
                    
                    <HoverRevealCard
                      title="Effets post-pandémie"
                      description="La crise sanitaire a accéléré l'adoption de modalités flexibles comme le télétravail, tout en révélant des défis (porosité des frontières, isolement)."
                      icon={<CloudCog />}
                      delay={0.7}
                    />
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Satisfaction et productivité</h3>
                    
                    <div className="flex items-center justify-center gap-8 mb-4">
                      <div className="text-center">
                        <motion.div 
                          className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 relative"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span>+</span><AnimatedCounter end={27} suffix="%" />
                          <motion.div 
                            className="absolute top-0 left-0 right-0 bottom-0 bg-blue-100 rounded-lg -z-10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.3 }}
                          />
                        </motion.div>
                        <p className="text-sm text-gray-600">Satisfaction avec horaires variables</p>
                      </div>
                      
                      <div className="text-center">
                        <motion.div 
                          className="text-2xl md:text-4xl font-bold text-green-600 mb-2 relative"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span>+</span><AnimatedCounter end={18} suffix="%" />
                          <motion.div 
                            className="absolute top-0 left-0 right-0 bottom-0 bg-green-100 rounded-lg -z-10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.3 }}
                          />
                        </motion.div>
                        <p className="text-sm text-gray-600">Gain de productivité</p>
                      </div>
                    </div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="dimensions" className="mt-8" />
              </div>
            )}
            
            {section.id === 'dimensions' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Les dimensions de l'aménagement du temps de travail</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500"
                      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                        <Building2 className="mr-2 text-blue-600" />
                        Organisationnelle
                      </h3>
                      <p className="text-sm text-gray-700">
                        Outil de gestion pour adapter les ressources aux besoins (ex. : optimisation des plannings, coordination des équipes).
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500"
                      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold text-purple-700 mb-2 flex items-center">
                        <Scale className="mr-2 text-purple-600" />
                        Juridique
                      </h3>
                      <p className="text-sm text-gray-700">
                        Encadré par le Code du travail, les conventions collectives et les accords d'entreprise (ex. : durée légale, droit à la déconnexion).
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500"
                      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
                        <Users className="mr-2 text-green-600" />
                        Sociale
                      </h3>
                      <p className="text-sm text-gray-700">
                        Impact sur la qualité de vie, l'équilibre pro-perso, et la santé des travailleurs (ex. : réduction du stress ou risques de burn-out).
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500"
                      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold text-orange-700 mb-2 flex items-center">
                        <BarChart4 className="mr-2 text-orange-600" />
                        Économique
                      </h3>
                      <p className="text-sm text-gray-700">
                        Facteur de compétitivité (productivité +18%, réduction des coûts immobiliers).
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-center italic">
                      "L'aménagement du temps de travail est à l'intersection de préoccupations légales, humaines, organisationnelles et économiques."
                    </p>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="dispositifs" className="mt-8" />
              </div>
            )}
            
            {section.id === 'dispositifs' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Les dispositifs d'ATT</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div 
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-blue-50 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-center mb-2 text-blue-800">Flexibilité horaire</h3>
                      <p className="text-sm text-gray-700 text-center">
                        Plages mobiles (ex. : arrivée entre 8h et 10h), améliorant l'équilibre vie perso mais risquant la porosité des frontières.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-teal-50 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Laptop className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-center mb-2 text-teal-800">Télétravail (hybride/total)</h3>
                      <p className="text-sm text-gray-700 text-center">
                        Accéléré par la pandémie, il booste l'autonomie mais peut isoler (27% des télétravailleurs ressentent un isolement).
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-green-50 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <CalendarIcon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-center mb-2 text-green-800">Semaine compressée</h3>
                      <p className="text-sm text-gray-700 text-center">
                        4 jours/semaine pour 35h, avec gains de bien-être mais risques de surcharge journalière.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-purple-50 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Scale className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-center mb-2 text-purple-800">Temps partiel</h3>
                      <p className="text-sm text-gray-700 text-center">
                        Choix ou subi (souvent par les femmes), avec des impacts contrastés sur les carrières.
                      </p>
                    </motion.div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="acteurs" className="mt-8" />
              </div>
            )}
            
            {section.id === 'acteurs' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Les parties prenantes de l'ATT</h2>
                  
                  <div className="relative h-60 md:h-80 bg-blue-50 rounded-lg mb-8 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-md flex items-center justify-center z-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Scale className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-green-100 rounded-full shadow flex items-center justify-center"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="text-center">
                        <Users className="w-8 h-8 md:w-10 md:h-10 text-green-600 mx-auto" />
                        <span className="text-xs md:text-sm font-medium text-green-800">Salariés</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-blue-100 rounded-full shadow flex items-center justify-center"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <div className="text-center">
                        <Building2 className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto" />
                        <span className="text-xs md:text-sm font-medium text-blue-800">Employeurs</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-purple-100 rounded-full shadow flex items-center justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                      <div className="text-center">
                        <Users className="w-8 h-8 md:w-10 md:h-10 text-purple-600 mx-auto" />
                        <span className="text-xs md:text-sm font-medium text-purple-800">Syndicats</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Synthèse des intérêts</h3>
                    <p className="text-gray-700 text-sm">
                      L'ATT est un système complexe où s'articulent des intérêts parfois contradictoires. Par exemple, la flexibilité horaire peut satisfaire salariés et employeurs, mais nécessite des garde-fous pour éviter l'exploitation temporelle.
                    </p>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="theories-classiques" className="mt-8" />
              </div>
            )}
            
            {section.id === 'theories-classiques' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Fondements théoriques : Approches classiques</h2>
                  
                  <div className="relative border-l-2 border-blue-300 pl-6 py-4 ml-4 md:ml-12">
                    <motion.div 
                      className="mb-10 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-[-34px] top-0">
                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">
                          1
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-blue-800">Taylorisme (1911)</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Historique</span>
                        </div>
                        <div className="mb-2">
                          <h4 className="text-sm font-medium text-blue-700">Concept clé:</h4>
                          <p className="text-sm text-gray-700">
                            Organisation scientifique du travail, <span className="font-semibold">temps mesuré et optimisé</span> pour maximiser l'efficacité.
                          </p>
                        </div>
                        <div className="mb-2">
                          <h4 className="text-sm font-medium text-blue-700">Application à l'ATT:</h4>
                          <p className="text-sm text-gray-700">
                            Horaires fixes, segmentation des tâches.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-blue-700">Limites:</h4>
                          <p className="text-sm text-gray-700">
                            Rigidité, négation des besoins individuels.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-[-34px] top-0">
                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">
                          2
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-blue-800">Fordisme (1922)</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Historique</span>
                        </div>
                        <div className="mb-2">
                          <h4 className="text-sm font-medium text-blue-700">Concept clé:</h4>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Temps standardisé</span> (journée de 8h, semaine de 5 jours), synchronisation des masses ouvrières.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-blue-700">Héritage:</h4>
                          <p className="text-sm text-gray-700">
                            Modèle dominant du XXe siècle, aujourd'hui remis en cause par la flexibilisation.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="theories-modernes" className="mt-8" />
              </div>
            )}
            
            {section.id === 'theories-modernes' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Fondements théoriques : Approches contemporaines</h2>
                  
                  <div className="relative border-l-2 border-blue-300 pl-6 py-4 ml-4 md:ml-12">
                    <motion.div 
                      className="mb-10 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-[-34px] top-0">
                        <div className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-white text-xs">
                          1
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-teal-800">Régulation sociale (Reynaud, 1989)</h3>
                          <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Contemporain</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          Les temps de travail sont <span className="font-semibold">négociés</span> entre acteurs (employeurs, salariés, syndicats).
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-teal-700 font-medium">
                          <span className="bg-teal-100 px-2 py-1 rounded-full">Concertation</span>
                          <span className="bg-teal-100 px-2 py-1 rounded-full">Compromis</span>
                          <span className="bg-teal-100 px-2 py-1 rounded-full">Dialogue social</span>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-[-34px] top-0">
                        <div className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-white text-xs">
                          2
                        </div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-teal-800">Théorie des frontières temporelles (Clark, 2000)</h3>
                          <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Contemporain</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-semibold">Porosité</span> entre vie professionnelle et personnelle, accentuée par le numérique.
                        </p>
                        <div>
                          <h4 className="text-sm font-medium text-teal-700">Enjeu:</h4>
                          <p className="text-sm text-gray-700">
                            Risque de "travail sans fin" (ex. : emails en soirée).
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="concepts" className="mt-8" />
              </div>
            )}
            
            {section.id === 'concepts' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Concepts clés liés à l'ATT</h2>
                  
                  <div className="relative bg-blue-50 rounded-lg p-6 mb-8 min-h-[200px]">
                    <motion.div 
                      className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="bg-blue-600 text-white rounded-full px-4 py-2 font-bold shadow-lg">
                        QVT
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute right-1/3 top-1/3 transform translate-x-1/2 -translate-y-1/2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{ duration: 3, delay: 1, repeat: Infinity }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="bg-green-600 text-white rounded-full px-4 py-2 font-bold shadow-lg">
                        EVPP
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 translate-y-1/2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{ duration: 3, delay: 2, repeat: Infinity }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="bg-purple-600 text-white rounded-full px-4 py-2 font-bold shadow-lg">
                        ATT
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                        <HeartHandshake className="mr-2 text-blue-600 w-5 h-5" />
                        QVT (Qualité de Vie au Travail)
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        <span className="font-medium">Définition:</span> Équilibre entre exigences professionnelles et bien-être (ANACT, 2013).
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Lien avec l'ATT:</span> Les dispositifs flexibles améliorent la QVT (+27% de satisfaction).
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                        <Scale className="mr-2 text-green-600 w-5 h-5" />
                        EVPP (Équilibre Vie Pro/Vie Perso)
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Conflit temps travail-famille -38% avec des horaires flexibles.
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">Conflit</span>
                        <span className="h-px w-10 bg-gray-300"></span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Équilibre</span>
                        <span className="h-px w-10 bg-gray-300"></span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">Harmonie</span>
                      </div>
                    </div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="recherches" className="mt-8" />
              </div>
            )}
            
            {section.id === 'recherches' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Recherches et tendances actuelles</h2>
                  
                  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="p-4 bg-blue-50 border-b border-blue-100">
                      <h3 className="text-lg font-semibold text-blue-800 flex items-center">
                        <BrainCircuit className="mr-2 text-blue-600" />
                        Laboratoire de recherche
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
                      <div className="bg-white p-4">
                        <motion.div 
                          className="h-24 bg-gradient-to-b from-blue-100 to-blue-50 rounded-lg mb-3 relative overflow-hidden"
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div 
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-blue-200"
                            animate={{ 
                              height: ["40%", "60%", "50%", "70%", "40%"],
                              backgroundColor: ["#DBEAFE", "#93C5FD", "#DBEAFE"]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-semibold text-blue-800 bg-white px-2 py-1 rounded">
                              Tendance
                            </span>
                          </div>
                        </motion.div>
                        <h4 className="font-medium text-base mb-1 text-blue-700">Individualisation des temps</h4>
                        <p className="text-xs text-gray-600">
                          Contrats temporels "à la carte" (ex. : choix des plages horaires).
                        </p>
                      </div>
                      
                      <div className="bg-white p-4">
                        <motion.div 
                          className="h-24 bg-gradient-to-b from-purple-100 to-purple-50 rounded-lg mb-3 relative overflow-hidden"
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div 
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-purple-200"
                            animate={{ 
                              height: ["60%", "40%", "70%", "50%", "60%"],
                              backgroundColor: ["#EDE9FE", "#C4B5FD", "#EDE9FE"]
                            }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-semibold text-purple-800 bg-white px-2 py-1 rounded">
                              Tendance
                            </span>
                          </div>
                        </motion.div>
                        <h4 className="font-medium text-base mb-1 text-purple-700">Hybridation du travail</h4>
                        <p className="text-xs text-gray-600">
                          Effacement des frontières spatio-temporelles (télétravail, travail multi-lieux).
                        </p>
                      </div>
                      
                      <div className="bg-white p-4">
                        <motion.div 
                          className="h-24 bg-gradient-to-b from-orange-100 to-orange-50 rounded-lg mb-3 relative overflow-hidden"
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div 
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-orange-200"
                            animate={{ 
                              height: ["50%", "70%", "40%", "60%", "50%"],
                              backgroundColor: ["#FFEDD5", "#FED7AA", "#FFEDD5"]
                            }}
                            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-semibold text-orange-800 bg-white px-2 py-1 rounded">
                              Controverses
                            </span>
                          </div>
                        </motion.div>
                        <h4 className="font-medium text-base mb-1 text-orange-700">Équilibre des résultats</h4>
                        <p className="text-xs text-gray-600">
                          Gains de productivité (+18%) coexistent avec des risques psycho-sociaux (isolement, surcharge).
                        </p>
                      </div>
                    </div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="conclusion" className="mt-8" />
              </div>
            )}
            
            {section.id === 'conclusion' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Conclusion & enseignements clés</h2>
                  
                  <div className="bg-white rounded-lg shadow-md p-5 mb-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">ATT = levier multidimensionnel</h3>
                    
                    <motion.div 
                      className="mb-5 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base font-medium text-blue-800 mb-1">Performance:</h4>
                      <p className="text-sm text-gray-700">
                        Les dispositifs flexibles (télétravail, horaires variables) améliorent la productivité (+18%) et la satisfaction (+27%).
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-5 bg-green-50 p-3 rounded-lg border-l-4 border-green-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base font-medium text-green-800 mb-1">Bien-être:</h4>
                      <p className="text-sm text-gray-700">
                        Réduction du stress et meilleur équilibre vie pro-vie perso, mais sous conditions (encadrement, droit à la déconnexion).
                      </p>
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Disparités sectorielles et sociales</h3>
                    
                    <motion.div 
                      className="mb-5 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base font-medium text-yellow-800 mb-1">Sectorielles:</h4>
                      <p className="text-sm text-gray-700">
                        Inégalités d'accès entre secteurs (flexibilité accrue dans les services vs. contraintes industrielles).
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-5 bg-red-50 p-3 rounded-lg border-l-4 border-red-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-base font-medium text-red-800 mb-1">Socioprofessionnelles:</h4>
                      <p className="text-sm text-gray-700">
                        Les cadres bénéficient plus de l'autonomie que les ouvriers ou employés (fracture temporelle).
                      </p>
                    </motion.div>
                  </div>
                </ScaleOnScroll>
                <ScrollPrompt targetId="perspectives" className="mt-8" />
              </div>
            )}
            
            {section.id === 'perspectives' && (
              <div className="max-w-4xl mx-auto">
                <ScaleOnScroll>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Vers une gouvernance innovante du temps de travail</h2>
                  
                  <div className="relative h-48 mb-8">
                    <div className="absolute inset-x-0 bottom-0 h-5 bg-blue-800 opacity-20 rounded"></div>
                    <div className="absolute inset-x-0 bottom-[20px] h-0.5 bg-blue-800 opacity-30"></div>
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 w-12 h-12 bg-blue-50 rounded-full border-2 border-blue-500 flex items-center justify-center"
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <Clock className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    
                    <div className="absolute top-0 left-0 right-0 text-center">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">Pour les organisations</h3>
                      <p className="text-sm text-gray-700 bg-white p-2 rounded-lg shadow-sm inline-block">
                        Développer des politiques d'ATT <span className="font-semibold">sur mesure</span>, combinant flexibilité et garde-fous collectifs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <h3 className="text-lg font-semibold text-blue-700 mb-3">Pour la recherche</h3>
                      <p className="text-sm text-gray-700">
                        Approfondir les effets à long terme (santé, innovation) et les modèles émergents (semaine de 4 jours, travail asynchrone).
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <h3 className="text-lg font-semibold text-blue-700 mb-3">Message final</h3>
                      <motion.div 
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Scale className="w-10 h-10 text-blue-600 mr-3" />
                        <p className="text-sm text-gray-700 font-medium">
                          ATT = équilibre dynamique entre efficacité économique et justice sociale
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <ScrollPrompt targetId="accueil" className="mt-6" text="Retour au début" />
                  </div>
                </ScaleOnScroll>
              </div>
            )}
          </ScrollArea>
        </section>
      ))}
    </div>
  );
};

export default Index;
