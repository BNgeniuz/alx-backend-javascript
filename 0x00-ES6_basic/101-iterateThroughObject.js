export default function iterateThroughObject(reportWithIterator) {
  const employees = [...reportWithIterator]; // convert the generator to an array
  return employees.join(' | ');
}
