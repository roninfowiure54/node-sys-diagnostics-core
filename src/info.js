import os from 'node:os';

const sysInfo = {
  platform: os.platform(),
  arch: os.arch(),
  cpus: os.cpus().length,
  totalmem: os.totalmem(),
  uptime: os.uptime()
};

console.log("System diagnostic summary compiled successfully:");
console.log(JSON.stringify(sysInfo, null, 2));
