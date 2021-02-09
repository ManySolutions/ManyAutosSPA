module.exports = {
  apps: [
    {
      name: 'ManyAutosStagingApp',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      port: 4090
    }
  ]
}