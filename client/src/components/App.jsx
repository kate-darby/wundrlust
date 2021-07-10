import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Banner from './Banner.jsx';
import DayDreamButton from './DayDreamButton.jsx';
import PlannerButton from './PlannerButton.jsx';
import DreamSearch from './DreamSearch.jsx';
import PlanSearch from './PlanSearch.jsx';
import FutureTrips from './FutureTrips.jsx';



const ButtonWrapper = styled.div`
  margin-top: 3%;
  height: 400px;
  display: grid;
  grid-template-columns: 45% 45%;
  column-gap: 10%;
  align-items: stretch;
  background-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 100%),
                    url('/assets/planeWindow2.jpeg');
  background-size: cover;
  overflow: scroll;
`;

const App = (props) => {
  const [dayDreaming, setDayDreaming] = useState(false);
  const [planning, setPlanning] = useState(false);
  const [myTrips, setMyTrips] = useState([]);

  const getTrips = () => {
    axios.get('/trips')
    .then(trips => {
      setMyTrips(trips.data);
    })
  }

  useEffect(() => {
    getTrips();
  }, [])

  const handleClickDayDream = () => {
    if (planning) {
      setPlanning(false);
    }
    setDayDreaming(true);
  }

  const handleClickPlan = () => {
    if (dayDreaming) {
      setDayDreaming(false);
    }
    setPlanning(true);
  }

  const handleXClick = () => {
    setDayDreaming(false);
    setPlanning(false);
  }

  const handleGarbageClick = (obj) => {
    axios.delete(`/trips/${obj._id}`)
    .then(() => {
      console.log('deleted!');
    })
    .then(() => {
      getTrips();
    });
  }

  const handleAddClick = (obj) => {
    axios.post('/trips', obj)
    .then(() => {
      console.log('Added!');
    })
    .then(() => {
      getTrips();
    });
  }

  return (
    <div style={{height: "100vh"}}>
      <Banner />
      <ButtonWrapper>
        <DayDreamButton handleClick={handleClickDayDream} handleXClick={handleXClick}/>
        <PlannerButton handleClick={handleClickPlan} handleXClick={handleXClick}/>
      </ButtonWrapper>
      {dayDreaming ? <DreamSearch handleClick={handleAddClick}/> : planning ? <PlanSearch handleClick={handleAddClick}/> : null}
      {myTrips.length ? <FutureTrips myTrips={myTrips} handleClick={handleGarbageClick}/> : null}
    </div>
  )
}

export default App;