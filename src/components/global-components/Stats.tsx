// components/StatsComponent.tsx (With Icons)
'use client';
import { Award, Users, FolderCheck, Calendar } from 'lucide-react';

const Stats = () => {
  const stats = [
    { number: '9+', label: 'Years Of Experience', icon: Calendar },
    { number: '40+', label: 'Project Completed', icon: FolderCheck },
    { number: '300+', label: 'Satisfied Client', icon: Users },
    { number: '18+', label: 'Award Winner', icon: Award },
  ];

  return (
    <div 
      className="w-[95%] h-[142px] rounded-[30px] opacity-100 mx-auto px-4 sm:px-6 lg:px-8 shadow-lg"
      style={{
        background: 'linear-gradient(180deg, #B94A5B 0%, #6A4FFF 66.67%, #6A4FFF 81.25%)'
      }}
    >
      <div className="w-full h-full flex items-center justify-center px-6 py-4">
        <div className="grid grid-cols-4 gap-[58px] w-full">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center text-white flex flex-col items-center justify-center">
                <IconComponent size={22} className="mb-4 opacity-80" />
                <div className="text-[30px] text-white leading-[11px] sm:text-2xl font-normal font-roboto mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] text-white/53 sm:text-xs font-medium opacity-90 leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;