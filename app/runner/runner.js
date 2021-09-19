const newman = require('newman');
const path = require('path');

var basepath = path.resolve("../");

var reportpath = path.resolve("../../")+"/report";


newman.run({
    // Collection URL from a public link or the Postman API can also be used
    collection: basepath + '/collection/testapiproject.postman_collection.json',
    reporters: ['htmlextra'],
    iterationCount: 1,
    globalVar:[
        {"key": "application_id", "value": process.env.apikey}
    ],
    reporter: {
        htmlextra: {
            export: reportpath + '/apireport.html',
            // template: './template.hbs'
            logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            browserTitle: "API report stats",
            title: "API report stats"
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            // timezone: "Australia/Sydney",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace"
        }
    }
});