import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: '100% authentic products'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Safe & encrypted checkout'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help you'
  }
];

export default function Features() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-[#CB1F2F] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#171B2E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
