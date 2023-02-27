import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import './FileItem.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
const baseURL= "http://localhost:5000/images/";

const FileItem = ({ file, getFile }) => {
    return (
        <> 
            <li>
                {/* <FontAwesomeIcon icon={faFileAlt} /> */}
                <p>File Uploaded!</p>
               {/* <img className="previewimg" src={baseURL+file.name} alt="UploadImage" /> */}
               {/* <p>{baseURL+file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => getFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <a href={baseURL+file.name} target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faCameraRetro}
                            onClick={() => getFile(file.name)} /></a>
                    }
                </div> */}
            </li>
        </>
    )
}

export default FileItem
