import Hero from '@/components/Hero';
import RiskEducation from '@/components/RiskEducation';
import PenaltyCalculator from '@/components/PenaltyCalculator';
import WhyParcelis from '@/components/WhyParcelis';
import RiskCalculatorCTA from '@/components/RiskCalculatorCTA';

const RiskCalculatorPage = () => {

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <RiskEducation />
      <PenaltyCalculator />
      <WhyParcelis />
      <RiskCalculatorCTA />
    </div>
  );
};

export default RiskCalculatorPage;
