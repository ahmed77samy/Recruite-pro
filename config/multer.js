const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/cv");
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}_${Math.random()}_${file.originalname.replace(
            /\s+/g,
            "-"
        )}`;
        cb(null, fileName);
    },
});

var upload = multer({ storage: storage }).single("cv");

module.exports = upload;
