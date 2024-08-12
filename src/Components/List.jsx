import React from 'react'

const List = () => {
    const names = ["person1", "person2", "person3", "person4"]
  return (
    <div>
        {names.map((name, key) => {
            return (<p key="key">Hi there, I am {name}!</p>)
        })}
    </div>
  )
}

export default List