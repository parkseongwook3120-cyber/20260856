import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, MessageCircle, Bookmark, User } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function BottomNavigation() {
  const navItems = [
    { name: '홈', path: '/', icon: Home },
    { name: '경로검색', path: '/search', icon: Search },
    { name: '소셜', path: '/social', icon: MessageCircle },
    { name: '저장', path: '/saved', icon: Bookmark },
    { name: '내정보', path: '/mypage', icon: User },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-md mx-auto bg-white border-t border-gray-200 px-2 py-2 flex justify-between items-center z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-safe">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-200",
                isActive ? "text-purple-600 scale-105" : "text-gray-400 hover:text-gray-600"
              )
            }
          >
            <Icon size={24} strokeWidth={2.5} className="mb-1" />
            <span className="text-[10px] font-medium">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
