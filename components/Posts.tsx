// // ./components/Posts.tsx
import React from "react";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  console.log(posts);
  return <div>Posts</div>;
}

// import { dataset, projectId } from "@/sanity/env";
// import imageUrlBuilder from "@sanity/image-url";
// import { SanityDocument } from "next-sanity";
// import Image from "next/image";
// import Link from "next/link";

// const builder = imageUrlBuilder({ projectId, dataset });
// export default function Posts({ posts }: { posts: SanityDocument[] }) {

//   return (
//     <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
//       {posts?.length > 0 ? (
//         posts.map((post) => (
//           <Link key={post._id} href={post.slug.current}>
//             <Image
//               src={post.mainImage && builder.image(post.mainImage).url() || ""}
//               width={300}
//               height={300}
//               alt={post.mainImage.alt || ""}
//             />
//             <h2 className="rounded-md p-4 hover:bg-blue-700">{post.title}</h2>
//           </Link>
//         ))
//       ) : (
//         <div className="p-4 text-red-500">No posts found</div>
//       )}
//     </main>
//   );
// }
