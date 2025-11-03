REACT NATIVE WITH EXPO
====

# Start

## Create Project
```shell
npm install -g pnpm@latest-10
pnpm add -g expo-cli
npx create-expo-app@latest ExpoDemo
rm -rf node_modules
rm -f package-lock.json
pnpm expo install
```

## Run 
```shell
pnpm start
```

## Build
https://docs.expo.dev/develop/development-builds/create-a-build/#build-on-eas
```shell
npm install -g eas-cli
eas build
eas build --platform android
eas build --platform ios

pnpm expo install expo-dev-client
eas build --profile development
```

# Hook

# Database
- https://orm.drizzle.team/docs/get-started/expo-new

```shell
pnpm migration:generate
```

# API

# Firebase

# Check
```shell
expo doctor
```