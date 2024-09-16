import { redirect } from 'next/navigation'
import React from 'react';
import Blog from '@/components/blog/Blog';



export async function generateMetadata(context){
  const { type } = context.params;
  const descriptions = {
    News: "Stay updated with the latest news around the world, including current events, breaking news, and top stories.",
    Education: "Explore articles on various educational topics, including learning resources, teaching strategies, and academic research.",
    Sports: "Catch up on the latest sports news, game highlights, player updates, and in-depth analysis of your favorite sports.",
    Health: "Read about health tips, wellness advice, medical research, and strategies for maintaining a healthy lifestyle.",
    Bussiness: "Get insights into the business world with articles on industry trends, market analysis, entrepreneurship, and financial advice.",
    Entertainment: "Find articles on movies, music, television, celebrity news, and other entertainment topics to keep you engaged and informed.",
    Crypto: "Dive into the world of cryptocurrency with news, analysis, and insights on Bitcoin, Ethereum, and other digital currencies.",
    Casnio: "Discover the latest updates on casino games, gambling tips, and industry news related to the gaming world.",
    Fashion: "Stay stylish with articles on the latest fashion trends, style tips, designer news, and beauty advice.",
    CBD: "Learn about the benefits, uses, and latest research on CBD products and their impact on health and wellness.",
    E_Commerce: "Explore the latest trends and news in the e-commerce industry, including online shopping tips, digital marketing strategies, and industry innovations."
  };
    return {
        title: type,
      description: descriptions[type]
    };
}

const page = async (context) => {
  const { type, pageno } = context.params;
  // console.log(context.searchParams.search);


  const blogdata = async () => {
    if (!context.searchParams.search || context.searchParams.search === "") {
      const response = await fetch(`https://seobackend-seven.vercel.app/api/blog/getblogdata/${type}?page=${pageno}&limit=${10}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        cache: "no-store"
      })
      const res = await response.json();
      if (res.finddata < 1) {
        redirect(`/not-found`)
      }
      else {

        return { data: res.finddata, total: res.stop,search:"no",title:type };
      }
    } else {
      const response = await fetch(`https://seobackend-seven.vercel.app/api/blog/searchitem/?title=${context.searchParams.search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        cache: "no-store"
      })
      const res = await response.json();
      if (res.finddata < 1) {
        redirect(`/not-found`)
      }
      else {

        return { data: res.finddata, total: res.stop ,search:"yes",title:context.searchParams.search };
      }
    }

  }
  const data = await blogdata();

  return (
    <div>
      {data && <Blog title={data.title} data={data} pageno={pageno} />}
    </div>
  );
}

export default page;
