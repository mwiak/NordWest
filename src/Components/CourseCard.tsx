interface Prop {
  title: string;
  code: string;
  url: string;
  onClick?: () => void;
}

function CourseCard(props: Prop) {
  return (
    <div className="courseCard " onClick={props.onClick}>
      <img className="courseImg" src={props.url} alt={props.url} />
      <h6>{props.title}</h6>
      <p>{props.code}</p>
    </div>
  );
}

export default CourseCard;
