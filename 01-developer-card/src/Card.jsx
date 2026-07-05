import Tag from "./Tag";
import Avatar from "./Avatar";
import Intro from "./Intro";
function Card() {
  const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
  return (
    <div className="card w-100  m-3 border-2">
      <Avatar/>
      <div className="text p-5">
      <Intro/>
      <div className="tags mt-3">
        {skills.map((data)=>{
          return <Tag skill={data.skill} emoji={data.level==="beginner"?"👶":data.level==="intermediate"?"👍":"💪"} bgColor={data.color}/>
        })}
        
      </div>
      </div>
    </div>
  );
}

export default Card;
