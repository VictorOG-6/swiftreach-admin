import React, { useState, useEffect } from 'react';
import { Button, Slider } from '../components';
import { trackedorders } from '../data/dummy';

const TrackingCard = () => {
  const [orderStates, setOrderStates] = useState([]);

  useEffect(() => {
    const initialOrderStates = trackedorders.map((order) => {
      let color = '';
      let status = '';

      if (order.sliderPercentage === 0) {
        color = '#00A7EC';
        status = 'Shipping';
      } else if (order.sliderPercentage > 0 && order.sliderPercentage < 100) {
        color = '#FFC107';
        status = 'Pending';
      } else if (order.sliderPercentage === 100) {
        color = '#80FFBA';
        status = 'Successful';
      }

      return { ...order, color, status };
    });

    setOrderStates(initialOrderStates);
  }, []);

  return (
    <>
      {orderStates.map((order, index) => (
        <div key={index} className="bg-white w-[23vw] rounded-3xl px-2 pt-2 pb-4">
          <div className="flex justify-between mb-2">
            <div>
              <h3>Tracking ID</h3>
              <h1 className="font-bold">{order.id}</h1>
            </div>
            <Button text="View Now" textcolor="black" backgroundcolor="white" />
          </div>
          <div className="flex justify-between mb-2">
            <div>
              <h3>Estimated Date of Delivery</h3>
              <h1 className="font-bold">{order.deliveryDate}</h1>
            </div>
            <div className="flex items-center justify-center px-2 rounded-3xl" style={{ backgroundColor: order.color }}>
              <h5>{order.status}</h5>
            </div>
          </div>
          <Slider value={order.sliderPercentage} color={order.color} />
          <div className="flex justify-between mt-2">
            <div>
              <h3>Pickup Address</h3>
              <h5 className="font-bold">{order.pickupAddress}</h5>
            </div>
            <div>
              <h3>Delivery Address</h3>
              <h5 className="font-bold">{order.deliveryAddress}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrackingCard;
