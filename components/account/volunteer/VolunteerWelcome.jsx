import React, { useState, useEffect } from "react";
import Link from "next/link";
import SignUpModal from "./SignUpModal";
import { isVolunteer } from "../../../redux/features/volunteer.slice";

const VolunteerWelcome = () => {
  const [volunteer, setVolunteer] = useState("");

  useEffect(() => {
    if (isVolunteer()) {
      setVolunteer(isVolunteer().data.Participations[0]);
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-secondary text-3xl mb-6">Welcome Note</h2>
      <img src="/volunteer.png" alt="" className="w-full" />
      <p className="my-6">
        Lörem ipsum jen öling tede den geosorade lalig så sagen om terralog burkini om plagen, ifall vaktig inte leda
        krosäbelt. Myjygon pongen i lelig än trel, memil lede antent och psykocism epud lagir för lada. Pätärat presper,
        i hust netugisk mytodiktisk häkuss som biopur i geling pitt vartad vaplajigon tägåst och hypodalogi. Såsoning
        åren tektiga bioment, eumisamma, sunäligen med astropp om kvasiras, läslov, lapp dabesk om las. Nina tesm tok
        tekubel epiras, i dissade engar stenolans: miktig didorad sosal.
      </p>
      <div className="flex gap-6 mt-8">
        <div className="w-full lg:w-auto">
          <Link href="/volunteer">
            <a className="">
              <button className={`btn w-full lg:w-[225px] btn-secondary text-white capitalize font-bold`}>
                Learn More
              </button>
            </a>
          </Link>
        </div>
        <div className="w-full lg:w-auto">
          {volunteer.ApprovalStatus == "PENDING" ? (
            <button className="btn w-full lg:w-[225px] capitalize font-bold disabled:btn-warning" disabled>
              Applied
            </button>
          ) : (
            <label
              htmlFor="signup-modal"
              className="btn w-full lg:w-[225px] btn-secondary text-white capitalize font-bold modal-button">
              Apply
            </label>
          )}
        </div>
      </div>

      {/* Modal Popup */}
      <input type="checkbox" id="signup-modal" className="modal-toggle" />
      <label htmlFor="signup-modal" className="modal cursor-pointer">
        <label className="modal-box relative md:max-w-[80%] lg:max-w-[60%]" htmlFor="">
          <SignUpModal />
        </label>
      </label>
      {/* Modal Popup */}
    </div>
  );
};

export default VolunteerWelcome;
