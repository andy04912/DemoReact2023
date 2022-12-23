
import React, {useState} from 'react';
import MyVerticallyCenteredModal from './CenterModal';
import  { useRef } from 'react'

function FileUploadSingle(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const changeHandler = (event) => {
		
        if(event.target.files.length>0){
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
		}else{
			event.target = null;
		}
	};
    const [modalShow, setModalShow] = useState(false);
    const ref = useRef()
    const handleClick = (e) => {
        ref.current.click()
      }
	const handleSubmission = () => {
		const formData = new FormData();
		setIsLoading(true)
		formData.append('file', selectedFile);

		fetch(
			'https://nchu2022-bee.onrender.com/ReactUpload',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((result) => {
				console.log('Success:', result);
                if (result.status==200){
                    setModalShow(true);
                    setSelectedFile()
                    setIsFilePicked(false);
					setIsLoading(false)
			
                }
			})
			.catch((error) => {
				setIsLoading(false)
				console.error('Error:', error);
			});
	};
	

	return(
   <div>
	<h1>測試</h1>
    <button onClick={handleClick}>選擇檔案</button>
			<input type="file" name="file" ref={ref} onChange={changeHandler} style={{display:"none"}}/>
			{isFilePicked ? (
				<div>
					<p>檔案名稱: {selectedFile.name}</p>
					<p>檔案格式: {selectedFile.type}</p>
					<p>檔案大小: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
                <p></p>
			)}
			<div>
                {isFilePicked ? (<button disabled={isLoading} onClick={handleSubmission}>上傳</button>):(<></>)}
				
			</div>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
		</div>
	);
}


export default FileUploadSingle;