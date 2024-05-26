import { redirect } from 'next/navigation'
import React from 'react';
import Blog from '@/components/blog/Blog';
const page = async (context) => {
  const { type, pageno } = context.params;
  // console.log(context.searchParams.search);


  const blogdata = async () => {
    if (!context.searchParams.search || context.searchParams.search === "") {
      const response = await fetch(`https://seobackend-seven.vercel.app/api/blog/getblogdata/${type}?page=${pageno}&limit=${4}`, {
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
