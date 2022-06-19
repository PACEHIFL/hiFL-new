import { useState, useEffect } from "react";

const Accordion = ({ title, data }) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <div className="mb-10">
      <h1 className="text-[30px] font-bold">{title}</h1>
      <div>
        {data?.map((item, idx) => (
          <details key={idx} className="my-4 cursor-pointer">
            <summary className="text-lg font-semibold bg-gray-200 py-3 px-4 rounded-sm">{item.title}</summary>
            {pageLoaded && (
              <p className="py-3 border-x border-b p-4" dangerouslySetInnerHTML={{ __html: item.description }} />
            )}
          </details>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
