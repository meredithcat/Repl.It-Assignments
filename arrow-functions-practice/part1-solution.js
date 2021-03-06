
const instructors = [
    'Dani',
    'Meredith',
    'Alan',
    'Jess'
  ]
  
  const greet = (name) => {
    return `Hello, ${name}!`
  }
  
  /** 
   * Transforms each value in the list using the given function, then returns 
   * the new list.
   */
  function transform_list(lst, func) {
    new_list = []
    for (let i = 0; i < lst.length; i++) {
      const new_elem = func(lst[i])
      new_list.push(new_elem)
    }
    return new_list
  }
  
  
  list_of_greetings = transform_list(instructors, greet)
  
  console.log(list_of_greetings)