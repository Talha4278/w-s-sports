import { Dumbbell, Trophy, ShirtIcon, Footprints, Target, Bike } from 'lucide-react';

const categories = [
  { name: 'Fitness Equipment', icon: Dumbbell, color: 'bg-blue-500' },
  { name: 'Team Sports', icon: Trophy, color: 'bg-green-500' },
  { name: 'Sports Apparel', icon: ShirtIcon, color: 'bg-purple-500' },
  { name: 'Footwear', icon: Footprints, color: 'bg-orange-500' },
  { name: 'Training Gear', icon: Target, color: 'bg-red-500' },
  { name: 'Outdoor Sports', icon: Bike, color: 'bg-teal-500' }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171B2E] mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of sports equipment and apparel
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-center text-sm font-semibold text-[#171B2E]">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
