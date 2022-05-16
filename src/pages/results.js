import React, {useState} from "react";
import { Bracket } from "react-brackets";
import { Seed, SeedItem, SeedTeam } from "react-brackets";
import { Link } from "react-router-dom";
import AltNav from "../components/Navbar/AltNav";
import ScrollToTop from "../components/ScrollToTop";
import AltSidebar from "../components/Sidebar/AltSidebar";

const Result = () => {
  let speedTimes = [20, 20.2, 20.5, 21];
  const rounds = [
    {
      title: "Round one",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [
            {
              name: `Mercedes`,
              time: speedTimes[0],
              path: "/mercides-profile",
            },
            {
              name: `Ferrari`,
              time: speedTimes[2],
              path: "/Ferrari-profile",
            },
          ],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [
            { name: `BMW`, time: speedTimes[1], path: "/BMW-profile" },
            { name: `Audi`, time: speedTimes[3], path: "/Audi-profile" },
          ],
        },
      ],
    },
    {
      title: "Round two",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [
            {
              name: `Mercedes`,
              time: speedTimes[0],
              path: "/mercides-profile",
            },
            { name: `BMW`, time: speedTimes[1], path: "/BMW-profile" },
          ],
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }

  return (
    <>
      <ScrollToTop />
      <AltSidebar isOpen={isOpen} toggle={toggle} />
      <AltNav toggle={toggle} />
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        marginTop: "20px",
        height: "100vh",
      }}
      >
        <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />
      </div>
    </>
  );
};

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <Link
            to={seed.teams[0]?.path || "#"}
            style={{ textDecoration: "none" }}
          >
            <SeedTeam style={{ color: "red" }}>
              {seed.teams[0]?.name || "NO TEAM "}
              <h4> {seed.teams[0]?.time} </h4>
            </SeedTeam>
          </Link>
          <Link
            to={seed.teams[1]?.path || "#"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <SeedTeam>
              {seed.teams[1]?.name || "NO TEAM "}
              <h4> {seed.teams[1]?.time} </h4>
            </SeedTeam>
          </Link>
        </div>
      </SeedItem>
    </Seed>
  );
};

export default Result;
