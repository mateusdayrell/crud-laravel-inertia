import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');

    const handleSubmit = async () => {
        setTitleError('')
        setContentError('')
        const regTemp = {
            title, content
        }
        try {
            const { data } = await axios.post("/posts", regTemp)
            setTitle('')
            setContent('')
            alert('Post cadastrado com sucesso.')
        } catch (error) {
            const err = error?.response?.data?.errors
            if(err?.title) setTitleError(err.title)
            if(err?.content) setContentError(err.content)
        }
    }

    return(
        <div className="base-container">
            <h1 className="main-title">Novo Post</h1>
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
                    <a href="/posts" className="btn bg-green-600">Voltar</a>
                    <button onClick={handleSubmit} className="btn bg-gray-400">Cadastrar</button>
                </div>
            </div>
        </div>
    )
}
