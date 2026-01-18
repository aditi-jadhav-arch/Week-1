import { MoreVertical, Mail, Phone } from 'lucide-react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  value: string;
}

const customers: Customer[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    status: 'active',
    value: '$12,450',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'mchen@startup.io',
    phone: '+1 (555) 234-5678',
    company: 'Startup.io',
    status: 'active',
    value: '$8,200',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@bizgroup.com',
    phone: '+1 (555) 345-6789',
    company: 'BizGroup LLC',
    status: 'pending',
    value: '$15,800',
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'dkim@solutions.net',
    phone: '+1 (555) 456-7890',
    company: 'Solutions Net',
    status: 'active',
    value: '$22,100',
  },
  {
    id: 5,
    name: 'Jessica Williams',
    email: 'jwilliams@digital.co',
    phone: '+1 (555) 567-8901',
    company: 'Digital Co.',
    status: 'inactive',
    value: '$5,300',
  },
  {
    id: 6,
    name: 'James Anderson',
    email: 'j.anderson@enterprise.com',
    phone: '+1 (555) 678-9012',
    company: 'Enterprise Corp',
    status: 'active',
    value: '$31,500',
  },
];

export function CustomerTable() {
  const getStatusColor = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Customers</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{customer.phone}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-gray-900">{customer.company}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${getStatusColor(
                      customer.status
                    )}`}
                  >
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900">{customer.value}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
