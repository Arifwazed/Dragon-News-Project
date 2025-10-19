// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const Loading = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
        {/* <DotLottieReact src="path/to/animation.lottie" loop autoplay /> */}
      </div>
    );
};

export default Loading;