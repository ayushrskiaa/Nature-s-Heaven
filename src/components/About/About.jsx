/* eslint-disable react/no-unescaped-entities */
// import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-gradient-to-bl from-emerald-800 to-emerald-500">
      <div className="container m-auto px-6  md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
          <div className=" w-200 h-80 overflow-hidden rounded-lg shadow-xl dark:shadow-gray-800">
            <img             
              src="https://images.pexels.com/photos/27896591/pexels-photo-27896591/free-photo-of-green-leaves-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="image"
            />
            
          </div>

          
          <div className="md:7/12 lg:w-6/12 py-22">

       {/* <div className="w-200 h-40 overflow-hidden mb-20">
       <img  src="https://images.pexels.com/photos/27896591/pexels-photo-27896591/free-photo-of-green-leaves-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

       </div> */}
            <h2 className="text-3xl text-white font-bold md:text-4xl my-3 py-2">
              Welcome to Our Nature Haven
            </h2>
            <p className="text-white ">
              At our core, we celebrate the beauty and diversity of the natural
              world. From the lush green forests to the vibrant wildlife that
              calls them home, every corner of nature tells a story worth
              exploring. Our mission is to inspire a deeper connection with the
              environment and promote the protection of our precious ecosystems.
              Whether you're an animal lover, a nature enthusiast, or simply
              curious about the wonders of the wild, you'll find captivating
              stories, insightful information, and breathtaking visuals here.
              Together, let's cherish and protect the world we share. J
            </p>
            <p className="mt-4 text-white">
            Join us on this journey of awe and appreciation — because nature’s beauty is a treasure for all.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
