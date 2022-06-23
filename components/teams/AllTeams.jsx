import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PageTitle from "../shared/PageTitle";
import SideBar from "../shared/SideBar";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const AllTeams = ({ settings: allSettings, seasons }) => {
  const [settings, setSettings] = useState(allSettings);
  const [teams, setTeams] = useState([]);
  const [stages, setStages] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [currentStageId, setCurrentStageId] = useState('')
  const [loading, setLoading] = useState(false)
  const isOdd = (num) => num % 2 === 0;
  const router = useRouter();
  const path = router.pathname;
  const baseURL = process.env.BASE_URL;

  const fetchStages = async () => {
    setLoading(true)
    try {
      const { data: allStages } = await axios(`${baseURL}/leagues/league/stages/?League=${settings.CurrentLeague._id}`);
      setStages(allStages?.data);
      setLoading(false)

      if(allStages) {
        setCurrentStageId(allStages?.data[0]?._id)
      }
    } catch (error) {
      console.log(error);
    }
  };


  const fetchTeams = async () => {
    setLoading(true)
    try{
      const { data } = await axios(`${baseURL}/leagues/league/stages/stage/?_id=${currentStageId}`);
      setTeams(data?.data?.Teams)
      setLoading(false)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchStages()
  }, []);

  useEffect(() => {
    if(currentStageId !== '') {
      fetchTeams()
    }
  }, [currentStageId]);

  const handleChange = (e) => {
    const { value } = e.target
    setCurrentStageId(value)
  };

  const handleSeasonChange = (e) => {
    const { name, value } = e.target
    // setLoading(true)
    // console.log(value, settings.CurrentSeason._id)
    // if(value !== settings.CurrentSeason._id) {
    //   setTeams([])
    //   setLoading(false)
    // } else {
    //   setTeams([...teams])
    // }
  }

  return (
    <div>
      <PageTitle name="Teams" />
      <div className="bg-white font-redhat">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          <div className="flex gap-7 xl:gap-20 justify-between">
            <div className="w-full lg:w-8/12 xl:w-9/12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-auto mb-10">
                <Filter title="Select Season" onChange={handleSeasonChange} name="CurrentSeason" seasons={seasons} />
                <select
                  className="select w-full border-gray-500"
                  name='hello'
                  onChange={handleChange}>
                  {stages &&
                    stages?.map((stage, idx) => (
                      <option className="text-red-600" key={idx} value={stage?._id}>
                        {stage?.StageName}
                      </option>
                    ))}
                </select>
              </div>

              {loading && (
                <div className="h-[400px] flex justify-center items-center">
                  <BeatLoader loading={loading} color="#000229" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-redhat">
                {teams &&
                  teams.map((team, idx) => (
                    <Link href={`${path}/${team._id}`} key={idx}>
                      <div
                        className={`${
                          isOdd(idx) ? "bg-[url('/team-bg-blue.png')]" : "bg-[url('/team-bg-red.png')]"
                        } bg-cover bg-no-repeat py-4 px-6 cursor-pointer rounded-md`}>
                        <div className="rounded-full w-20 h-20 my-4 border-2 bg-white">
                          <img
                            src={`${team.TeamLogo ? team.TeamLogo : "/default-team-logo.png"}`}
                            alt={team.TeamName}
                            className="w-full rounded-full h-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-yellow-400 font-bold text-2xl">{team?.Institution?.InstitutionName}</h1>
                          <h1 className="font-semibold text-white mt-3 text-xl">{team.TeamName}</h1>
                          <span className="text-white mt-4 flex gap-3 hover:text-warning">View Team</span>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {teams.length === 0 && <h1> No Team available for the stage </h1>}
              </div>
            </div>
            <div className="hidden lg:block w-4/12 xl:w-3/12">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
