function Tag(props) {
    return (
       <div style={{backgroundColor:props.bgColor}}  className={`px-3 py-1 rounded-xl mx-1 my-1 inline-block`}>
            {props.skill} {props.emoji}
       </div>
    )
}

export default Tag
