import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useStore } from '../lib/store';
import { 
  BarChart3, 
  Star, 
  Newspaper, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Settings,
  LogOut
} from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
  { icon: Star, label: 'Reviews', path: '/reviews' },
  { icon: Newspaper, label: 'News', path: '/news' },
  { icon: MessageCircle, label: 'Issues', path: '/issues' },
  { icon: Users, label: 'Social', path: '/social' },
  { icon: TrendingUp, label: 'Trends', path: '/trends' },
];

export function Layout() {
  const location = useLocation();
  const { user, signOut } = useStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-indigo-600">CXPlatform</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-1">
            {navItems.map(({ icon: Icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  location.pathname === path
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </Link>
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{user?.email}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.subscription} Plan</p>
              </div>
              <button
                onClick={() => signOut()}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}