import React, { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';

// Analytics dashboard modernizing the legacy FOSSEE filtering system with dynamic charts and tabular data
const StatsView = () => {
  // Filter state maintains workshop type and date range selections, replicating legacy system UX while enabling modern visualizations
  const [selectedType, setSelectedType] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  // Sample workshop data spanning programming, web, data science, and database domains
  const workshops = [
    { id: 1, name: 'Python Basics', coordinator: 'Dr. Priya Kumar', institute: 'IIT Bombay', date: '2024-01-15', type: 'programming' },
    { id: 2, name: 'Web Development', coordinator: 'Prof. Rajesh', institute: 'Delhi University', date: '2024-02-10', type: 'web' },
    { id: 3, name: 'Data Science Intro', coordinator: 'Dr. Amit Sharma', institute: 'Mumbai University', date: '2024-02-20', type: 'data' },
    { id: 4, name: 'Advanced Python', coordinator: 'Dr. Priya Kumar', institute: 'IIT Bombay', date: '2024-03-05', type: 'programming' },
    { id: 5, name: 'Database Design', coordinator: 'Prof. Neha Singh', institute: 'Pune Institute', date: '2024-03-15', type: 'database' },
  ];

  return (
    <div className="flex-grow p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Workshop Statistics</h1>
          <p className="text-slate-600">Comprehensive overview of all conducted workshops</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Filter size={20} /> Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Workshop Type</label>
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="all">All Types</option>
                    <option value="programming">Programming</option>
                    <option value="web">Web</option>
                    <option value="data">Data Science</option>
                    <option value="database">Database</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Date Range</label>
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="all">All Time</option>
                    <option value="month">This Month</option>
                    <option value="quarter">This Quarter</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Chart Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-4">State-wise Distribution</h3>
                <div className="h-48 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg flex items-end justify-around p-4">
                  <div className="w-8 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: '85%' }}></div>
                  <div className="w-8 bg-blue-600 rounded-t" style={{ height: '75%' }}></div>
                  <div className="w-8 bg-blue-400 rounded-t" style={{ height: '50%' }}></div>
                </div>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-4">Workshop Participation Trends</h3>
                <div className="h-48 bg-gradient-to-br from-green-50 to-slate-50 rounded-lg flex items-end justify-around p-4">
                  <div className="w-8 bg-green-400 rounded-t" style={{ height: '40%' }}></div>
                  <div className="w-8 bg-green-500 rounded-t" style={{ height: '70%' }}></div>
                  <div className="w-8 bg-green-600 rounded-t" style={{ height: '65%' }}></div>
                  <div className="w-8 bg-green-500 rounded-t" style={{ height: '90%' }}></div>
                </div>
              </div>
            </div>

            {/* Data Grid */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h3 className="font-bold text-slate-900">Recent Workshops</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Workshop</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Coordinator</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Institute</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshops.map((workshop) => (
                      <tr key={workshop.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-3 text-slate-900 font-medium">{workshop.name}</td>
                        <td className="px-6 py-3 text-slate-600">{workshop.coordinator}</td>
                        <td className="px-6 py-3 text-slate-600">{workshop.institute}</td>
                        <td className="px-6 py-3 text-slate-600">{workshop.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsView;