const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads');
    },
    filename(req, file, cb) {
        cb(null, `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if ( file.mimeType === 'image/png' || file.mimeType === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const limits = {filesize: 1024*81024*5};

module.exports = multer({storage, fileFilter, limits});
