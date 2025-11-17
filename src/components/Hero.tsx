export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#171B2E] to-[#2a2f47] text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Sports Equipment & Apparel
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              Discover high-quality sports gear for athletes of all levels. From professional equipment to casual wear, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#CB1F2F] hover:bg-[#a31824] text-white font-semibold px-8 py-3 rounded-md transition-colors">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#171B2E] text-white font-semibold px-8 py-3 rounded-md transition-colors">
                View Collections
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#CB1F2F]/20 to-transparent rounded-full blur-3xl absolute inset-0"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-[#CB1F2F]">500+</p>
                  <p className="text-sm mt-2">Products</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-[#CB1F2F]">50+</p>
                  <p className="text-sm mt-2">Brands</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-[#CB1F2F]">10K+</p>
                  <p className="text-sm mt-2">Customers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-[#CB1F2F]">24/7</p>
                  <p className="text-sm mt-2">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
