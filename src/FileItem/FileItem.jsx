import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import './FileItem.scss'
const baseURL= "http://139.59.65.197:5000/";

const FileItem = ({ file, getFile }) => {
    return (
        <> 
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
               <img className="previewimg" src={baseURL+"images/"+file.name} alt="UploadImage" />
               <p>{baseURL+"images/"+file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => getFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <a href={baseURL+"images/"+file.name} target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faCameraRetro}
                            onClick={() => getFile(file.name)} /></a>
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem
