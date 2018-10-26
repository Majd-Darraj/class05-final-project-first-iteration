import React from "react";

import { storiesOf } from "@storybook/react";
import MapComponent from "./Base/MapComponent";

storiesOf("Maps", module).add("set map to UCPH Zoom=14", () => (
  <MapComponent
    mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
    setMarker
    Zoom={14}
  />
));
