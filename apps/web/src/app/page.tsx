import { add } from '@autospace/sample-lib'
function page() {
  const result = add(2, 3)
  return <div>Hello World: {result}</div>
}

export default page
