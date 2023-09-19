import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import LottieJson from '@/public/main_title.json';

const Animation = () => {
  return (
    <div>
      <Player autoplay loop src={LottieJson} />
    </div>
  );
};

export default Animation;
