import React from "react";
import Link from "next/link";

const VolunteerWelcome = () => {
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
        <Link href="/volunteers">
          <a>
            <button className={`btn btn-wide btn-secondary text-white capitalize font-bold`}>Learn More</button>
          </a>
        </Link>

        <button className={`btn btn-wide btn-secondary text-white capitalize font-bold`}>Sign Up</button>
      </div>
    </div>
  );
};

export default VolunteerWelcome;
