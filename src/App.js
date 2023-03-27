import {useState, useMemo, useCallback} from 'react'
import Title from './components/Title'
import ShowCount from './components/ShowCount'
import Button from './components/Button'
export default function App(){
  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)
  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1)
  },[])


  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while(i < 1000000000) i += 1
    return count1 % 2 === 0;
  },[count1])

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  },[])
  return (
    <>
      <Title title="useCallback and useMemo" />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? 'Even' :  'Odd'}</span>
      <br/>
      <Button increment={incrementByOne} title="Increment By One" />
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button increment={incrementByFive} title="Increment By Five" />
    </>
  )
}