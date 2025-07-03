import { useRef, useEffect, useState } from "react";
import { MostPopular } from "../../Layout/Index";

const Home = (item) => {
  const imgRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        setSize({ width, height });
        setLoaded(true);
      }
    };

    const img = imgRef.current;
    if (img && img.complete) {
      handleLoad();
    } else if (img) {
      img.addEventListener("load", handleLoad);
    }

    return () => {
      if (img) {
        img.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex w-full gap-32 items-center">
        <p className="text-2xl">
          👋 Haloo,{" "}
          <span className="text-[#42AAFF] font-semibold">Pengguna</span>
        </p>
        <div className="h-12 flex items-center w-1/4 bg-[#31313180] rounded-full overflow-hidden cursor-pointer">
          <label htmlFor="input" className="cursor-text px-3 pl-5">
            <svg className="w-[20px]" viewBox="0 0 512 512">
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                fill="#727272"
              />
            </svg>
          </label>
          <input
            placeholder="Type your game ...."
            id="input"
            name="text"
            type="text"
            className="w-full h-full border-none outline-none text-md caret-[#ff5100] bg-transparent text-white"
          />
        </div>
      </div>

      {/* Main Section */}
      <div className="flex mt-10">
        <div
          className="relative w-2/3"
          style={loaded ? { width: size.width, height: size.height } : {}}
        >
          <img
            ref={imgRef}
            src="/Games/Grand-Theft-Auto-V/bg-gta.jpeg"
            alt="cover-game"
            loading="lazy"
            className="absolute aspect-video w-full -z-10 rounded-[2.8vw] border-4 border-[#6E6E6E] brightness-50"
          />
          <div className="py-12 px-10 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-y-10">
              <div className="rounded-full w-fit text-xl font-semibold px-5 py-2 bg-gradient-to-r from-[#4196CA] to-[#2042CA] shadow-[inset_0px_0px_10px_5px_rgba(255,255,255,0.05)]">
                🔥 New Game!
              </div>
              <p className="text-5xl font-bold">
                Lorem Ipsum - Sit Dolor Amet : Assallamualaikum Ahmed
              </p>
            </div>
            <div className="bg-[rgba(35,36,40,0.90)] backdrop-blur-[2px] w-fit flex gap-10 px-5 py-7 rounded-4xl">
              <div className="flex flex-col gap-y-2">
                <p className="text-2xl font-bold">
                  🔥 Rp 5.000,<span className="line-through">00</span>
                </p>
                <p className="text-[#6E6E6E] ml-12 line-through">
                  Rp 205.000,00
                </p>
              </div>
              <div className="flex px-5 gap-3 rounded-2xl py-5 w-fit bg-gradient-to-r from-[#4196CA] to-[#2042CA] shadow-[inset_0px_0px_10px_5px_rgba(255,255,255,0.05)]">
                <img src="/Icon/Cart.svg" loading="lazy" alt="Cart" />
                <p className="text-2xl font-semibold">Buy</p>
              </div>
            </div>
          </div>
        </div>
        <MostPopular/>
      </div>
    </div>
  );
};

export default Home;
