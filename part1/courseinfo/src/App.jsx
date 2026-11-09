const Header = (props) => {
  
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {

  return (
    <>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]}/>
    <Part part={props.parts[2]}/>
    </>
  )
}

const Part = (props) => {
  
  return (
    <> 
    <p>{props.part.part}{props.part.exercises}</p> 
    </>
  )
}

const Total = (props) => {

  return (
    <>
     <p>
      Number of exercises: {props.total}
     </p>
    </>
  )
}




const App = () => {
  const parts = [
    { part: 'Fundamentals of React:', exercises: 10},
    { part: 'Using props to pass data:', exercises: 7},
    { part: 'State of a component:', exercises: 14}
    ]
  
  const course = 'Half Stack application development'
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total}/> 
     
    </>
  )
}

export default App