
const url= 'http://localhost:8000';




export const uploadImage =(request,response)=>{
    if(!request.file){
        return response.status(404).json({msg:"file not found"});
    }
    const imageUrl = `${url}/file/${request.file.filename}`;
    return response.status(200).json(imageUrl);

}
