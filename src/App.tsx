import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatsCard } from './components/StatsCard';
import { CustomerTable } from './components/CustomerTable';
import { ActivityFeed } from './components/ActivityFeed';
import { Users, TrendingUp, DollarSign, Target, Search, Bell, Plus } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers, deals, or activities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4 ml-6">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Add Customer</span>
              </button>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard</h2>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Customers"
              value="2,847"
              change="+12.5%"
              trend="up"
              icon={Users}
              color="bg-blue-500"
            />
            <StatsCard
              title="Revenue"
              value="$145,890"
              change="+8.2%"
              trend="up"
              icon={DollarSign}
              color="bg-green-500"
            />
            <StatsCard
              title="Active Deals"
              value="156"
              change="+23.1%"
              trend="up"
              icon={Target}
              color="bg-purple-500"
            />
            <StatsCard
              title="Growth Rate"
              value="18.6%"
              change="-2.4%"
              trend="down"
              icon={TrendingUp}
              color="bg-orange-500"
            />
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CustomerTable />
            </div>
            
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
