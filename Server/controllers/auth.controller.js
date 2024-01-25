const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.roles;

const Op = db.Sequelize.Op;


async function someAsyncOperation(rules) {
    let roleId;

    if (rules) {
        if (rules[0] === "admin") {
            roleId = 2;
        } else if (rules[0] === "superadmin") {
            roleId = 3;
        } else if (rules[0] === "modarator") {
            roleId = 4;
        } else {
            roleId = 1;
        }
    }
    return roleId
}


exports.singUp = async (req, res) => {
    const body = req.body;
    try {
        const data = await User.findOne({
            where: {
                [Op.or]: [
                    { username: req.body.username },
                    { email: req.body.email },
                ],
            },
        })

        if (data) {
            return res.status(204).send({
                success: true,
                message: "User Already exist",
            })
        }

        let roleId = 1;

        if (req.body.rules) {
            roleId = await someAsyncOperation(req.body.rules)
        }

        await User.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            roleId: roleId
        });



        res.status(200).send({
            success: true,
            message: "Registration Successfull",
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


exports.singIn = async (req, res) => {
    try {
        const data = await User.findOne({
            where: {
                [Op.or]: [
                    { username: req.body.username },
                    { email: req.body.username },
                ],
            },
        })

        if (!data) {
            return res.status(404).send({ success: false, message: "User Not found." });
        }



        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            data.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }


        console.log(config.secret)

        const token = jwt.sign({id: data.id},config.secret,{
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });


        // const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', {
        //         expiresIn: '1h', // Set the expiration time for the token
        // });    
            

        res.status(200).send({
            success: true,
            message: "Login Successfully",
            id: req.userId,
            accessToken: token,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


exports.getUsers = async (req, res) => {
    try {
        const data = await User.findAll()
        res.status(200).send({
            success: true,
            items: data,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}

