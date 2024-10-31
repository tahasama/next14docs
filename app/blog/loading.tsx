export default function Loading() {
  const posts = [1, 2];
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg mx-auto min-h-[calc(100vh-28px)]">
      <h1 className="text-2xl font-bold text-center mb-4">Posts</h1>
      <ul className="list-none p-0">
        {posts.map((post, i) => (
          <li
            key={i}
            className="mb-4 p-4 bg-gray-800 rounded-md min-h-[90px] animate-pulse"
          ></li>
        ))}
      </ul>
    </div>
  );
}
