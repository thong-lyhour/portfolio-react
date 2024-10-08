
import React from "react";
import Social from "@/components/social";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br /> <span className="text-accent">Thong Lyhour</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I am a passionate full-stack developer with web and mobile
              application. I thrive on challenges and I am committed to staying
              updated with the latest industry trends. With a blend of technical
              expertise and creativity.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-2">
              {/* <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button> */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
