import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("100");

  const packageValue = parseFloat(inputValue) || 0;
  const calculatedCost = packageValue <= 200 
    ? 2.50 
    : 2.50 + (Math.ceil((packageValue - 200) / 100) * 1.25);
  const cost = Math.min(calculatedCost, 200);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(val);
  };

  return (
    <div className="bg-white py-12 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-primary/10 text-primary mb-4 shadow-sm">
            <Calculator size={16} className="mr-2" strokeWidth={2} /> Interactive Tool
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mb-3">Transparent Pricing Calculator</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            See exactly what comprehensive package protection costs for your shipment values.
          </p>
        </div>

        {/* Compact Calculator Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
            {/* Input Section */}
            <div>
              <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wide">Package Value</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-muted-foreground font-bold text-lg">$</span>
                </div>
                <input 
                  type="number" 
                  value={inputValue}
                  onChange={handleInputChange}
                  step="1"
                  className="block w-full pl-9 pr-4 py-3 text-lg border-2 border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-foreground bg-background [&::-webkit-inner-spin-button]:opacity-100 [&::-webkit-inner-spin-button]:cursor-pointer [&::-webkit-outer-spin-button]:opacity-100 [&::-webkit-outer-spin-button]:cursor-pointer"
                  placeholder="Enter value"
                />
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>

            {/* Result Section */}
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Your Cost</p>
              <p className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {formatCurrency(cost)}
              </p>
            </div>
          </div>

          {/* Compact Benefits Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 pt-6 border-t border-border">
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Per-package pricing
            </span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Full coverage
            </span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              No contracts or fees
            </span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white border border-border rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-8">
              <Package className="w-14 h-14 text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="text-4xl font-bold text-primary mb-3">$2,500</h4>
            <p className="text-base text-muted-foreground font-medium">maximum coverage per box</p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-8">
              <Package className="w-14 h-14 text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="text-4xl font-bold text-primary mb-3">$25,000</h4>
            <p className="text-base text-muted-foreground font-medium">maximum coverage per shipment</p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-8">
              <ShieldCheck className="w-14 h-14 text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-3 mt-1">All Carriers</h4>
            <p className="text-base text-muted-foreground mt-1 px-2 leading-tight font-medium">USPS, UPS, FedEx, DHL, international</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="inline-block bg-primary text-primary-foreground font-bold py-4 px-10 rounded-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg">
            See How It Works
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PricingCalculator;
