import React, { useState, useEffect } from "react";

export const useAppVisible = () => {
  const [visible, setVisible] = useState(
    document.visibilityState === "visible"
  );
  useEffect(() => {
    const change = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", change);
    return () => document.removeEventListener("visibilitychange", change);
  }, []);

  return visible;
};
