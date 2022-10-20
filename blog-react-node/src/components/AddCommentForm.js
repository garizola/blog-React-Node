import { useState} from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';


const AddCommentForm = ({ articleName, onArticleUpdated }) => {

    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token} : {};
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);

        setName('');
        setCommentText('');
    }

    return (
        <div id="add-comment-form">

            <h2>Add a Comment</h2>
            {user && <h4>{user.email}: </h4>}
            <br/>
            <label>
                Comment:
                <textarea 
                    rows="4" cols="50" 
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
            </label>

            <button onClick={addComment}>Add Comment</button>
            
        </div>
    )

}

export default AddCommentForm;