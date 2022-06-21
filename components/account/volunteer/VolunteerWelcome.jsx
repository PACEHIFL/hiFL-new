import React, { useState, useEffect } from "react";
import Link from "next/link";
import SignUpModal from "./SignUpModal";
import { isLoggedIn } from "../../../redux/features/auth.slice";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

const VolunteerWelcome = () => {
  const [volunteer, setVolunteer] = useState("");
  const [applied, setApplied] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState("");

  const baseURL = process.env.BASE_URL;
  const seasons = useFetch(`${baseURL}/settings?populate=*`)?.data?.data;
  const currentSeasonID = seasons?.[0]?.CurrentSeason._id;

  const fetchData = async () => {
    await axios(`${baseURL}/volunteers/volunteer?User=${user.User._id}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        setVolunteer(res.data);
      })
      .catch((err) => {
        setShowSignup(true);
      });
  };

  const hasApplied = () => {
    if (volunteer.data.Participations?.[0]?.Season == currentSeasonID) {
      setShowSignup(true);
      setApplied(true);
    } else {
      setShowSignup(true);
    }
  };

  useEffect(() => {
    if (volunteer) {
      hasApplied();
    }
  }, [volunteer, currentSeasonID]);
  useEffect(() => {
    if (isLoggedIn()) {
      setUser(isLoggedIn().data);
    }
  }, []);
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

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
        {showSignup && (
          <div className="w-full lg:w-auto">
            {applied ? (
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
        )}
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
