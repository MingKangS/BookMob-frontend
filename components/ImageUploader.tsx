import ReactS3Client from 'react-aws-s3-typescript';

export interface ImageUploaderProps {
  
}

const config = {
  bucketName: 'bookmob',
  region: 'ap-southeast-1',
  accessKeyId: 'AKIAQLAHBKARMDEMNZHJ',
  secretAccessKey: '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',
  dirName: 'Book images'
}
 
const ImageUploader: React.FC<ImageUploaderProps> = () => {

  const upload = async (e) => {

    const s3 = new ReactS3Client(config);

    const filename = 'filename-to-be-uploaded';
    try {
        const res = await s3.uploadFile(e.target.files[0]);

        console.log(res);

    } catch (exception) {
        console.log(exception);
        /* handle the exception */
    }
  }
  return ( 
    <input type="file" onChange={(e) => setTimeout(() => upload(e), 3000)}/>
   );
}
 
export default ImageUploader;