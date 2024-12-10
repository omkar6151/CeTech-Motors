import React from 'react';

const Features = () => {
  return (
    <section className="py-8 md:py-10 bg-orange-600">
      <div className="container mx-auto px-6 lg:px-[12rem]">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 text-white">Salient Features of the CeTech Engines</h2>

        {/* Latest CRDi Technology */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white text-center opacity-90">The Latest CRDi Technology</h3>
          <p className="text-sm md:text-base lg:text-lg text-white text-justify mb-3 md:mb-4">CeTech 4-stroke, liquid-cooled diesel engines are modelled on CRDi technology and manufactured in technical collaboration with RICARDO, UK. The Common Rail Systems are governed by an engine control unit (ECU) which opens each injector electronically rather than mechanically. As a result, the fuel that is injected atomises easily and burns cleanly, reducing exhaust emissions and increasing efficiency. Cooper engines, available in gas as well as diesel variants, with power ranging from 26 to 340hp, finds extensive application worldwide.</p>
        </div>

        {/* Quality Edge & After-Sales Service */}
        <div className="flex flex-wrap mb-8 md:mb-12">
          {/* Quality Edge */}
          <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white opacity-90">The Quality Edge</h3>
            <p className="text-sm md:text-base lg:text-lg text-white mb-3 md:mb-4 text-justify">Each CeTech product undergoes stringent quality control tests, right from the sourcing of raw materials to the manufacture of finished products. Documentation and evaluation of all critical manufacturing steps - from material composition to final inspection before dispatch - ensures that we consistently produce top quality products as per international standards.</p>
          </div>
          
          {/* After-Sales Service */}
          <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white opacity-90">After-Sales Service</h3>
            <p className="text-sm md:text-base lg:text-lg text-white mb-3 md:mb-4 text-justify">CeTech Engines come with the Cooper guarantee of quality; hence, breakdowns are never a concern. We have a nationwide network of service dealers who are well-equipped with genuine spare parts stock and ready to provide prompt after-sales service. We also invite interested and capable parties to be our authorised sales and service dealer for unrepresented areas.</p>
          </div>
        </div>

        {/* Diverse Applications & Compact & Rugged */}
        <div className="flex flex-wrap">
          {/* Diverse Applications */}
          <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white opacity-90">Diverse Applications</h3>
            <p className="text-sm md:text-base lg:text-lg text-white mb-3 md:mb-4 text-justify">CeTech Engines are used to power many applications. Some of these are forklift trucks, earth-moving machinery, de-watering pump sets, agricultural pump sets, fire-fighting pump sets, marine, lift irrigation pump sets, etc.</p>
          </div>
          
          {/* Compact & Rugged */}
          <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white opacity-90">Compact & Rugged</h3>
            <p className="text-sm md:text-base lg:text-lg text-white mb-3 md:mb-4 text-justify">CeTech Engines are compact and occupy less space per unit output.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
