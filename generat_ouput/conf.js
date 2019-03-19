exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    suites: {
        specs: [
            './generat_ouput/e2e_testing/Test_Suites/login-page-verification.js',
        ],
    },
    framework: 'jasmine',
    /* multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }] ,*/
    navigate: 'https://www.irctc.co.in/nget/train-search',
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 14000000
        //Increase the default jasmine time interval.
    },
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.waitForAngularEnabled(false);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
    }
};
/*
The this keyword:   this.foo = 0;
 */ 
//# sourceMappingURL=conf.js.map