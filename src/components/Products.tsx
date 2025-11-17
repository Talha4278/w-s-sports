import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Professional Soccer Ball',
    price: 49.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Running Shoes Pro',
    price: 129.99,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Fitness Dumbbells Set',
    price: 89.99,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Sports Training Jersey',
    price: 39.99,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1556663/pexels-photo-1556663.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Basketball Premium',
    price: 59.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Yoga Mat Premium',
    price: 44.99,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Tennis Racket Pro',
    price: 149.99,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Cycling Helmet',
    price: 79.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171B2E] mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Check out our best-selling sports equipment and gear
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#CB1F2F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sale
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#171B2E] mb-2 group-hover:text-[#CB1F2F] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#CB1F2F]">
                    ${product.price}
                  </span>
                  <button className="bg-[#171B2E] hover:bg-[#CB1F2F] text-white p-2 rounded-lg transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#CB1F2F] hover:bg-[#a31824] text-white font-semibold px-8 py-3 rounded-md transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
