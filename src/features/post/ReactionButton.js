import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import React from 'react';

const reactEmoji = {
  thumsup: '👍',
  wow: "😲",
  heart: "🖤",
  rocket: "🚀",
  coffee: "☕",
};


const ReactionButton = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactEmoji).map(([name,emoji])=>{
        return (
            <button key={name} type="button" className="reactionButton"
            onClick={()=>dispatch(reactionAdded({postId:post.id, reaction: name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButton
