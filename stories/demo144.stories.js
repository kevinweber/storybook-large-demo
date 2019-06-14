import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "@storybook/react/demo";

const randomDemoName = Math.random()
  .toString(36)
  .substring(7);

storiesOf(randomDemoName, module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("with text 2", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji 2", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("with text 3", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji 3", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("with text 4", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji 4", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("with text 5", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji 5", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
