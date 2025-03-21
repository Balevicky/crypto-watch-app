import React, { useEffect, useState } from "react";
import colors from "../styles/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();
  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);
  return (
    <p className="percent-change-containter" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
      {/* // toFixed(1) arrondie un chiffre apres la virgule */}
    </p>
  );
};

export default PercentChange;
