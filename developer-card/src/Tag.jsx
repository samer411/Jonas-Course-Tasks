function Tag(props) {
    return (
       <div className={`px-3 py-1 bg-[#${props.bgColor}] rounded-xl mx-1 my-1 inline-block`}>
            {props.skill} {props.emoji}
       </div>
    )
}

export default Tag
