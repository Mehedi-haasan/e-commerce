const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 8050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

const db = require("./models");
require('./routes/user.routes')(app);
require('./routes/product.template.routes')(app);

const Role = db.role;


// db.sequelize.sync({ force: true }).then(async () => {
//     // await initStates();
//     await initUserRoles();
//     // await initCarousel();
//     // await initCategories();
//     // await initProductAttributes();
//     // await initProductAttributeValues();
// });

async function initUserRoles() {
    // roles
    Role.create({
        id: 1,
        name: "user"

    });

    Role.create({
        id: 2,
        name: "admin"
    });

    Role.create({
        id: 3,
        name: "superadmin"
    });
    Role.create({
        id: 4,
        name: "modarator"
    });
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})