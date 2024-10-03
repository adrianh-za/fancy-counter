import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, minValue, maxValue, locked }) {

  const handleClick = (event) => {
    setCount((prevCount) => {
      if (type === "plus") {
        if (prevCount >= maxValue) return prevCount;
        return prevCount + 1;
      }
      else
      {
        if (prevCount <= minValue) return prevCount;
        return prevCount - 1;
      }
    });

    event.currentTarget.blur();
  }

  return (
      <button
        onClick={handleClick}
        className="count-btn"
        disabled={locked}
      >

        {/* Tenary operator */}
        {type === "plus"
          ? <PlusIcon className="count-btn-icon"/>
          : <MinusIcon className="count-btn-icon"/>}

        {/* Logical AND operator
        {type === "plus" && <PlusIcon className="count-btn-icon"/>}
        {type === "minus" && <MinusIcon className="count-btn-icon"/>}
        */}
      </button>
  )
}

//Using an arrow function is generally preferred over using bind for the following reasons:
// Readability: Arrow functions are more concise and easier to read.
// Performance: Arrow functions do not create a new function instance each time the component renders, unlike bind.
// Consistency: Arrow functions are more commonly used in modern React codebases.