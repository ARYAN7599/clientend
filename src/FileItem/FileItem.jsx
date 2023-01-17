import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import './FileItem.scss'

const FileItem = ({ file, getFile }) => {
    return (
        <> 
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
               <img className="previewimg" src={"https://blockchaintimes.live/images/"+file.name} alt="UploadImage" />
               <p>{"https://blockchaintimes.live/images/"+file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => getFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <a href={"https://blockchaintimes.live/images/"+file.name} target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faCameraRetro}
                            onClick={() => getFile(file.name)} /></a>
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem
