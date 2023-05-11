import type { NextPage } from "next";
import InfoSection from "../components/InfoSection";
import React, { useState, useEffect } from "react";
import { ActivityInterface } from "../models/Activity";
import ActivityCard from "../components/ActivityCard";
import { FaCircleNotch, FaSpinner } from "react-icons/fa";

const Home: NextPage = () => {
  const [activities, setActivities] = useState<ActivityInterface[]>([]);
  const [activityTypes, setActivityTypes] = useState<String[]>([]);
  const [loadingActivities, SetLoadingActivities] = useState<Boolean>(false);
  const [selectedType, setSelectedType] = useState("");

  const filteredActivities: ActivityInterface[] = selectedType
    ? activities.filter((activity) => activity.type === selectedType)
    : activities;

  useEffect(() => {
    SetLoadingActivities(true);
    fetch("https://random-activities-api.herokuapp.com/activities")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
        SetLoadingActivities(false);
      })
      .catch((err) => {
        console.log(err);
        SetLoadingActivities(false);
      });
  }, []);

  useEffect(() => {
    const newActivityTypes: String[] = Array.from(
      new Set(activities.map((activity) => activity.type))
    );
    setActivityTypes(newActivityTypes);
  }, [activities]);

  return (
    <div className="flex flex-col h-[100vh]">
      <InfoSection
        keyWord1="Random"
        keyWord2="Activities"
        title="Are you bored?"
        body="Here's a collection of diverse activities to explore whenever you
        find yourself at a loss for what to do next."
      />

      <div
        className={`flex flex-1 flex-col justify-start gap-4 p-8 md:p-20 py-20 bg-primary`}
      >
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="text-lg font-medium text-white">The Activity List</p>
          <select
            className="w-[150px] py-2 px-3 border-none bg-white rounded-md focus:outline-none sm:text-sm"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            {activityTypes.map((type, index) => (
              <option key={index} value={type.toString()}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-stretch flex-wrap lg:flex-row gap-8 mb-6">
          {loadingActivities ? (
            <FaSpinner className="text-white text-xl mr-2 animate-spin" />
          ) : filteredActivities.length === 0 ? (
            <p className="text-md font-medium text-white">
              It looks like there is not activities loaded at the moment.
            </p>
          ) : (
            filteredActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
