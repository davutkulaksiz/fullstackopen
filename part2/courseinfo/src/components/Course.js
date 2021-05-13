const Header = (props) =>
{
  const { course } = props
  console.log({course})
  return (
    <div>
      <h3>{course.name}</h3>
    </div>
  )
}

const Content = (props) =>
{
  const { course } = props
  // Objects in JavaScript does not have the method .map()
  // It's only for arrays
  // so it's not course.map, it is course.parts

  return (
    <div>
      {course.parts.map(part =>
        <Part key = {part.id} part = {part.name} exercise = {part.exercises} />
      )}
      <Total course = {course} />
    </div>
  )
}

const Part = (props) =>
{
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = ({course}) =>
{
  let total = course.parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Course = (props) =>
{
  const { course } = props
  console.log(props);
  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
    </div>
  )
}

export default Course