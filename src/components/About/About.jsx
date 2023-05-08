import React from 'react';
import BackButton from '../BackButton/BackButton';

export default function About() {
  return (
    <div className="pb-10">
      <h1 className="bg-white text-4xl text-center my-6 font-black border-[2px] border-black p-4 w-full md:text-left md:p-0 md:pt-20 md:border-l-0 md:border-r-0 md:border-t-0 md:w-fit md:pr-16 md:pb-8 md:border-gray-300 md:border-4">
        About Us
      </h1>
      <article className="flex flex-col gap-4 my-10">
        <p>
          San Francisco’s privately owned public open spaces (POPOS) offer a unique blend of public
          accessibility and private development. These POPOS encompass a variety of spaces, ranging
          from spacious plazas to cozy terraces, atriums, small parks, and even hidden snippets of
          greenery. What sets them apart is that they are provided and maintained by private
          developers as a trade-off for the city’s permission to construct taller and denser
          buildings.
        </p>
        <p>
          These POPOS primarily thrive in the bustling Downtown office district of San Francisco.
          Amidst the towering skyscrapers and bustling streets, these spaces provide a welcome
          respite for residents, workers, and visitors alike. They offer an oasis of tranquility
          amidst the urban landscape, providing a place to relax, unwind, and enjoy the outdoors.
        </p>
        <p>
          With their unique design and landscaping, these privately owned public open spaces bring
          diversity and character to the cityscape. Some boast beautiful architectural features,
          while others incorporate art installations or water features. Many of these spaces also
          host events, such as outdoor concerts or art exhibitions, contributing to the vibrant
          cultural fabric of San Francisco.
        </p>
        <p>
          POPOS not only benefit the public but also add value to the surrounding developments. They
          create a sense of community and enhance the overall livability of the city. By integrating
          these open spaces into private developments, San Francisco strikes a balance between urban
          density and the need for accessible green areas, fostering a harmonious coexistence of
          public and private interests.
        </p>
        <p>
          In essence, San Francisco’s privately owned public open spaces exemplify the city’s
          commitment to preserving public access to outdoor areas, even within a dense urban
          environment. As valuable amenities, these POPOS enrich the urban experience, providing
          residents and visitors with the opportunity to enjoy pockets of nature, art, and
          relaxation amid the bustling cityscape, further enhancing the allure and livability of San
          Francisco’s vibrant downtown district.
        </p>
        <div id="image-block" className="grid gap-10 grid-cols-1 md:grid-cols-3 md:my-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/garden-terrace-at-150-california.jpg`}
            className="object-cover w-full"
            alt="Young professionals sitting outside and working at a rooftop garden"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/525-market-street-plaza.jpg`}
            className="object-cover w-full"
            alt="A large bright space with clear glass roofs, fountains, palm trees, and seating areas."
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/101-california.jpg`}
            className="object-cover w-full"
            alt="People mingling and relaxing on benches in a garden area"
          />
        </div>
      </article>
      <BackButton />
    </div>
  );
}
