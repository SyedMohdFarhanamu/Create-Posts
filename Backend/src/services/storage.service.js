// we use ImageKit SDK to upload the file to ImageKit server

const {ImageKit} = require("@imagekit/nodejs");


const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer){
    console.log(buffer);

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'), // convert the buffer to base64 string
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadFile;