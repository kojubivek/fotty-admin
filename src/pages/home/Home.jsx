import React, { useEffect, useMemo, useState } from "react";
import { PageLayout } from "../layout/PageLayout";
import "./Home.css";
import { FeaturedInfo } from "../../components/featuredinfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import { SmallWidget } from "../../components/widget/SmallWidget";
import { userRequest } from "../../helper/userRequests";
import { format } from "timeago.js";
export const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest("/users");
        const { users } = res.data;
        let user = 0;
        users.map((item) => {
          const getMonths = new Date(item.createdAt).getMonth();
          setUserStats((prevStats) => [
            ...prevStats,
            { name: MONTHS[getMonths], "Active Users": user++ },
          ]);
        });
      } catch (error) {}
    };
    getStats();
  }, []);
  console.log("before rendering home", userStats);
  return (
    <PageLayout>
      {console.log("from render")}
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userStats}
          title="User Analytics"
          datakey="Active Users"
          grid
        />
        <SmallWidget />
      </div>
    </PageLayout>
  );
};
