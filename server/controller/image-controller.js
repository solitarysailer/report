<<<<<<< HEAD
import grid from 'gridfs-stream';
import mongoose from 'mongoose';
const url ='http://localhost:8000'

let gfs,gridfsBucket;
const conn = mongoose.connection;
conn.once('open',()=>{
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection('fs');
})

export const uploadImage = (request, response) => {
    if(!request.file) {
        return response.status(404).json("File not found");
=======

const url= 'http://localhost:8000';




export const uploadImage =(request,response)=>{
    if(!request.file){
        return response.status(404).json({msg:"file not found"});
>>>>>>> a9d71772117844a1a56acf22cb1f604b109e06f0
    }
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    return response.status(200).json(imageUrl);    
}
<<<<<<< HEAD

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename});
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        return response.status(500).json({ msg: error.message });
    }
}
=======
>>>>>>> a9d71772117844a1a56acf22cb1f604b109e06f0
