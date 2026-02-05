
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PropertyList from './components/PropertyList';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

const App: React.FC = () => {
  const [modalType, setModalType] = useState<string | null>(null);

  const openForm = (type: string) => setModalType(type);
  const closeForm = () => setModalType(null);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar onContactClick={() => openForm('short')} />
      
      <main>
        <Hero 
          onFindHome={() => openForm('qualifying')} 
          onEstimate={() => openForm('qualifying')} 
        />

        <Features />

        <PropertyList />

        <Testimonials />

        <CTA 
          onEstimate={() => openForm('qualifying')} 
          onAppointment={() => openForm('short')}
        />
      </main>

      <Footer />

      <FormModal 
        isOpen={!!modalType} 
        onClose={closeForm} 
        type={modalType || 'short'} 
      />
    </div>
  );
};

export default App;
