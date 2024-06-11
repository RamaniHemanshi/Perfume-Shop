import { CheckIcon } from "@chakra-ui/icons";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-36">
        <div className="w-1/2 p-6">
          <h2 className="text-3xl mb-3 font-bold relative">
            Our History
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300"></span>
          </h2>
          <p className="text-lg">
            Founded in 1992, The Perfume Shop set out with the simple idea of
            making luxury perfume brands accessible to everyone at an affordable
            price. With the first store openings in Birmingham, Belfast & Milton
            Keynes, The Perfume Shop developed a genuine passion for delighting
            customers with expert perfume knowledge and the highest customer
            service standards which remain at the forefront of everything the
            brand stands for today. In 2005 The Perfume Shop was acquired by the
            world's largest international health and beauty retailer AS Watson -
            operating over 16.300 stores in 28 markets. Find out more about
            our parent company.
          </p>
        </div>
        <div className="w-1/2 mt-5 ml-10">
          <img
            src="/images/aboutUs.jpg"
            alt="About Us Image"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ width: "800px", height: "400px" }}
          />
        </div>
      </div>
      <div class="mt-10 mx-36 flex flex-col items-center justify-center h-[200px] shadow-xl">
        <h1 class="text-2xl">Our Mission</h1>
        <p class="mt-5 text-lg">
          "To share our genuine passion for perfume & people and offer the most
          knowledgeable fragrance expertise on the high street."
        </p>
      </div>
      <div class="items-center justify-center mx-36 h-900 pt-20">
        <div class="flex flex-col items-center justify-center h-600">
          <h1 class="text-2xl font-bold mb-4 md:mr-8">WHY SHOP WITH US?</h1>
          <div className="flex flex-col md:flex-row md:items-start md:justify-start pt-14">
            <div class="flex flex-col md:ml-8">
              <div class="flex items-center">
                <CheckIcon />
                <p className="pl-3">We are leading perfume experts in the UK.</p>
              </div>
              <div class="flex items-center pt-14">
                <CheckIcon />
                <p className="pl-3">FREE Click & Collect service in all UK stores.</p>
              </div>
              <div class="flex items-center pt-14">
                <CheckIcon />
                <p className="pl-3">
                  Fantastic saving across 100s of top brands all year round.
                </p>
              </div>
            </div>
            <div class="flex flex-col md:ml-8">
              <div class="flex items-center ">
                <CheckIcon />
                <p className="pl-3">FREE Gift wrap service available in store.</p>
              </div>
              <div class="flex items-center pt-14">
                <CheckIcon />
                <p className="pl-3">
                  The most generous loyalty card membership on the high street.
                </p>
              </div>
              <div class="flex items-center pt-14">
                <CheckIcon />
                <p className="pl-3">FREE Standard delivery available online for VIP members.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
