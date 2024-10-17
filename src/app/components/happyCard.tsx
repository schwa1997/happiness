'use client'
import React from 'react';

interface HappyCardProps {
  id: number;
  title: string;
  content: string;
  audio: string[];
  imgs: string[];
  tag: string[];
  rate: number;
}

const HappyCard: React.FC<HappyCardProps> = ({  title, content, audio, imgs, tag, rate }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${imgs[0]})` }}
      ></div>
      <div className="relative z-10 p-6 bg-gray-800 bg-opacity-70 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
          <p className="text-gray-300 mb-4">{content}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tag.map((t, index) => (
              <span key={index} className="px-2 py-1 bg-blue-500 text-white text-sm rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button 
            className="text-white hover:text-blue-300 transition-colors"
            onClick={() => {
              const audioPlayer = new Audio(audio[0]);
              audioPlayer.play();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          <div className="text-yellow-400">
            {rate === 5 && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCard;
