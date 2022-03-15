module.exports = {
    apps : [
        {
          name: "01computacion-landing",
          script: "./bin/www",
          exec_mode: "cluster",
          watch: false,
          env: {
              "PORT": 3000,
              "NODE_ENV": "production"
          }
        }
    ]
}
