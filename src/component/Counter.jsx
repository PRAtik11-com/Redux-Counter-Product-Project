import { useDispatch, useSelector } from 'react-redux';
import { ADDTO, SUBTO } from '../Redux/counter/actiontype';


const Counter = () => {

    const dispatch = useDispatch()
    console.log(dispatch)

    const {counter} = useSelector((st) => st.counter)
    console.log(counter);

  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <div style={{display:"flex", justifyContent:"center",gap:"15px"}}>
     <button onClick={() => {dispatch(ADDTO(1))
      // console.log(getState().counter)
      
    }}>ADD</button>
     <button onClick={() => {dispatch(SUBTO(1))
      // console.log(getState().counter)
    }}>SUB</button>

    </div>
    </div>
  )
}

export default Counter
