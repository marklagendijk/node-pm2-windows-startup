# node-pm2-windows-startup
Utility to make PM2 automatically resurrect on Windows startup. The utility achieves this by adding the right registry entry, using [start-on-windows-boot](https://github.com/marklagendijk/node-start-on-windows-boot).

## Installation and usage
1. `npm install pm2-windows-startup -g`
2. `pm2-startup install`