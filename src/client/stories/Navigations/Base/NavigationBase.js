import React from "react";

import { storiesOf } from "@storybook/react";
import NavigationBase from "./NavigationBase";

storiesOf("Pages", module).add("Internships Page Horizental", () => (
  <InternshipsList />
));
