
const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const WarpSchema = new Schema( {
    warpedFile: {
        type: File,
        required: true,
    },

    warpPasscode: {
        type: String, 
        required: true,
    },

    warpKey: {
        type: String,
        required: true,
    },
    
});

let mongooseWarpModel = mongoose.model('warp', WarpSchema)

export default mongooseWarpModel