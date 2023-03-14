import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.posts)
    }, []);

    const handleDelete = async (id) => {
        if(!confirm("Deseja realmente excluir o post?")) return
        try {
            let formData = new FormData()
            formData.append('_method', 'delete')
            await axios.post(`posts/${id}`, formData)
            alert('Post excluído com sucesso.')
            location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="base-container">
            <h1 className="main-title">Lista de Posts</h1>
            <div className="px-8 py-4">
                <a className="btn bg-green-600" href="posts/create" type="button">Novo</a>
            </div>
            <ul className="flex px-8 gap-4">
                {posts?.map((post, index) => (
                <li key={index} className="border border-gray-400 rounded-lg p-4 bg-gray-200 w-80 h-48">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="overflow-y-auto h-[60%] w-fit">{post.content}</p>
                    <div className="pt-2 flex items-center justify-end gap-2">
                        <a className="btn bg-gray-400" href={`posts/${post.id}/`} type="button">Visualizar</a>
                        <a className="btn bg-blue-400" href={`posts/${post.id}/edit`} type="button">Editar</a>
                        <button className="btn bg-red-400 text-white font-semibold" onClick={() => handleDelete(post.id)}>Excluir</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}
