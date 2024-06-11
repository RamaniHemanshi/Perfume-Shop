import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  return (
    <div className="flex w-full mx-auto max-w-[1400px] py-10 md:px-6">
      <div className="flex flex-col w-1/2 ml-10">
        <h3 className="text-xl font-bold">Perfume Shop</h3>
        <div className="flex flex-col space-y-2">
          <div className="flex  space-x-2">
            <AccessTimeIcon />
            <div>
              <p className="text-lg">17 November - 22 November</p>
              <p className="text-lg">8.00 am - 10.00 pm</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <LocationOnIcon />
            <div>
              <p className="text-lg">Amroli, Surat 395011, Gujarat.</p>
              <p className="text-lg">Event Address</p>
            </div>
          </div>
          <div className="flex  space-x-2">
            <CallIcon />
            <div>
              <p className="text-lg">0086567898</p>
              <p className="text-lg">Phone Number</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <EmailIcon />
            <div>
              <p className="text-lg">perfumeShop@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=amroli,surat+(Perfume%20Shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
};

export default ContactUs;
