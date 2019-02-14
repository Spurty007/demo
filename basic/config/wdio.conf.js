exports.config = {
    /*
      History         : AML demo
   */
        host: 'localhost',
        port: 4444,
        specs: [
            './tests/**/*.js'
    ],
    capabilities: [
       /*
        // Ignored Docker - enough headaches with 'mature stuff'
        { browserName: 'internet explorer' }, // Probably fixable
        { browserName: 'phantomjs' }, // Probably fixable
        { browserName: 'edge' }, // Probably fixable
        { browserName: 'opera' }, // Probably fixable
        { browserName: 'safari' }, // Runs on Mac (sometimes)
        { browserName: 'appium' }, // Probably fixable
       */
       { browserName: 'firefox' }, 
       { browserName: 'chrome' }

    ],
    logLevel: 'error',
    coloredLogs: true,

    waitforTimeout: 20000,
    framework: 'jasmine',

    reporters: ['spec','dot',
                ['junit', 
                { 
                  outputDir: './results',
                  errorOptions: 
                  {
                    error: 'message',
                    failure: 'message',
                    stacktrace: 'stack'
                  } 
                }],
               ],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 20000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    maxInstances: 1,
    onPrepare: function() {
        // do something
    },
    before: function() {
        // do something
    },
    after: function(failures, pid) {
        // do something
    },
    onComplete: function() {
        // do something
    },
    afterTest: (test) => {
        console.log(`---Finished test "${test.parent} - ${test.title}"---`);
    }
    
};
