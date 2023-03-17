import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import Toast from "../../components/Toast";

export default function Create(props) {
    const { flash } = props

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
    })

    const handleSubmit = async () => {
        post("/posts")
        reset()
    }

    return(
        <div className="base-container">
            <Toast flash={flash}/>
            <h1 className="main-title">Novo Post</h1>
            <div className="input-container">
                <div className="input-area">
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)} />
                    <small className="error">{errors.title}</small>
                </div>
                <div className="input-area">
                    <label htmlFor="content">Conteúdo</label>
                    <textarea
                        name="content"
                        id="content"
                        value={data.content}
                        onChange={e => setData('content', e.target.value)}
                        cols="30"
                        rows="10"/>
                    <small className="error">{errors.content}</small>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/posts" className="btn bg-green-600">Voltar</Link>
                    <button onClick={handleSubmit} className="btn bg-gray-400" disabled={processing}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}
