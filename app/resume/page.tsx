"use client";


import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import EducationPage from "./educationPage";
import SkillPage from "./skillPage";
import About from "./aboutPage";
import ExperiencePage from "./experiencePage";




const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="exp"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"exp"}>Experience</TabsTrigger>
            <TabsTrigger value={"edu"}>Education</TabsTrigger>
            <TabsTrigger value={"skill"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experence */}
            <TabsContent value="exp" className="w-full">
              <ExperiencePage />
            </TabsContent>
            {/* education */}
            <TabsContent value="edu" className="w-full">
              <EducationPage />
            </TabsContent>
            {/* skills */}
            <TabsContent value="skill" className="w-full">
              <SkillPage />
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
