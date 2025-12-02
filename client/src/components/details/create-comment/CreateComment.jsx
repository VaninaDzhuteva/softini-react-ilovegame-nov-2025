import { useState } from "react"
import { useParams } from "react-router";
import request from "../../../utils/request.js";

export default function CreateComment({ user, onCreate}) {
    const [comment, setComment] = useState('');
    const { gameId } = useParams();
    
    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = async () => {
        try {
            await request('/comments', 'POST', {
            author: user.email,
            message: comment,
            gameId
        });

        setComment('');
        onCreate();
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea 
                    name="comment" 
                    placeholder="Comment......" 
                    value={comment} 
                    onChange={changeHandler}
                    
                />
                <input className="btn submit" type="submit" defaultValue="Add Comment" disabled={!user} />
            </form>
        </article>
    )
}