import React from 'react';
import { redirect } from 'next/navigation';
import BlogDetail from '@/components/blog/Blogdetail';
export async function generateMetadata({ params }) {
  const { blogId } = params;
9
  const response = await fetch(`https://seobackend-seven.vercel.app/api/blog/getsingleblog/${blogId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  
  const res = await response.json();

  if (!res.data) {
    return {
      title: 'Not Found',
      description: 'This blog does not exist',
      openGraph: {
        title: 'Not Found',
        description: 'This blog does not exist',
      },
    };
  }

  const data = res.data;
  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      title: data?.title,
      description: data?.description,
      images: [
        {
          url: data?.imageUrl , 
          alt: data?.title ,
        },
      ],
    },
  };
}

const BlogPage = async ({ params, searchParams }) => {
  const { blogId } = params;
  const { pageno } = searchParams;

  const response = await fetch(`https://seobackend-seven.vercel.app/api/blog/getsingleblog/${blogId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const res = await response.json();

  // Redirect to a not-found page if no blog is found
  if (!res.data) {
    redirect('/not-found');
    return null; // Ensures nothing is rendered if redirected
  }

  const data = res.data;

  return (
    <div>
      <BlogDetail data={data} id={blogId} pageno={pageno} />
    </div>
  );
};

export default BlogPage;

