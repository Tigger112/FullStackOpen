const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) => 
    <p>
    {part.name} {part.exercises}
    </p>

const Content = ({ parts }) => 
    <>
    {parts.map(
        (part) => <Part key={part.id} part={part}/>
        )}
    </>

const Course = ({ course }) => {
    const sum = course.parts.reduce((a, part) => a + part.exercises, 0)
    return (
        <>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total sum={sum}/>
        </>
)}

export default Course