exports.config = {
    tests: "./specs/*.spec.js",
    helpers: {
        Dummy: {
            require: "./helpers/steps.js"
        },
        TestPlan: {
            require: "./helpers/testplan.js"
        }
    },
    plugins: {
        allure: {
            outputDir: "./allure-results"
        }
    },
};
