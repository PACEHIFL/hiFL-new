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
import { useRouter } from "next/router"

const Slug = () => {
  const [tabs, setTabs] = useState(0);
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(false)
  const [players, setPlayers] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [results, setResults] = useState([]);
  const router = useRouter()
  const pathName = router.query.id

  const fetchData = async () => {
    setLoading(true)
    const baseURL = process.env.BASE_URL;
    const { data, errors } = await axios(`${baseURL}/teams/team/?_id=${pathName}`);
    const { data: player } = await axios(`${baseURL}/players/active/?Team=${pathName}`);
    const { data: fixtures } = await axios(`${baseURL}/leagues/season/fixtures/?MatchStatus=FIXTURE&HomeTeam=${pathName}`);
    const { data: results } = await axios(`${baseURL}/leagues/season/fixtures/?MatchStatus=RESULT&HomeTeam=${pathName}`);
    setTeam(data?.data)
    setPlayers(player?.data)
    setFixtures(fixtures?.data)
    setResults(results?.data)
    setLoading(false)
  }

  useEffect(() => {
    if(pathName) {
      fetchData()
    }
  }, [pathName])

  return (
    <div>
      <TeamsHeader data={team} />
      <Tabs tabs={tabs} setTabs={setTabs} />
      <div className="bg-white">
        <div className="max-w-[94%] md:max-w-[90%] mx-auto py-10 text-black"> 
          {tabs === 0 && <Overview data={team} loading={loading} />}
          {tabs === 1 && <Squad data={players} loading={loading} />}
          {tabs === 2 && <Fixtures data={fixtures} loading={loading} />}
          {tabs === 3 && <Results data={results} loading={loading} />}
          {/* {tabs === 4 && <Stats data={data} /> } */}
          {tabs === 4 && <Store /> }
        </div>
      </div>
    </div>
  );
};

export default Slug;

// export const getStaticProps = async ({ params: { id } }) => {
//   try {
//     const baseURL = process.env.BASE_URL;
//     const { data, errors } = await axios(`${baseURL}/teams/team/?_id=${id}`);
//     const { data: players } = await axios(`${baseURL}/players/active/?Team=${id}`);

//     return {
//       props: {
//         data: data.data,
//         players: players.data,
//       },
//     };
//   } catch (error) {
//     // return { notFound: true };
//     console.log(error)
//   }
// };

// export const getStaticPaths = async () => {
//   try {
//     const baseURL = process.env.BASE_URL;
//     const { data: settings, errors } = await axios(`${baseURL}/settings/setting/league/?CurrentLeagueName=HiFL`);
//     const { data } = await axios(`${baseURL}/leagues/league/stages/?League=${settings?.data?.CurrentLeague?._id}`);
//     const ids = data?.data?.map((team) => team.Teams).map(team => console.log([...team]))
//     const paths = ids.map((id) => ({ params: { id: id + "" } }))

    
//     return {
//       paths,
//       fallback: false,  
//     }
//   } catch (error) {
//     return { paths: [], fallback: false };
//   }
// };
