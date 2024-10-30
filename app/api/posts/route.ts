import { NextResponse } from 'next/server';


export interface Post {
    id: number;
    title: string;
    content: string;
}


let posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
];

// Handle GET requests to fetch posts
export async function GET() {
    return NextResponse.json(posts);
}

// Handle POST requests to create a new post
export async function POST(request: Request) {
    const newPost: Post = await request.json();

    // Validate the incoming post data
    if (!newPost.title || !newPost.content) {
        return NextResponse.json({ error: 'Title and content are required.' }, { status: 400 });
    }

    // Add the new post to the in-memory database
    newPost.id = posts.length + 1;
    posts.push(newPost);

    return NextResponse.json(newPost, { status: 201 });
}
