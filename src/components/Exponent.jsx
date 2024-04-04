import { useEffect, useState } from "react";

const Exponent = ({ count, exponent }) => {

  const [numberString, setNumberString] = useState('')


  useEffect(() => {
    stringMaker()
  }, [count])

  
  const stringMaker = () => {
    const repeatedCount = `${count} *`.repeat(exponent - 1);
    const str = `${repeatedCount}${count}`;
    setNumberString(str);
  };


  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}^{exponent}</p>
      <p className="exponent-result">
        {numberString}

        = <span className="total">{Math.pow(count, exponent)}</span></p>
    </div>
  )
}

export default Exponent;