import {useSelector, useDispatch} from 'react-redux';

import { counterActions } from '../store/store';

function Counter(){
    const dispatch=useDispatch();

    const counter=useSelector((state) => state.counter.counter);
    const showCounter= useSelector(state => state.counter.showCounter);

    function IncrementHandler(){
        dispatch(counterActions.increment());
    }

    function DecrementHandler(){
        dispatch(counterActions.decrement());
    }

    function IncreaseHandler(){
        dispatch(counterActions.increase(10));
    }

    function ToggleHandler(){
        dispatch(counterActions.toggle());
    }

    return(
        <main>
            <h2>Counter:</h2>
            <div>
           {showCounter && <p>{counter}</p>}
            <button onClick={IncrementHandler}>Increment</button>
            <button onClick={DecrementHandler}>Decrement</button>
            <button onClick={IncreaseHandler}>Increase</button>
           <button onClick={ToggleHandler}>Toggle</button>
            </div>
        </main>
    )
}


export default Counter;