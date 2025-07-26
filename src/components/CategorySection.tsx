
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      title: "Men's Collection",
      description: "Formal, Casual, Party & Seasonal Wear",
      gradient: "from-slate-800 to-blue-900",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/men"
    },
    {
      title: "Women's Collection",
      description: "Ethnic, Western, Party & Designer Wear",
      gradient: "from-blue-800 to-slate-900",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/women"
    },
    {
      title: "Children's Collection",
      description: "Comfortable, Colorful & Playful Designs",
      gradient: "from-slate-700 to-blue-800",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/children"
    }
  ];

  const occasions = [
    { name: "Formal", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", link: "/occasions?type=formal" },
    { name: "Casual", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", link: "/occasions?type=casual" },
    { name: "Party", image: "https://images.unsplash.com/photo-1566479179817-6e7adf0b8074?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", link: "/party-wear" },
    { name: "Wedding", image: "https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", link: "/wedding-wear" },
    { name: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", link: "/occasions?type=sports" },
    { name: "Traditional", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", link: "/occasions?type=traditional" }
  ];

  const seasons = [
    { name: "Spring", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", color: "from-blue-600 to-slate-700", link: "/spring-collection" },
    { name: "Summer", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", color: "from-slate-600 to-blue-700", link: "/summer-collection" },
    { name: "Autumn", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", color: "from-blue-700 to-slate-800", link: "/seasonal?season=autumn" },
    { name: "Winter", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", color: "from-slate-800 to-blue-900", link: "/seasonal?season=winter" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Categories */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover fashion for every member of your family
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <Card className="relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl h-80">
                <div className="absolute inset-0">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`}></div>
                </div>
                <div className="relative p-8 text-white text-center space-y-4 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-lg opacity-90">{category.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Explore Collection
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Occasions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Shop by Occasion</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion, index) => (
              <Link key={index} to={occasion.link}>
                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 h-32">
                  <img 
                    src={occasion.image} 
                    alt={occasion.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4">
                    <h4 className="font-semibold text-white text-center">{occasion.name}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Seasons */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Shop by Season</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {seasons.map((season, index) => (
              <Link key={index} to={season.link}>
                <div className="relative overflow-hidden rounded-2xl cursor-pointer group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl h-48">
                  <img 
                    src={season.image} 
                    alt={season.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-70`}></div>
                  <div className="relative p-8 text-white text-center flex flex-col justify-center h-full">
                    <h4 className="text-xl font-bold">{season.name}</h4>
                    <p className="text-sm opacity-90 mt-2">Collection 2024</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
