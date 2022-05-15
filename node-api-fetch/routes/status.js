const express = require('express');
const router = express.Router();
const fetch = require('cross-fetch');

router.get('/yield', async(req, res) => {

   try {
       const url = "https://api.publicapis.org/entries";
       const response = await fetch(url, {
           method: 'GET',
           headers: {'Content-Type': 'application/json' }
       }).then(res => res.json());
      // return res.json(response)
        res.send(response)
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server error');
   }
});


module.exports = router;