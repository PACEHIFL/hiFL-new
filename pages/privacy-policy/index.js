import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import SideBar from "../../components/shared/SideBar";
import axios from "axios";

const PrivacyPolicy = ({ data }) => {
  return (
    <div>
      <PageTitle name="Privacy Policy" />

      <div className="bg-white font-redhat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gaptext-justify-md:between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div dangerouslySetInnerHTML={{ __html: data?.Content }} />
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

export async function getStaticProps() {
  try {
    const baseURL = process.env.CMS_URL;
    const { data, errors } = await axios(`${baseURL}/privacy-policy?populate=*`);

    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
