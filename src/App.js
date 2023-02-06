import React, { useEffect, useState } from "react";

import "./App.css";

function Validator(props) {
  //useState to trigger a response once something happens
  const [creditCard, validateCreditCard] = useState("");
  const [valid, confValid] = useState(NaN);

  useEffect(() => {
    const validCard = (creditCard) => {
      let addNums = 0;
      let checker = false;
      //iterate through
      for (let i = creditCard.length - 1; i >= 0; i--) {
        //convert from a string
        let numbers = parseInt(creditCard.charAt(i));
        if (checker === true) {
          numbers *= 2;
        }
        //boolean with conditional ? true : false
        addNums += numbers > 9 ? numbers - 9 : numbers;
        //if checker changes
        checker = !checker;
      }
      return addNums % 10 === 0;
    };
    confValid(validCard(creditCard));
  }, [creditCard]);

  // function input (){
  //     if (valid === true) {
  //        return <p>Valid entry! Card information has been accepted.</p>;
  //     }
  //   }
  // input()

  return (
    <div>
      <form>
      <p>Enter Card Information </p>
      <input 
        value={creditCard}
        onChange={(event) => validateCreditCard(event.target.value) }
      />
      {/* <button value={creditCard} onClick={(event) => validateCreditCard(event.target.value) } type='submit'>Submit!</button> */}
      </form>
      <h1>{valid === true
        ? "Valid entry! Card information has been accepted."
        : "Error! Invalid entry, please try again."}
        </h1>
      {/* /* Booleans in react must be formated diffrent in react*/}
      
    </div>
  );
}

export default Validator;
