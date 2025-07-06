import React from "react";
const SosialMedia = [
  {
    icon: "/SosialMedia/Tiktok.svg",
    alt: "Tiktok",
    link: "https://www.tiktok.com/@agusasugus",
  },
  {
    icon: "/SosialMedia/Instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/4dirga.h",
  },
  {
    icon: "/SosialMedia/X.svg",
    alt: "X / Twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "/SosialMedia/Github.svg",
    alt: "Github",
    link: "https://github.com/SkyzofrnDev",
  },
  {
    icon: "/SosialMedia/Linkedin.svg",
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/dirga-hardeka-agustiantara-7421832b8/",
  },
];
const Footer = () => {
  return (
    <div>
      <div className="w-full">
        <img
          src="/Icon/Footer.svg"
          loading="lazy"
          alt="footer-svg"
          className="w-full"
        />
        <div className="bg-[#111315] flex gap-x-56 px-20 py-10 pb-28">
          <div className="flex items-center gap-5">
            <img src="/Store/logo_head.png" alt="logo" className="w-16" />
            <p className="text-4xl text-white font-bold">FOXY STORE</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl text-white font-bold">CONTACT</p>
            <div className="text-white text-3xl font-semibold flex flex-col mt-5">
              <a href="https://wa.me/6289639151016"><p>WHATSAPP</p></a>
              <a href="https://instagram.com/4dirga.h"><p>INSTAGRAM</p></a>
              <a href="https://instagram.com/4dirga.h"><p>EMAIL</p></a>
            </div>
          </div>
          <div>
            <p className="uppercase font-bold text-4xl mb-5 text-white">
              FOLLOW ME ON
            </p>
            <div className="flex gap-4">
              {SosialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#282828] rounded-full w-fit"
                >
                  <img src={media.icon} alt={media.alt} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#363636] py-5">
        <p className="text-white font-bold text-lg">
          © FOXYSTORE 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
