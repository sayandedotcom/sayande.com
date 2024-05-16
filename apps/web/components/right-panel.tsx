"use client";
import { siteConfig } from "@/config/site-config";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import GridItem from "./grid-item";
import Equipments from "./grid-items/equipments";
import Mentor from "./grid-items/mentor";
import Project from "./grid-items/project";
import Social from "./grid-items/social";
import { FAQAccordion } from "./faq";
import Image from "next/image";

const RightPanel = () => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  // ANIMATION
  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [scope]);

  return (
    <div className="flex flex-col w-full">
      <div
        ref={scope}
        className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 auto-rows-[76px]"
      >
        {siteConfig.items.map((item, index) => {
          return (
            <GridItem key={item.title + item.type + index} size={item.layout}>
              {item.type === "social" ? (
                <Social item={item} />
              ) : item.type === "mentor" ? (
                <Mentor item={item} />
              ) : item.type === "project" ? (
                <Project item={item} />
              ) : item.type === "equipment" ? (
                <Equipments item={item} />
              ) : (
                <div>Need to create new component type.</div>
              )}
            </GridItem>
          );
        })}
      </div>

      <FAQAccordion className="" />
    </div>
  );
};

export default RightPanel;
// xl: overflow - y - auto;
