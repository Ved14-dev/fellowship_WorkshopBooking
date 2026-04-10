import React from 'react';

// Landing page showcasing FOSSEE workshop program with hero section, impact metrics, and testimonial
const Home = () => {
  const advantages = [
    {
      title: 'Learn for Free',
      description: 'Access high-quality workshop materials without any cost'
    },
    {
      title: 'Many Practice Problems',
      description: 'Comprehensive problem sets to reinforce your learning'
    },
    {
      title: 'Instructor Support',
      description: 'Get guidance from experienced instructors throughout'
    }
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      {/* Metrics (10,000+ students, 150+ colleges, 33 hours) derived from official FOSSEE workshop data */}
      <section className="min-h-[600px] bg-slate-50 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
              FOSSEE Python Workshop
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Learn Python for free with instructor support and e-certificates. Join thousands of students 
              from across India who have mastered programming through our comprehensive workshop program.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl">
              Start Learning
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-xl flex items-center justify-center border-4 border-blue-200">
              <img 
                src="/image_ad7f99.jpg" 
                alt="FOSSEE Workshop" 
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="text-center text-blue-600 font-semibold text-lg p-6">
                Workshop Classroom
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">10,000+</p>
              <p className="text-blue-100 mt-1">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold">150+</p>
              <p className="text-blue-100 mt-1">Colleges Partnered</p>
            </div>
            <div>
              <p className="text-4xl font-bold">33</p>
              <p className="text-blue-100 mt-1">Hours of Material</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose FOSSEE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{adv.title}</h3>
                <p className="text-slate-600 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-lg">
          <p className="text-lg text-slate-700 italic leading-relaxed mb-4">
            "The workshop content is meticulously structured with excellent quizzes. The instructors are 
            responsive and provide meaningful feedback. It's a comprehensive learning experience that aligns 
            perfectly with industry standards."
          </p>
          <p className="text-slate-900 font-semibold">Suvigya Agrawal</p>
          <p className="text-slate-600">Manipal Institute of Technology</p>
        </div>
      </section>
    </div>
  );
};

export default Home;