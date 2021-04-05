var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keygVLsGwcbWkQDhG'}).base('appgA70pzdc6MiIJi');

base('Tasks').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Global view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (page) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call fetchNextPage.
    // If there are more records, page will get called again.
    // If there are no more records, done will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});