"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `STOCK MARKET ANALYTICS`,
              subtitle: `Track, Analyze, and Make Informed Decisions Across All Devices`,
              description: `Stay ahead of the market with real-time stock tracking and insights. Monitor performance, analyze trends, and make informed investment decisions from your mobile, web, or laptop.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>


      </section>
    </>
  );
};

export default Integration;
