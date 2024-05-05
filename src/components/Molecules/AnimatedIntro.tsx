import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedIntro = ({ onIntroComplete } : any) => {
  const text = "Car Rental";
  const [visible, setVisible] = useState(false);

  const animation = useSpring({
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration for slower animation
    onRest: () => {
      if (text.length > 0) {
        setTimeout(() => setVisible(true), 3000); // Delay before text appears
      } else {
        onIntroComplete();
      }
    },
  });

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        index++;
        setVisible(true);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          onIntroComplete();
        }, 2000);
      }
    }, ); // Adjust the speed of letter-by-letter animation for slower appearance
    return () => clearInterval(timer);
  }, [text, onIntroComplete]);

  return (<>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>

    <div
      style={{
        fontFamily: "Lobster, sans-serif",// Use the Didot font
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        fontWeight: "bold",
      }}
    >
      <animated.div
        style={{
          ...animation,
          fontSize: "120px",
          color: "white" // Adjust the font size to make the letters bigger
        }}
      >
        {text}
      </animated.div>
    </div>
    </>
  );
};

export default AnimatedIntro;
