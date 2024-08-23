"use client";

// react
import { useState } from "react";
// cmp
import { Button } from "../ui/button";
// icons
import {
  ExpandInRegular,
  ExpandOutRegular,
  SolarFullScreenSquareBoldDuotone,
  SolarQuitFullScreenSquareBoldDuotone,
} from "../svg";

export default function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullscreen(false);
  };

  return (
    <Button
      variant="icon"
      onClick={!isFullscreen ? enterFullscreen : exitFullscreen}
    >
      {!isFullscreen ? (
        <SolarFullScreenSquareBoldDuotone />
      ) : (
        <SolarQuitFullScreenSquareBoldDuotone />
      )}
    </Button>
  );
}
