 require('dotenv').config();
 const client = require('./src/Config/db');
 const app = require('./App');
 const PORT = process.env.SERVER_PORT || 5000;
 const cors=require('cors');

 
app.listen(PORT, async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
     client.connect();

})
