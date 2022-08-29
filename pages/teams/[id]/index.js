import React, { useState, useEffect } from "react";
import Fixtures from "../../../components/teams/Fixtures";
import Overview from "../../../components/teams/Overview";
import Squad from "../../../components/teams/Squad";
import Tabs from "../../../components/teams/Tabs";
import SideBar from "../../../components/shared/SideBar";
import TeamsHeader from "../../../components/teams/TeamsHeader";
import Stats from "../../../components/teams/Stats";
import Store from "../../../components/teams/Store";
import axios from "axios";
import { useRouter } from "next/router";

const Slug = () => {
  const [tabs, setTabs] = useState(0);
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [seasons, setSeasons] = useState();
  const [fixtures, setFixtures] = useState([]);
  const [activeSeasonId, setActiveSeasonId] = useState("");

  // Router settings
  const router = useRouter();
  const pathName = router.query.id;
  const baseURL = process.env.BASE_URL;

  const fetchAllSettings = async () => {
    try {
      const { data } = await axios(`${baseURL}/leagues/seasons/`);
      const updatedSeason = data?.data?.reverse();
      setSeasons(updatedSeason);
      setActiveSeasonId(updatedSeason[0]._id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllSettings();
  }, []);

  const fetchFixturesAndResults = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `${baseURL}/leagues/season/fixtures/?Season=${activeSeasonId}&HomeTeam=${team?._id}`
      );
      setFixtures(data?.data);
      setLoading(false);
    } catch (err) {
      // toast.error(err.response?.statusText, { autoClose: 1500 });
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFixturesAndResults();
  }, [activeSeasonId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, errors } = await axios(`${baseURL}/teams/team/?Slug=${pathName}`);
      const { data: player } = await axios(`${baseURL}/players/active/?Team=${data?.data?._id}`);
      setTeam(data?.data);
      setPlayers(player?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSeasonChange = (e) => {
    const { value } = e.target;
    setActiveSeasonId(value);
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
            <Fixtures fixtures={fixtures} loading={loading} handleSeasonChange={handleSeasonChange} seasons={seasons} />
          )}
          {tabs === 3 && <Store />}
        </div>
      </div>
    </div>
  );
};

export default Slug;
