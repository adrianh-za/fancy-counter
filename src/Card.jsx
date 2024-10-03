import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import CountButton from "./CountButton.jsx";
import { useEffect, useState} from "react";

export default function Card({minValue, maxValue}) {

  const [count, setCount] = useState(0);
  const locked = (count === maxValue);

  useEffect(() => {

    //Increments the count by one when the 'Space' key is pressed
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        setCount(count + 1);
      }
    };

    //Adds the event listener when the component is mounted
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      //Removes the event listener when the component is unmounted
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [count]);

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked}/>
      <Count count={count}/>
      <ResetButton setCount={setCount}/>
      <ButtonContainer>
        <CountButton
          type="minus"
          setCount={setCount}
          minValue={minValue}
          maxValue={maxValue}
          locked={locked}
        />
        <CountButton
          type="plus"
          setCount={setCount}
          minValue={minValue}
          maxValue={maxValue}
          locked={locked}
        />
      </ButtonContainer>
    </div>
  )
}
