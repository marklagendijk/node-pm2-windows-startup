#!/usr/bin/env node

var startOnBoot = require('start-on-windows-boot');
var argv = require('yargs')
    .usage('Usage: pm2-startup <command>')
    .command('install', 'Adds a registry entry which resurrects PM2 on startup.')
    .command('uninstall', 'Removes the registry entry which resurrects PM2 on startup.')
    .demand(1)
    .argv
    ._;

var applicationName = 'PM2';
var applicationCommand = 'wscript.exe "' + __dirname + '\\invisible.vbs" "' + __dirname + '\\pm2_resurrect.cmd"';

switch (argv[0]) {
    case 'install':
        enablePm2Startup();
        break;

    case 'uninstall':
        removePm2Startup();
        break;
}


function enablePm2Startup() {
    startOnBoot.enableAutoStart(applicationName, applicationCommand, function (error) {
        if (error) {
            console.log('Error while trying to add PM2 startup registry entry: ' + error);
        }
        else {
            console.log('Successfully added PM2 startup registry entry.');
        }
    });
}

function removePm2Startup() {
    startOnBoot.disableAutoStart(applicationName, function (error) {
        if (error) {
            console.log('Error while trying to remove PM2 startup registry entry: ' + error);
        }
        else {
            console.log('Successfully removed PM2 startup registry entry.');
        }
    });
}