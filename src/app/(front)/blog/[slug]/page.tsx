function generateStaticParams() {}
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + slug).then((res) => res.json());

    return (
        <div className="flex flex-col gap-4">
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );

}