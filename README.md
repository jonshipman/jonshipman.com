# jonshipman.com

Portfolio site for Jon Shipman

To recreate this project with the same configuration:

```sh
# recreate this project
bunx sv@0.12.7 create --template minimal --types ts --add prettier eslint tailwindcss="plugins:typography,forms" --install bun jonshipman.com
```

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```sh
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```sh
bun run build
```

You can preview the production build with `bun run preview`.
