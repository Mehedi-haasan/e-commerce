const db = require("../models");
var bcrypt = require("bcryptjs");

const UserAddress = db.userAddress;
const States = db.states;
const User = db.user;

exports.getUserProfile = async (req, res) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const user = await User.findOne({
            where: {
                id: userId,
            },
            attributes: {
                exclude: ['password']
            }
        });

        if (!user) {
            return res.status(400).send({
                success: false,
                message: "User not found."
            });
        }

        res.send({
            success: true,
            data: user
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
}

exports.updateProfile = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    values = {}
    if (body.firstName) {
        values.first_name = body.firstName;
    }
    if (body.lastName) {
        values.last_name = body.lastName;
    }

    try {
        const user = await User.update(values, {
            where: {
                id: req.userId
            }
        });

        res.send({
            success: true,
            message: 'Profile updated successfully.',
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


exports.changePassword = async (req, res) => {
    const body = req.body;
    const userId = req.userId;
    if (!body || !userId) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(400).send({
                success: false,
                message: "User not found."
            });
        }

        const isPasswordValid = await bcrypt.compare(
            body.oldPassword,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(400).send({
                success: false,
                message: "Old password is invalid."
            });
        }

        const hashedPassword = await bcrypt.hash(body.newPassword, 10);
        const updatedUser = await User.update(
            { password: hashedPassword },
            {
                where: {
                    id: userId
                }
            }
        );

        res.send({
            success: true,
            message: 'Password updated successfully.',
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.getStates = async (req, res) => {
    try {
        const states = await States.findAll();;

        res.send({
            success: true,
            data: states
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.getAddresses = async (req, res) => {
    const userId = req.userId;
    if (!userId) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });

    }

    try {
        const addresses = await UserAddress.findAll({
            where: {
                user_id: userId
            },
            include:[
                {
                    model: States,
                    as: 'state'
                }
            ]
        });

        res.send({
            success: true,
            data: addresses
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


exports.createAddress = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });

    }

    try {
        body.user_id = req.userId;
        const addresses = await UserAddress.create(body);

        res.send({
            success: true,
            data: addresses
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateAddress = async (req, res) => {
    const addressId = req.params.addressId;
    if (!addressId) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const address = await UserAddress.update(body, {
            where: {
                id: addressId
            }
        });

        res.send({
            success: true,
            message: 'Address updated successfully.',
            data: address
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.deleteAddress = async (req, res) => {
    const addressId = req.params.addressId;
    if (!addressId) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });

    }

    try {
        await UserAddress.delete({
            where: {
                id: addressId
            }
        });

        res.send({
            success: true,
            message: 'Address deleted successfully.'
        });

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};