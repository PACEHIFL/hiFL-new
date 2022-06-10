import React from "react";
import Script from "next/script";
import { ChevronRightIcon } from "@heroicons/react/outline";

const accordionItem = [
  {
    title: "What is HiFL?",
    description:
      "HiFL, an acronym for Higher Institutions Football League is an annual football league designed to engage and showcase exciting sporting talents from Nigeria’s biggest and best tertiary institutions starting with universities from the South (Coastal Conference) and North (Sahel Conference)",
  },
  {
    title: "What are Conferences?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "When is the 2022 season going to start?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Who are the Defending Champions?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Where will the games be played?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];
const Accordion = () => {
  return (
    <div>
      <Script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js" strategy="beforeInteractive" />

      {/* <div id="accordion-collapse" data-accordion="collapse"> */}
        {accordionItem?.map((item, idx) => (
          <div key={idx} id="accordion-collapse" data-accordion="collapse">
            <h2 id={`accordion-collapse-heading-${idx++}`}>
              <button
                type="button"
                className="flex justify-start items-center p-5 w-full font-medium text-left rounded-t-xl"
                data-accordion-target={`#accordion-collapse-body-${idx++}`}
                aria-expanded="true"
                aria-controls={`accordion-collapse-body-${idx++}`}>
                <ChevronRightIcon className="w-5 h-5 shrink-0 mr-2" />
                <span className="text-black">{item.title}</span>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${idx++}`}
              className=""
              aria-labelledby={`accordion-collapse-heading-${idx++}`}>
              <div className="p-5">
                <p className="mb-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex justify-start items-center p-5 w-full font-medium text-left rounded-t-xl"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-2">
            <ChevronRightIcon className="w-5 h-5 shrink-0 mr-2" />
            <span className="text-black">What is HiFL?</span>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" className="" aria-labelledby="accordion-collapse-heading-2">
          <div className="p-5">
            <p className="mb-2">
              HiFL, an acronym for Higher Institutions Football League is an annual football league designed to engage
              and showcase exciting sporting talents from Nigeria’s biggest and best tertiary institutions starting with
              universities from the South (Coastal Conference) and North (Sahel Conference).
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex justify-start items-center p-5 w-full font-medium text-left rounded-t-xl"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-3">
            <ChevronRightIcon className="w-5 h-5 shrink-0 mr-2" />
            <span className="text-black">What is HiFL?</span>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" className="" aria-labelledby="accordion-collapse-heading-3">
          <div className="p-5">
            <p className="mb-2">
              HiFL, an acronym for Higher Institutions Football League is an annual football league designed to engage
              and showcase exciting sporting talents from Nigeria’s biggest and best tertiary institutions starting with
              universities from the South (Coastal Conference) and North (Sahel Conference).
            </p>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Accordion;
