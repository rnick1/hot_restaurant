const tableData = require('../data/tableData');
const waitingListData = require('../data/waitingListData');

function apiData(app) {

app.get('/api/tableData', (req, res) => res.json(tableData));
app.get('/api/waitingListData', (req, res) => res.json(waitingListData));

app.post('/api/tableData', (req, res) => {
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
      } else {
        waitingListData.push(req.body);
        res.json(false);
      }
});

app.post('/api/clear', (req, res) => {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });

};

module.exports = apiData;