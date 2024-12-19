import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutGridItems } from "../constants";

const About = () => {
  return (
    <div className="w-full justify-center items-center px-[4%] md:px-[5%] lg:px-[10%]" id="about" >
      <h2 className="text-4xl text-white sm:text-5xl font-poppins text-center mt-20">ABOUT SLIoT</h2>
      <section className="mt-10">
        <BentoGrid>
          {aboutGridItems.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
              link,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                link={link}
              />
            )
          )}
        </BentoGrid>
      </section>
    </div>
  );
};

export default About;
