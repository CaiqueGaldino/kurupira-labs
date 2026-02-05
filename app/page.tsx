import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import AboutLabs from '@/components/AboutLabs';
import HowICreate from '@/components/HowICreate';
import WhatAppearsHere from '@/components/WhatAppearsHere';
import WhatMovesMe from '@/components/WhatMovesMe';
import Closing from '@/components/Closing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Projects />
      <AboutLabs />
      <HowICreate />
      <WhatAppearsHere />
      <WhatMovesMe />
      <Closing />
      <Footer />
    </div>
  );
}
