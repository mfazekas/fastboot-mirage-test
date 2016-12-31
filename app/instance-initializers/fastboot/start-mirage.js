/* globals FastBoot */
import { startMirage } from 'fastboot-mirage-test/initializers/ember-cli-mirage';
import config from '../../config/environment';

function startFastBootMirage() {
  if (config['ember-cli-mirage'] && config['ember-cli-mirage'].fastbootGlobal) {
    let port = config['ember-cli-mirage'].fastbootGlobal.port;
    return startMirage({
      environment: 'development',
      modulePrefix: 'fastboot-mirage-test',
      'ember-cli-mirage': {serverOptions: {express: {port}}}
    });
  }
}

function _somethingGlobalAcrossFastbootSandboxes() {
  if (typeof FastBoot !== 'undefined') {
    let express = FastBoot.require('express');
    return express;
  } else {
    return undefined;
  }
}

function storeServerForRestartOnLiveReload(server) {
  let context = _somethingGlobalAcrossFastbootSandboxes();
  if (context) {
    context.mirageServer = server;
  }
}

function shutdownOldServerOnLiveReload() {
  let context = _somethingGlobalAcrossFastbootSandboxes();
  if (context && context.mirageServer) {
    context.mirageServer.shutdown();
    context.mirageServer = undefined;
  }
}

shutdownOldServerOnLiveReload();
var server = startFastBootMirage();
storeServerForRestartOnLiveReload(server);

export default {
  name: "start-mirage",

  initialize: function(/*instance*/) { }
};
