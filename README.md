# Storybook Large – Demo

## How was this demo project set up?

- Installed Storybook using `npx -p @storybook/cli sb init --type react`
- Added demo variation with ten stories
- Cloned demo variation 300 times using `for i in {1..300}; do cp demo.stories.js "demo$i.stories.js"; done`

## How to verify Storybook changes locally?

I'm sure there are better ways! But at least, below procedure worked for me _good enough_:

- Clone Storybook from https://github.com/storybookjs/storybook or a fork.
- `brew install yarn && yarn install && yarn bootstrap` – select "Run local registry" or "Generate DLL" when asked.
- Navigate to the sub-project you want to modify (e.g. `app/react`) and run `yarn link`.
- Navigate to `storybook-large-demo` and run `yarn link @storybook/react`.
- If that doesn't work, try pointing the dependency to your local folder: `"@storybook/react": "file:../storybook/app/react",` and run `yarn link @storybook/react`.
- If a change doesn't show up, run `yarn bootstrap` with "Generate DLL" to reliably get the change to show up. You probably have to restart `yarn storybook`.
