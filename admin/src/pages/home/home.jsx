import React from 'react'
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/featuredInfo';
import Chart from '../../components/chart/chart';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/widgetLg';
import { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../requestMethods';

export default function Home() {

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

  useEffect(()=>{
    const getStats = async ()=>{
      try{
        const res = await userRequest.get("/users/stats")
        res.data.map((item)=>{
          setUserStats(prev=>[
            ...prev,
            {name:MONTHS[item._id-1], "Active User": item.total},
          ])
        })
      }catch{}
    };
    getStats();
  })


  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
