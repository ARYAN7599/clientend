import axios from 'axios'
import React, { useState } from "react";
import FileItem from './../FileItem/FileItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap'

const baseURL= "https://blockchaintimes.live/images/";
const mainURL = "https://blockchaintimes.live";

const FileList = ({ files, getFile }) => {
    const getFileHandler = (_name) => {
        axios.get(baseURL+_name)
            .then((res) => getFile(baseURL+_name))
            .catch((err) => console.error(err));
    }
    const [imageArray, setPost] = useState(null);
    const get = async () => {
        axios.get(mainURL).then((res) => {
            setPost(res.data);
        });
    }

    const handleClick = () => { }
    return (
        <div>
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    getFile={getFileHandler} />))
            }
        </ul>
        <button type="get" className="btn btn-dark" onClick={() => get()} > get </button>
                <div>
                <Container>
                        <Row>
                        {Array.isArray(imageArray)

                            ? imageArray.map((data, index) => (
                            <Col md={4} key={index} >
                            <div className="img-card" onClick={() => handleClick(data)}>
                            <Image style={{ width: '300px', height: "300px" }} thumbnail src={`${baseURL}${data}`} />
                            <a href={baseURL+data} target="_blank"  rel="noreferrer"><p><b>{data}</b></p></a>
                            </div>
                            </Col>
                            )
                            )
                            : null}
                        </Row>
                    </Container>
                </div>
        </div>
    )
}

export default FileList
