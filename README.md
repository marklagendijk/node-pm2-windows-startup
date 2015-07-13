# pm2-windows-startup
Utility to make [PM2](https://github.com/Unitech/PM2) automatically resurrect on Windows startup. The utility achieves this by adding the right registry entry, using [start-on-windows-boot](https://github.com/marklagendijk/node-start-on-windows-boot).

## Installation and usage
``` bash
> npm install pm2-windows-startup -g
> pm2-startup install
```


PM2 will now automatically revive the saved processes on startup. To save the current list of processes execute:
``` bash
> pm2 save
```
