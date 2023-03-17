import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Toast from "../../components/Toast";

export default function Edit(props) {
    const { flash } = props

    const { data, setData, post, processing, errors } = useForm({
        title: props.post.title || '',
        content: props.post.content || '',
        _method: 'put'
    })

    const handleSubmit = () => post(`/posts/${props.post.id}`)

    return(
        <div className="base-container">
            <Toast flash={flash}/>
            <h1 className="main-title">Editar Post</h1>
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
                    <Link href="/posts" className="btn bg-gray-400">Voltar</Link>
                    <button className="btn bg-green-600" onClick={handleSubmit} disabled={processing}>Atualizar</button>
                </div>
            </div>
        </div>
    )
}
