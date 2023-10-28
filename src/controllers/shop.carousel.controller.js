const db = require("../models");
const Carousel = db.carousel;

exports.getCarousels = (req, res) => {
    Carousel.findAll({
        where: {
            active: true
        }
    })
        .then(carousel => {
            if (!carousel) {
                return res.status(204).send({
                    success: true,
                    message: "No carousel found."
                });
            }

            var carouselItems = [];
            for (let i = 0; i < carousel.length; i++) {
                const carouselItem = carousel[i];
                carouselItems.push({
                    id: carouselItem.id,
                    name: carouselItem.name,
                    sequence: carouselItem.sequence,
                    imageUrl: carouselItem.image_url,
                });
            }

            res.status(200).send(carouselItems);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.createCarousel = (req, res) => {
    const body = req.body;
    if (!body.name || !body.imageUrl) {
        return res.status(400).send({
            success: false,
            message: "Please provide carousel name and image url."
        });
    }

    Carousel.create({
        active: req.body.active || true,
        sequence: req.body.sequence || 10,
        name: req.body.name,
        image_url: req.body.imageUrl,
    })
        .then(ok => {
            res.send({
                success: true,
                message: "New Carousel successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};

exports.updateCarousel = (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Please provide values to update carousel."
        });
    }

    var values = {};
    if (body.active) {
        values.active = body.active;
    }
    if (body.sequence) {
        values.sequence = body.sequence;
    }
    if (body.name) {
        values.name = body.name;
    }
    if (body.imageUrl) {
        values.image_url = body.imageUrl;
    }

    Carousel.update(values, {
        where: {
            id: body.id
        }
    })
        .then(_ => {
            res.send({
                success: true,
                message: "Record updated successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};


exports.deleteCarousel = (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Please provide values to update carousel."
        });
    }

    Carousel.destroy({
        where: {
            id: body.id
        }
    })
        .then(carousel => {
            res.send({
                success: true,
                message: "Record deleted successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};