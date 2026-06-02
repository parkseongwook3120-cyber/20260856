import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ value, onChange, placeholder = "학교 검색..." }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="px-4 pt-4 pb-2 z-10 w-full">
      <form 
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100"
      >
        <MapPin className="text-purple-600 mr-3" size={20} />
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-800 placeholder-gray-400 font-medium"
        />
        <button type="submit" className="p-1">
          <Search className="text-gray-400" size={20} />
        </button>
      </form>
    </div>
  );
}
