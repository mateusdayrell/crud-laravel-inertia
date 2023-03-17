import React from 'react';
import moment from 'moment';

export default function Comments({comments}){
    return (
        <>
            <h3 className="font-semibold text-lg mb-2">Comentários</h3>
            <ul className="flex flex-col gap-2 text-gray-800">
                {comments.map(comment => (
                    <li key={comment.id} className=" flex flex-col">
                        <p className="border border-gray-200 rounded-lg px-2">
                            {comment.content}
                        </p>
                        <small className="text-xs ml-auto px-4">
                            {moment(comment.created_at, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss')}
                        </small>
                    </li>
                ))}
            </ul>
        </>
    );
}
