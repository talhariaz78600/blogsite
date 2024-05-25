import React from 'react';
import Blog from '@/components/blog/Blog';
const page = async(context) => {
    const {type,pageno}=context.params;
    // console.log(context.searchParams.search);


    const blogdata = async () => {
     
          const response = await fetch(`https://seobackend-seven.vercel.app/api/blog/getblogdata/${type}?page=${pageno}&limit=${1}`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
              cache: "no-store" 
          })
          const res = await response.json();
          
          return {data:res.finddata,total:res.stop};
  
  }
 const data= await blogdata();

  return (
    <div>
      <Blog title={type} data={data} pageno={pageno}/>
    </div>
  );
}

export default page;
