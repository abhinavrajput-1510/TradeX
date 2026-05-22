import { Tooltip } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import GeneralContext from "./GeneralContext";

const WatchListActions = ({ uid }) => {
  const generalContext = React.useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button className="action">
            <BarChartIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchListActions;
