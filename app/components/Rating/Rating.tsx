import React from "react";

import HalfStar from "./components/HalfStar";
import Star from "./components/Star";

type StarRateProps = {
  score: number;
};

const Rating = ({ score }: StarRateProps) => {
  const stars = [];
  const divideRemainder = score % 2;
  const roundedValue = Math.round(score / 2);

  for (let i = 1; i <= 5; i += 1) {
    const isHalf = i === roundedValue && divideRemainder !== 0;
    const isFilled = !isHalf && i <= roundedValue;

    stars.push(
      isHalf ? (
        <HalfStar key={`halfstar-${i}`} value={roundedValue} />
      ) : (
        <Star
          key={`star-${i}`}
          value={roundedValue}
          isFilledStar={isFilled}
        />
      ),
    );
  }

  return <div className="flex items-center space-x-0.5">{stars}</div>;
};

export default Rating;
