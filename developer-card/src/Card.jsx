import Tag from "./Tag";
import Avatar from "./Avatar";
import Intro from "./Intro";
function Card() {
  return (
    <div className="card w-100  m-3 border-2">
      <Avatar/>
      <div className="text p-5">
      <Intro/>
      <div className="tags mt-3">
        <Tag skill="HTML+CSS" emoji="💪" bgColor="2057ea"/>
        <Tag skill="Javascript" emoji="💪" bgColor="e7d11f"/>
        <Tag skill="Web Design" emoji="💪" bgColor="cae6b6"/>
        <Tag skill="Git and GitHub" emoji="👍" bgColor="e7452c"/>
        <Tag skill="React" emoji="💪" bgColor="66cfea"/>
        <Tag skill="Svelete" emoji="👶" bgColor="f72f00"/>
      </div>
      </div>
    </div>
  );
}

export default Card;
