import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../actions/userDataActions';

const PickSlot = (props) => {
  const dispatch = useDispatch();

  const [dateList, setDateList] = useState([
    { date: 1, day: 'Thurs', show: true },
    { date: 2, day: 'Thurs', show: true },
    { date: 3, day: 'Thurs', show: true },
    { date: 4, day: 'Thurs', show: false },
    { date: 5, day: 'Thurs', show: false },
    { date: 6, day: 'Thurs', show: false },
    { date: 7, day: 'Thurs', show: false },
    { date: 8, day: 'Thurs', show: false },
    { date: 9, day: 'Thurs', show: false },
    { date: 10, day: 'Thurs', show: false },
  ]);

  const morningTime = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];
  const noonTime = ['02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  const [date, setDate] = useState(-1);
  const [time1, setTime1] = useState(-1);
  const [time2, setTime2] = useState(-1);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(2);

  const left = () => {
    if (leftIndex !== 0) {
      let newDateList = dateList;

      newDateList[leftIndex - 1].show = true;
      newDateList[rightIndex].show = false;

      setLeftIndex((prev) => prev - 1);
      setRightIndex((prev) => prev - 1);
      setDateList([...newDateList]);
    }
  };

  const right = () => {
    if (rightIndex + 1 !== dateList.length) {
      let newDateList = dateList;

      newDateList[leftIndex].show = false;
      newDateList[rightIndex + 1].show = true;

      setRightIndex((prev) => prev + 1);
      setLeftIndex((prev) => prev + 1);
      setDateList([...newDateList]);
    }
  };

  const clickDateHandler = (index) => {
    setDate(index);
  };

  const clickMorningHandler = (index) => {
    setTime1(index);
    setTime2(-1);
  };

  const clickNoonHandler = (index) => {
    setTime1(-1);
    setTime2(index);
  };

  const handleSubmit = () => {
    if (date !== -1 && (time1 !== -1 || time2 !== -1)) {
      dispatch(
        saveUserData(
          dateList[date],
          time1 !== -1 ? morningTime[time1] : noonTime[time2]
        )
      );
      props.actions.bookSlotHandler();
    }
  };

  return (
    <div>
      <div className='date-picker'>
        <div>
          <button
            onClick={left}
            className={leftIndex === 0 ? 'disabled' : 'enabled'}
          >
            {'<'}
          </button>
        </div>

        {dateList.map((i, index) => (
          <div
            className={`box ${date === index && 'selected'} ${
              i.show ? 'show' : 'hide'
            }`}
            key={index}
            onClick={() => clickDateHandler(index)}
          >
            <div>{i.date}</div>
            <div>{i.day}</div>
          </div>
        ))}

        <div>
          <button
            onClick={right}
            className={
              rightIndex + 1 === dateList.length ? 'disabled' : 'enabled'
            }
          >
            {'>'}
          </button>
        </div>
      </div>

      <div>
        <div>
          <div>Morning</div>
        </div>
        <div className='day-picker'>
          {morningTime.map((t, index) => (
            <div
              className={`box box-day ${time1 === index && 'selected'}`}
              key={index}
            >
              <div onClick={() => clickMorningHandler(index)}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div>Noon</div>
        </div>
        <div className='day-picker'>
          {noonTime.map((t, index) => (
            <div
              className={`box box-day ${time2 === index && 'selected'}`}
              key={index}
            >
              <div onClick={() => clickNoonHandler(index)}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      <button className='submit' onClick={handleSubmit}>
        Book Slot
      </button>
    </div>
  );
};

export default PickSlot;
