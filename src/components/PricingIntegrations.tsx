import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import shopifyLogo from '@/assets/platforms/shopify.svg';
import nextLogo from '@/assets/platforms/29next.png';
import woocommerceLogo from '@/assets/platforms/woocommerce.svg';
import bigcommerceLogo from '@/assets/platforms/bigcommerce.svg';
import magentoLogo from '@/assets/platforms/magento.svg';

const PricingIntegrations: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Seamless Platform Integration</h2>
        
        <div className="border border-emerald-100 rounded-xl p-8 bg-white shadow-sm inline-block w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-center">
                
                <div className="flex items-center gap-2 text-slate-700 font-bold text-lg">
                    <CheckCircle2 className="text-emerald-500" />
                    Available Now
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                     {/* Shopify */}
                    <div className="flex items-center gap-2">
                         <img src={shopifyLogo} alt="Shopify" className="h-7 w-auto object-contain" />
                         <span className="font-bold text-slate-700 text-sm">Shopify</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                    {/* NEXT */}
                    <div className="flex items-center gap-2">
                         <img src={nextLogo} alt="NEXT Commerce" className="h-7 w-auto object-contain" />
                         <span className="font-bold text-slate-700 text-sm">NEXT Commerce</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                    {/* Woo */}
                    <div className="flex items-center gap-2">
                         <img src={woocommerceLogo} alt="WooCommerce" className="h-7 w-auto object-contain" />
                         <span className="font-bold text-slate-700 text-sm">WooCommerce</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                    {/* BigCommerce */}
                    <div className="flex items-center gap-2">
                         <img src={bigcommerceLogo} alt="BigCommerce" className="h-7 w-auto object-contain" />
                         <span className="font-bold text-slate-700 text-sm">BigCommerce</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                     {/* Magento */}
                     <div className="flex items-center gap-2">
                         <img src={magentoLogo} alt="Magento" className="h-7 w-auto object-contain" />
                         <span className="font-bold text-slate-700 text-sm">Magento</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-12">
            <a href="https://apps.shopify.com/parcelis" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1E3A8A] hover:bg-[#172554] text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                Get Parcelis
            </a>
        </div>

      </div>
    </div>
  );
};

export default PricingIntegrations;
