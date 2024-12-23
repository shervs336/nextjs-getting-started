export default async function Page() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

    return (
        <div className="flex flex-col gap-4">
            {posts.map((post) => (
                <div key={post.id}>
                    <h2 className="font-bold text-2xl">
                        <a href={`/blog/${post.id}`} className="hover:underline">{post.title}</a>
                    </h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );

}