import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post(props) {
    const [id, setId] = useState([]);
    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);

    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');

    useEffect(() => {
        setId(props.post.id)
        setTitle(props.post.title)
        setContent(props.post.content)
    }, []);

    const handleSubmit = async () => {
        setTitleError('')
        setContentError('')
        const regTemp = {
            title, content
        }
        try {
            const { data } = await axios.put(`/posts/${id}`, regTemp)
            setTitle(data.title)
            setContent(data.content)
            alert('Post atualizado com sucesso.')
        } catch (error) {
            const err = error?.response?.data?.errors
            if(err?.title) setTitleError(err.title)
            if(err?.content) setContentError(err.content)
        }
    }

    return(
        <div className="base-container">
            <h1 className="main-title">Editar Post</h1>
            <div className="input-container">
                <div className="input-area">
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <small className="error">{titleError}</small>
                </div>
                <div className="input-area">
                    <label htmlFor="content">Conteúdo</label>
                    <textarea
                        name="content"
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        cols="30"
                        rows="10"/>
                    <small className="error">{contentError}</small>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <a href="/posts" className="btn bg-gray-400">Voltar</a>
                    <button className="btn bg-green-600" onClick={handleSubmit}>Atualizar</button>
                </div>
            </div>
        </div>
    )
}
