import { UserPlus, DollarSign, FileText, MessageSquare } from 'lucide-react';

interface Activity {
  id: number;
  type: 'new_customer' | 'deal_closed' | 'document' | 'message';
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'new_customer',
    title: 'New customer added',
    description: 'Sarah Johnson joined from TechCorp Inc.',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'deal_closed',
    title: 'Deal closed',
    description: '$22,100 deal with Solutions Net',
    time: '4 hours ago',
  },
  {
    id: 3,
    type: 'document',
    title: 'Document uploaded',
    description: 'Contract signed by Enterprise Corp',
    time: '6 hours ago',
  },
  {
    id: 4,
    type: 'message',
    title: 'New message',
    description: 'Michael Chen sent a follow-up inquiry',
    time: '8 hours ago',
  },
  {
    id: 5,
    type: 'new_customer',
    title: 'New customer added',
    description: 'James Anderson from Enterprise Corp',
    time: '1 day ago',
  },
];

export function ActivityFeed() {
  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'new_customer':
        return <UserPlus className="w-5 h-5 text-blue-600" />;
      case 'deal_closed':
        return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'document':
        return <FileText className="w-5 h-5 text-purple-600" />;
      case 'message':
        return <MessageSquare className="w-5 h-5 text-orange-600" />;
    }
  };

  const getIconBg = (type: Activity['type']) => {
    switch (type) {
      case 'new_customer':
        return 'bg-blue-100';
      case 'deal_closed':
        return 'bg-green-100';
      case 'document':
        return 'bg-purple-100';
      case 'message':
        return 'bg-orange-100';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4">
              <div className={`w-10 h-10 rounded-lg ${getIconBg(activity.type)} flex items-center justify-center flex-shrink-0`}>
                {getIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
