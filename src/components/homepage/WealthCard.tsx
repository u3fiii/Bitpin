import { useEffect, useState } from "react";
import WealthDiagram from "./WealthDiagram";
import "../../styles/homepage/wealth-card.scss";

import hide from "../../assets/icons/hide.svg";

const WealthCard = () => {
  const [showDiagram, setShowDiagram] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0); // State for animated negative value
  const [actualAmount, setActualAmount] = useState(0); // State for animated actual amount
  const targetValue = 512450; // Target negative value
  const targetActualAmount = 2550760; // Target actual amount

  useEffect(() => {
    // Set a timeout to show the diagram after 0.5 seconds
    const timer = setTimeout(() => {
      setShowDiagram(true);
    }, 500); // 500 milliseconds = 0.5 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const duration = 2000; // Duration for both animations
    const incrementTime = 80; // Update every 80 milliseconds

    // Animate the negative value
    const incrementNegativeAmount = Math.floor(
      targetValue / (duration / incrementTime)
    );

    const animateNegativeNumber = () => {
      setAnimatedValue((prev) => {
        const nextValue = prev + incrementNegativeAmount;
        if (
          (incrementNegativeAmount > 0 && nextValue >= targetValue) ||
          (incrementNegativeAmount < 0 && nextValue <= targetValue)
        ) {
          return targetValue; // Set to target value when reached
        }
        return nextValue; // Continue animating
      });
    };

    const negativeInterval = setInterval(animateNegativeNumber, incrementTime); // Set interval for negative animation

    return () => clearInterval(negativeInterval); // Cleanup for negative animation
  }, []); // Run this effect only once when component mounts

  useEffect(() => {
    const duration = 2000; // Duration for actual amount animation
    const incrementTime = 80; // Update every 80 milliseconds

    const incrementActualAmount = Math.floor(
      targetActualAmount / (duration / incrementTime)
    );

    const animateActualNumber = () => {
      setActualAmount((prev) => {
        const nextValue = prev + incrementActualAmount;
        if (
          (incrementActualAmount > 0 && nextValue >= targetActualAmount) ||
          (incrementActualAmount < 0 && nextValue <= targetActualAmount)
        ) {
          return targetActualAmount; // Set to target value when reached
        }
        return nextValue; // Continue animating
      });
    };

    const actualInterval = setInterval(animateActualNumber, incrementTime); // Set interval for actual amount animation

    return () => clearInterval(actualInterval); // Cleanup for actual amount animation
  }, []); // Run this effect only once when component mounts

  return (
    <div className="wealth-card">
      <div className="top-part">
        <p className="title">موجودی کل شما</p>
        <div className="amount">
          <div className="hide-container">
            <img src={hide} />
          </div>
          <p className="actual-amount">{actualAmount.toLocaleString()}</p>{" "}
          {/* Format with commas */}
          <p className="toman">تومان</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom-part">
        <div className="bottom-part-texts">
          <p>سود و زیان در ۳۰ روز گذشته:</p>
          <p className="negative">{animatedValue.toLocaleString()} +</p>{" "}
          {/* Format with commas */}
        </div>
        <div className="diagram">
          {showDiagram && <WealthDiagram />}{" "}
          {/* Render WealthDiagram only if showDiagram is true */}
        </div>
      </div>
    </div>
  );
};

export default WealthCard;
