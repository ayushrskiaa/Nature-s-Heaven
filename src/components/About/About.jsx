/* eslint-disable react/no-unescaped-entities */
// import React from "react";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
export default function About() {

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
              Join us on this journey of awe and appreciation — because nature’s
              beauty is a treasure for all.
            </p>
          </div>
        </div>
      </div>



      <div className="container m-auto px-6  md:px-12 xl:px-6 py-16 text-white">
        <h1 className="text-white text-3xl  font-bold text-center ">FAQs</h1>


        <div className="py-8">
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}> How do I book a hotel?</AccordionHeader>
            <AccordionBody className="text-white text-md">
              Booking a hotel is simple! Browse through our list of available
              hotels, select your preferred dates, and click "Book Now." Follow
              the prompts to complete your reservation.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Can I cancel or modify my booking?
            </AccordionHeader>
            <AccordionBody className="text-white text-md">
              Yes, you can cancel or modify your booking depending on the hotel's
              cancellation policy. Visit the "My Bookings" section, select your
              reservation, and follow the instructions to make changes.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Are there any hidden fees?
            </AccordionHeader>
            <AccordionBody className="text-white text-md">
              No, we believe in transparency. All fees, including taxes and
              service charges, are displayed upfront during the booking process.
            </AccordionBody>
          </Accordion>
        </div>

      </div>



    </div>
  );
}
