'use client'
import React, { useState } from 'react';
import HappyCard from '../components/happyCard';

const HappinessCollection = () => {
    const [showModal, setShowModal] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPost);
        setShowModal(false);
    };
  const books = [
    { id: 1, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['E:/01-SDE/23-Happiness/happiness/src/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 2, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 3, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 4, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 5, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Happiness Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 flex items-center justify-center cursor-pointer" onClick={() => setShowModal(true)}>
          <div className="text-6xl text-gray-500">+</div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-2 mb-4 border rounded"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                />
                <textarea
                  placeholder="Content"
                  className="w-full p-2 mb-4 border rounded"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                ></textarea>
                <div className="flex justify-end">
                  <button type="button" className="px-4 py-2 mr-2 bg-gray-200 rounded" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Create</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {books.map((book) => (
            <HappyCard  key={book.id} id={book.id} title={book.title} content={book.content} audio={book.audio} imgs={book.imgs} tag={book.tag} rate={book.rate} />
        ))}
      </div>
    </div>
  );
};

export default HappinessCollection;
