const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure multer storage and file name
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create multer upload instance
const upload = multer({ storage: storage });

// Custom file upload middleware
const uploadMiddleware = (req, res, next) => {
  // Use multer upload instance
  upload.array('files', 5)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    // Retrieve uploaded files
    const files = req.files;
    const errors = [];

    // Validate file types and sizes
    files.forEach((file) => {
      const allowedTypes = ['image/jpeg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.mimetype)) {
        errors.push(`Invalid file type: ${file.originalname}`);
      }

      if (file.size > maxSize) {
        errors.push(`File too large: ${file.originalname}`);
      }
    });

    // Handle validation errors
    if (errors.length > 0) {
      // Remove uploaded files
      files.forEach((file) => {
        fs.unlinkSync(file.path);
      });

      return res.status(400).json({ errors });
    }

    // Attach files to the request object
    req.files = files;

    // Proceed to the next middleware or route handler
    next();
  });
};

module.exports = uploadMiddleware;




// const uploadImage = async(e)=>{
//     const file = e.target.files[0];
//     const base64 = await convertBase64(file);
//     setImage2(base64)
   
//  }

           {/* <div className='ml-[2%] my-2'>
           <h1 className=' font-semibold'>Image of product</h1>
            
            <div className='flex mt-1'>
       
             <input type='file'  multiple onChange={(e)=>{uploadImage(e)}}  className='p-2 border focus:outline-none rounded-l'/>
             <button onClick={handleImage} className='px-6 py-1 border rounded-r bg-[#06D889]'><Icon icon="mingcute:arrow-right-fill" width="22px" className='text-white'/></button>
           </div>
          </div> */}

//  const convertBase64 =(file)=>{
//   return new Promise((resolve,reject)=>{
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload =()=>{
//       resolve(fileReader.result);
//     }
//     fileReader.onerror = (error)=>{
//       reject(error);
//     }
//   })
// }

