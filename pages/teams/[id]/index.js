import React, { useState, useEffect } from "react";
import Fixtures from "../../../components/teams/Fixtures";
import Overview from "../../../components/teams/Overview";
import Results from "../../../components/teams/Result";
import Squad from "../../../components/teams/Squad";
import Tabs from "../../../components/teams/Tabs";
import SideBar from "../../../components/shared/SideBar";
import TeamsHeader from "../../../components/teams/TeamsHeader";
import Stats from "../../../components/teams/Stats";
import Store from "../../../components/teams/Store";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Slug = () => {
  const [tabs, setTabs] = useState(0);
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [settings, setSettings] = useState();
  const [seasons, setSeasons] = useState();
  const [fixtures, setFixtures] = useState([]);
  const [results, setResults] = useState([]);
  const [stages, setStages] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [currentStageId, setCurrentStageId] = useState("");
  const router = useRouter();
  const pathName = router.query.id;
  const baseURL = process.env.BASE_URL;

  const fetchAllSettings = async () => {
    try {
      const { data, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
      const { data: seasons } = await axios(`${baseURL}/leagues/seasons/`);
      setSettings(data?.data);
      setSeasons(seasons?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllSettings();
  }, []);

  const fetchStages = async () => {
    try {
      setLoading(true);
      const { data } = await axios(`${baseURL}/leagues/league/stages/?League=${settings?.CurrentLeague?._id}`);
      setStages(data?.data);
      setLoading(false);

      if (stages.length !== 0) {
        setCurrentStageId(stages[0]?._id);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (settings?.CurrentLeague?._id !== undefined) fetchStages();
  }, []);

  const fetchFixturesAndResults = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `${baseURL}/leagues/season/fixtures/?Stage=${currentStageId}&MatchStatus=FIXTURE&HomeTeam=${pathName}`
      );
      const { data: results } = await axios(
        `${baseURL}/leagues/season/fixtures/?Stage=${currentStageId}&MatchStatus=RESULT&HomeTeam=${pathName}`
      );
      setFixtures(data?.data);
      setResults(results?.data);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.statusText, { autoClose: 1500 });
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentStageId !== "" && pathName !== "") {
      fetchFixturesAndResults();
    }
  }, [currentStageId]);

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentStageId(value);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, errors } = await axios(`${baseURL}/teams/team/?Slug=${pathName}`);
      console.log(data);
      const { data: player } = await axios(`${baseURL}/players/active/?Team=${data?.data?._id}`);
      const { data: results } = await axios(
        `${baseURL}/leagues/season/fixtures/?MatchStatus=RESULT&HomeTeam=${data?.data?._id}`
      );
      setTeam(data?.data);
      setPlayers(player?.data);
      setResults(results?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSeasonChange = (e) => {
    const { name, value } = e.target;
    // setLoading(true)
    // console.log(value, settings.CurrentSeason._id)
    // if(value !== settings.CurrentSeason._id) {
    //   setFixtures([])
    //   setLoading(false)
    // } else {
    //   setFixtures([...teams])
  };

  useEffect(() => {
    if (pathName) {
      fetchData();
    }
  }, [pathName]);

  return (
    <div>
      <TeamsHeader data={team} loading={loading} />
      <Tabs tabs={tabs} setTabs={setTabs} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black">
          {tabs === 0 && <Overview data={team} loading={loading} />}
          {tabs === 1 && <Squad data={players} loading={loading} />}
          {tabs === 2 && (
            <Fixtures
              fixtures={fixtures}
              loading={loading}
              handleChange={handleChange}
              handleSeasonChange={handleSeasonChange}
              seasons={seasons}
              stages={stages}
            />
          )}
          {tabs === 3 && (
            <Results
              results={results}
              loading={loading}
              handleChange={handleChange}
              handleSeasonChange={handleSeasonChange}
              seasons={seasons}
              stages={stages}
            />
          )}
          {/* {tabs === 4 && <Stats data={data} /> } */}
          {tabs === 4 && <Store />}
        </div>
      </div>
    </div>
  );
};

export default Slug;
