function* idGenerator(lastId) {
  let id = lastId + 1;
  while (true) {
    yield id;
    id += 1;
  }
}

function newId(idList) {
  const lastId = idList.length ? Math.max(...idList) : 0;
  
  return idGenerator(lastId).next().value;
}

export { newId };
