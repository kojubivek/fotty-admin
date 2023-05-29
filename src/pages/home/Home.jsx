import React from "react";
import { PageLayout } from "../layout/PageLayout";
import "./Home.css";
import { FeaturedInfo } from "../../components/featuredinfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import { SmallWidget } from "../../components/widget/SmallWidget";
export const Home = () => {
  return (
    <PageLayout>
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          datakey="Active User"
          grid
        />
        <SmallWidget />
      </div>
    </PageLayout>
  );
};
