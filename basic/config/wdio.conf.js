/*
      History         : AML demo
*/

var debug = process.env.DEBUG;
debug=true;
var assert = require('assert');
var defaultTimeoutInterval = 20000;
let context={};

exports.config = {
  host: 'localhost',
  port: 4444,
  specs: [ './tests/**/*.js' ],
  capabilities: [ { browserName: 'firefox' }, { browserName: 'chrome' } ],
  logLevel: 'error',  // trace | debug | info | warn | error | silent
  logOutput: './logs/logging.log',
  coloredLogs: true,
  waitforTimeout: 20000,
  baseUrl: 'http://google.com',
  framework: 'jasmine',
  reporters: ['spec','dot',['junit', { outputDir: './results', errorOptions: { error: 'message', failure: 'message', stacktrace: 'stack' }  }], ],
  jasmineNodeOpts: { defaultTimeoutInterval: 20000,  expectationResultHandler: function(passed, assertion) { } },
  maxInstances: 1,
  onPrepare: function()           { },
  before: function()              { },
  after: function(failures, pid)  { },
  onComplete: function()          { },
  afterTest: (test) =>            { }
};
