import React from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../assets/hand-load.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <>
      <div>
        <Lottie
          options={defaultOptions}
          width={"50%"}
          height={"50%"}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </>
  );
};

export default Loading;
