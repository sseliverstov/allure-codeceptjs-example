exports.config = {
    tests: "./specs/*.spec.ts",
    helpers: {
        Dummy: {
            require: "./helpers/dummy.ts"
        },
        TestPlan: {
            require: "./helpers/testplan.ts"
        }
    },
    plugins: {
        allure: {
            outputDir: "./allure-results"
        }
    },
    require: ["ts-node/register"]
};
