"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card-new";
import { uom } from "@/assets";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[10%]"> 
        <h2 className="text-5xl text-n-1 text-center mt-28">Contact Us</h2>
        <div className="flex w-full gap-28">
            <CardContainer className="inter-var">
                <CardBody
                    className="rounded-3xl bg-slate-900/[0.8] relative group/card border-white/[0.9] w-auto sm:w-[30rem] md:w-[35rem] h-auto p-6 border shadow-lg shadow-black"
                    >
                    <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4 flex justify-center">
                        <img
                        src={uom}
                        className="h-60 w-60 object-cover rounded-full group-hover/card:shadow-xl items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </CardItem>
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-n-1 dark:text-white">
                        Pavan Epa
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />pavan.22@cse.mrt.ac.lk
                    </CardItem>
                </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
                <CardBody
                    className="rounded-3xl bg-slate-900/[0.8] relative group/card border-white/[0.9] w-auto sm:w-[30rem] md:w-[35rem] h-auto p-6 border shadow-lg shadow-black">
                    <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4 flex justify-center">
                        <img
                        src={uom}
                        className="h-60 w-60 object-cover rounded-full group-hover/card:shadow-xl items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </CardItem>
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-n-1 dark:text-white">
                        Kaveesha Kapuruge
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />kaveesha.22@cse.mrt.ac.lk
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    </div>
  );
};

export default ContactUs;
