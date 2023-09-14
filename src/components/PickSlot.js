import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveSlotDetails } from '../actions/userDataActions';

const PickSlot = (props) => {
  const dispatch = useDispatch();

  const [dateList, setDateList] = useState([
    { date: '1 May', day: 'Thu', show: true },
    { date: '2 May', day: 'Fri', show: true },
    { date: '3 May', day: 'Sat', show: true },
    { date: '4 May', day: 'Sun', show: false },
    { date: '5 May', day: 'Mon', show: false },
    { date: '6 May', day: 'Tue', show: false },
    { date: '7 May', day: 'Wed', show: false },
    { date: '8 May', day: 'Thu', show: false },
    { date: '9 May', day: 'Fri', show: false },
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
      const slotDate = dateList[date],
        slotTime = time1 !== -1 ? morningTime[time1] : noonTime[time2];

      dispatch(saveSlotDetails(slotDate, slotTime));

      props.actions.bookSlotHandler(slotDate, slotTime);
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
            <div className='date'>{i.date}</div>
            <div className='day'>{i.day}</div>
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
              <div onClick={() => clickMorningHandler(index)} className='time'>
                {t}
              </div>
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
              <div className='time' onClick={() => clickNoonHandler(index)}>
                {t}
              </div>
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
