import express from 'express';
import { signupUser,loginUser } from '../controller/user-controller.js';
<<<<<<< HEAD
import { uploadImage , getImage} from '../controller/image-controller.js';
import { createPost,getAllPosts ,getPost,updatePost,deletePost} from '../controller/post_controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { newComment,getComments,deleteComment } from '../controller/comment_controller.js';


import upload from '../utils/upload.js';


=======
import { uploadImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js'
>>>>>>> a9d71772117844a1a56acf22cb1f604b109e06f0

const router= express.Router();
router.post('/signup',signupUser);
router.post('/login',loginUser);
<<<<<<< HEAD
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename',getImage);

router.post('/create',authenticateToken,createPost);

router.get('/posts',authenticateToken,getAllPosts);
router.get('/post/:id', authenticateToken, getPost);
router.put('/update/:id',authenticateToken,updatePost);
router.delete('/delete/:id',authenticateToken,deletePost);
router.post('/comment/new',authenticateToken,newComment);
router.get('/comments/:id',authenticateToken,getComments);
router.delete('/comment/delete/:id',authenticateToken,deleteComment);

=======
router.post('/file/upload', upload.single('file') , uploadImage);
>>>>>>> a9d71772117844a1a56acf22cb1f604b109e06f0

export default router;
