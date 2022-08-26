import React, { useState, useEffect } from "react";
import PageTitle from "../../components/shared/PageTitle";
import Filter from "../../components/teams/Filter";
import SideBar from "../../components/shared/SideBar";
import FixturesCard from "../../components/teams/FixturesCard";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import FixturesAccordion from "../../components/shared/FixturesAccordion";

const Fixtures = () => {
  const [groups, setGroups] = useState([]);
  const [roundOf16, setRoundOf16] = useState([]);
  const [quarterFinal, setQuarterFinal] = useState([]);
  const [semiFinal, setSemiFinal] = useState([]);
  const [thirdPlace, setThirdFinal] = useState([]);
  const [final, setFinal] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
    const { data: fixtures } = await axios(
      `${baseURL}/leagues/season/fixtures/?League=${data?.data?.CurrentLeague?._id}`
    );

    const groups = fixtures?.data?.filter((fixture) => fixture?.Stage?.StageName === "GROUPS");
    const roundOf16 = fixtures?.data?.filter((fixture) => fixture?.Stage?.StageName === "ROUND OF 16");
    const quarterFinal = fixtures?.data?.filter((fixture) => fixture?.Stage?.StageName === "QUARTER FINALS");
    const semiFinal = fixtures?.data?.filter((fixture) => fixture?.Stage?.StageName === "SEMI FINALS");
    const thirdPlace = fixtures?.data?.filter((fixture) => fixture?.Stage?.StageName === "THIRD PLACE");
    const final = fixtures?.data?.filter((fixture) => fixture?.Stage?.StageName === "FINAL");
    setGroups(groups);
    setRoundOf16(roundOf16);
    setQuarterFinal(quarterFinal);
    setSemiFinal(semiFinal);
    setThirdFinal(thirdPlace);
    setFinal(final);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // const [fixtures, setFixtures] = useState([]);
  // const [stages, setStages] = useState([]);
  // const [currentStageId, setCurrentStageId] = useState("");
  // const [loading, setLoading] = useState(false);
  // const baseURL = process.env.BASE_URL;

  // const groups = fixtures.filter(fixture => filter.Stage.StageName === 'GROUPS')

  // const fetchStages = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(`${baseURL}/leagues/league/stages/?League=${settings?.CurrentLeague?._id}`);
  //     setStages(data?.data);
  //     setLoading(false);

  //     if (data?.data?.length !== 0) {
  //       setCurrentStageId(data?.data[0]?._id);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchStages();
  // }, []);

  // const fetchFixtures = async () => {
  //   setLoading(true);
  //   try {
  //     // const { data } = await axios(`${baseURL}/leagues/season/fixtures/?Stage=${currentStageId}&MatchStatus=FIXTURE`);
  //     const { data } = await axios(`${baseURL}/leagues/season/fixtures/?Stage=${currentStageId}`);
  //     setFixtures(data?.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (currentStageId.length > 0) {
  //     fetchFixtures();
  //   }
  // }, [currentStageId]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setCurrentStageId(value);
  // };

  return (
    <div>
      <PageTitle name="Fixtures & Results" />
      <div className="bg-white font-redhat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto mb-10">
                <Filter title="Select Season" onChange={handleChange} name="CurrentSeason" seasons={seasons} />
                <select className="select w-full border-gray-500" name="CurrentStage" onChange={handleChange}>
                  {stages?.length !== 0 &&
                    stages?.map((stage, idx) => (
                      <option className="text-red-600" key={idx} value={stage?._id}>
                        {stage?.StageName}
                      </option>
                    ))}
                </select>
              </div> */}

              {loading === false && (
                <>
                  <FixturesAccordion data={groups} title="GROUPS" />
                  <FixturesAccordion data={roundOf16} title="ROUND OF 16" />
                  <FixturesAccordion data={quarterFinal} title="QUARTER FINALS" />
                  <FixturesAccordion data={semiFinal} title="SEMI FINALS" />
                  <FixturesAccordion data={thirdPlace} title="THIRD PLACE" />
                  <FixturesAccordion data={final} title="FINAL" />
                </>
              )}

              {loading && (
                <div className="h-[400px] flex justify-center items-center">
                  <BeatLoader loading={loading} color="#000229" />
                </div>
              )}
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12 space-y-8">
              <div>
                {/* <LatestNewsSideBar /> */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixtures;

// export const getStaticProps = async () => {
//   try {
//     const baseURL = process.env.BASE_URL;
//     const { data, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
//     const { data: fixtures } = await axios(
//       `${baseURL}/leagues/season/fixtures/?League=${data?.data?.CurrentLeague?._id}`
//     );
//     // const { data: seasons } = await axios(`${baseURL}/leagues/seasons/`);

//     if (!data || errors || !fixtures) {
//       return { notFound: true };
//     }

//     const groups = fixtures.data.filter(fixture => fixture.Stage.StageName === 'GROUPS')

//     return {
//       props: {
//         // settings: data.data,
//         // fixtures: fixtures.data,
//         groups
//         // seasons: seasons.data,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };
