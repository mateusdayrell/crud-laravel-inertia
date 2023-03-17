import React from "react";
import { Link } from "@inertiajs/react";
import { router } from '@inertiajs/react'
import Toast from "../../components/Toast";

export default function Index(props) {
    const { flash, posts } = props

    const handleDelete = (id) => {
        if(!confirm("Deseja realmente excluir o post?")) return
        router.delete(`/posts/${id}`)
    }

    return(
        <div className="w-screen overflow-x-hidden">
            <Toast flash={flash}/>
            <h1 className="main-title">Lista de Posts</h1>

            <div className="px-8 py-4 flex gap-2">
                <Link className="btn bg-green-600" href="posts/create" type="button">Novo</Link>
                <a className="btn bg-gray-500" href="/pdf" target="_blank" rel='noopener noreferrer'>Gerar PDF</a>
            </div>

            <div className="flex px-8 gap-4 flex-wrap w-full">
                {posts?.map((post) => (
                    <div key={post.id} className="border border-gray-400 rounded-lg p-4 bg-gray-200 w-80 h-48">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="overflow-y-auto h-[60%] w-fit">{post.content}</p>

                        <div className="pt-2 flex items-center justify-end gap-2">
                            <Link className="btn bg-gray-400" href={`posts/${post.id}/`} type="button">Visualizar</Link>
                            <Link className="btn bg-blue-400" href={`posts/${post.id}/edit`} type="button">Editar</Link>
                            <button className="btn bg-red-400 text-white font-semibold" onClick={() => handleDelete(post.id)} >Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
