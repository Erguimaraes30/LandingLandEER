import { BudgetCalculator } from './components/BudgetCalculator.jsx';
import { FinalCTA } from './components/FinalCTA.jsx';
import { Footer } from './components/Footer.jsx';
import { Hero } from './components/Hero.jsx';
import { Navbar } from './components/Navbar.jsx';
// import { Portfolio } from './components/Portfolio.jsx';
import { Process } from './components/Process.jsx';
import { Problem } from './components/Problem.jsx';
import { Services } from './components/Services.jsx';
import { Solution } from './components/Solution.jsx';
import { SplashOverlay } from './components/SplashOverlay.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-white">
      <Navbar />
      <SplashOverlay />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <BudgetCalculator />
        {/* <Portfolio /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
