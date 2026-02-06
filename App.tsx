import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import PropertyList from "./PropertyList";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";
import FormModal from "./FormModal";

type Filters = { type?: string; location?: string };

const App: React.FC = () => {
  const [modalType, setModalType] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});

  const openForm = (type: string) => setModalType(type);
  const closeForm = () => setModalType(null);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar onContactClick={() => openForm("short")} />

      <main>
        <Hero
          onFindHome={() => openForm("qualifying")}
          onEstimate={() => openForm("estimation")}
          onSearch={(next) => {
            setFilters(next);
            document
              .getElementById("nos-biens")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <Features />

        <PropertyList filters={filters} />

        <Testimonials />

        <CTA
          onEstimate={() => openForm("estimation")}
          onAppointment={() => openForm("short")}
        />
      </main>

      <Footer />

      <FormModal
        isOpen={!!modalType}
        onClose={closeForm}
        type={modalType || "short"}
      />
    </div>
  );
};

export default App;
