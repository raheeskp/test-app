export default {
  apps: [
    {
      name: "my-react-app",
      script: "serve",
      args: "-s build -l 3000", // assuming your build folder is 'build'
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
