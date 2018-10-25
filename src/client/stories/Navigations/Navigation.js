import React from "react";

import { storiesOf } from "@storybook/react";
import NavigationBase from "./Base/NavigationBase";

storiesOf("Navigation", NavigationBase).add("Defautl Navigation", () => (
  <NavigationBase />
));
