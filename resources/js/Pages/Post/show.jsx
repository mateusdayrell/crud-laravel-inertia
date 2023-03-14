import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post(props) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [comments, setComments] = useState([]);

    const [newComment, setNewComment] = useState('')
    // const [newCommentError, setNewCommentError] = useState('')

    useEffect(() => {
        setId(props.post.id)
        setTitle(props.post.title)
        setContent(props.post.content)
        setComments(props.comments)
    }, []);

    const handleSubmit = async () => {
        const regTemp = {
            post_id: id, content: newComment
        }
        try {
            await axios.post("/comments", regTemp)
            setNewComment('')
            alert('Comentário realizado com sucesso.')
            location.reload()
        } catch (error) {
            console.log(error)
            // const err = error?.response?.data?.errors
            // if(err?.title) setTitleError(err.title)
        }
    }

    return(
        <div className="base-container">
            <h1 className="main-title">Visualizar Post</h1>
            <div className="input-container">
                <div className="input-area">
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        disabled />
                </div>
                <div className="input-area">
                    <label htmlFor="content">Conteúdo</label>
                    <textarea
                        name="content"
                        id="content"
                        value={content}
                        readOnly
                        cols="30"
                        rows="10"/>
                </div>

                <div className="input-area">
                    <h3 className="font-semibold text-lg">Novo comentário</h3>
                    <textarea
                        name="content"
                        id="content"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        cols="30"
                        rows="2"/>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <a href="/posts" className="btn bg-gray-400">Voltar</a>
                    <button onClick={handleSubmit} className="btn bg-green-600">Comentar</button>
                </div>
                <div>
                    <ul>
                        {comments.map(comment => (
                            <p key={comment.id}>{comment.content}</p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
