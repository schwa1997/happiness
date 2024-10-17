import PostCard from "./components/postCard";

export default function Home() {
  const posts = [
    { id: 1, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['E:/01-SDE/23-Happiness/happiness/src/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 2, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 3, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 4, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
    { id: 5, title: 'ramen makes me happy', content: 'oishiiii!', audio: ['/app/data/a1.wav'], imgs: ['https://paulasapron.com/wp-content/uploads/2024/01/Ramen-de-Pollo-Facil-y-Rapido-2-scaled.jpg'], video: ['https://www.youtube.com/watch?v=Df0X6YQPQdk&ab_channel=renewed'], tag: ['food', 'picture'], rate: 5 },
];
  return (
    <div className="container mx-auto px-4 py-8 flex gap-8 items-center justify-center flex-wrap">
      
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} img={post.imgs[0]} content={post.content} initialLiked={false} />
      ))}
    </div>
  );
}
