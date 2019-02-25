/*
      History         : AML demo
*/
const debug = process.env.DEBUG;
DEBUG=true;
var defaultTimeoutInterval = 20000;
let context={};

var assert = require('assert');

exports.config = {
  host: 'localhost',
  port: 4444,
  specs: [ './tests/**/*.test.js' ],
  //specs: [__dirname + '/specs/dynamic.spec.js'],
  capabilities: [ {maxInstances: 5,browserName: 'firefox' }, { maxInstances: 5,browserName: 'chrome' } ],
  logLevel: 'trace', 
  outputDir: './logs',
  coloredLogs: true,
  waitforTimeout: 20000,
  baseUrl: 'https://www.google.com',
  framework: 'jasmine',
  reporters: ['spec','dot',['junit', { outputDir: './logs', errorOptions: { error: 'message', failure: 'message', stacktrace: 'stack' }  }], ],
  jasmineNodeOpts: { defaultTimeoutInterval: 20000,  expectationResultHandler: function(passed, assertion) { } },
  maxInstances: 2,
  onPrepare: function()           { },
  before: function()              { },
  after: function(failures, pid)  { },
  onComplete: function()          { },
  afterTest: (test) =>            { }
};
