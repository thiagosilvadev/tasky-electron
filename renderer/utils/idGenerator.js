function idGenerator(tasks) {
  const generateId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  let id = generateId(0, 999);
  if (tasks) {
    tasks.forEach((task) => {
      while (task.id == id) {
        console.log("entrou");
        console.log(id);
        id = generateId(0, 999);
        console.log(`gerou ${id}`);
      }
    });
  }
  return id;
}

export default idGenerator;
