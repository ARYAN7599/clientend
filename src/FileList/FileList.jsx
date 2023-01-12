import axios from 'axios'
import React, { useState } from "react";
import FileItem from './../FileItem/FileItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from 'react-bootstrap'
const baseURL= "http://139.59.65.197:5000/images/";

const FileList = ({ files, getFile }) => {
    const getFileHandler = (_name) => {
        axios.get(`http://139.59.65.197:5000/images/${_name}`)
            .then((res) => getFile("http://139.59.65.197:5000/images/"+_name))
            .catch((err) => console.error(err));
    }
    const [imageArray, setPost] = useState(null);
    const get = async () => {
        axios.get("http://139.59.65.197:5000").then((res) => {
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
                            <a href={baseURL+data} target="_blank"  rel="noreferrer"><p><b>{baseURL+data}</b></p></a>
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
