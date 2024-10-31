import { revalidatePath } from "next/cache";

interface Post {
  id: number;
  title: string;
  content: string;
}

async function fetchPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("http://localhost:3000/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

const PostsComponent: React.FC = async () => {
  const posts = await fetchPosts();

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const newPost: Post = {
      id: 0,
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    };

    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    revalidatePath("/blog");

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating post:", errorData);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg mx-auto min-h-[calc(100vh-28px)]">
      <h1 className="text-2xl font-bold text-center mb-4">Posts</h1>
      <ul className="list-none p-0">
        {posts.map((post) => (
          <li key={post.id} className="mb-4 p-4 bg-gray-800 rounded-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </li>
        ))}
      </ul>
      <form
        action={handleSubmit}
        className="mt-6 space-y-4 flex flex-col items-center"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="w-1/2 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          className="w-1/2 p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default PostsComponent;
