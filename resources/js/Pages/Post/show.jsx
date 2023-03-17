import React, { useEffect, useState } from "react";
import Comments from "../../components/Comments";
import { Link, useForm } from "@inertiajs/react";
import Toast from "../../components/Toast";

export default function Show(props) {
    const { flash } = props

    const { data, setData, post, processing, errors } = useForm({
        content: '',
    })

    const handleSubmit = () => {
        post(`/posts/${props.post.id}/comments`)
        setData('content', '')
    }

    return(
        <div className="base-container">
            <Toast flash={flash}/>
            <h1 className="main-title">Visualizar Post</h1>
            <div className="input-container">
                <div className="input-area">
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={props.post.title}
                        disabled />
                </div>
                <div className="input-area">
                    <label htmlFor="content">Conteúdo</label>
                    <textarea
                        name="content"
                        id="content"
                        value={props.post.content}
                        readOnly
                        cols="30"
                        rows="10"/>
                </div>

                <div className="input-area">
                    <h3 className="font-semibold text-lg">Novo comentário</h3>
                    <textarea
                        name="content"
                        id="content"
                        value={data.content}
                        onChange={e => setData('content', e.target.value)}
                        placeholder="Digite aqui um comentário"
                        cols="30"
                        rows="2"/>
                    <small className="error">{errors.content}</small>
                </div>

                <div className="input-area flex items-center justify-end gap-4">
                    <Link href="/posts" className="btn bg-gray-400">Voltar</Link>
                    <button onClick={handleSubmit} className="btn bg-green-600">Comentar</button>
                </div>

                <div className="input-area">
                    <Comments comments={props.post.comments} />
                </div>
            </div>
        </div>
    )
}
