import { useState } from "react";

type RadioInputOptionType = "yes" | "no";

interface RadioInputProps {
  name: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ name }) => {
  const [selectedOption, setSelectedOption] = useState<RadioInputOptionType>(
    "no"
  );

  const handleChangeRadioInputOption = () => {
    selectedOption === "no"
      ? setSelectedOption("yes")
      : setSelectedOption("no");
  };

  return (
    <>
      <input
        type="radio"
        name={name + "yes"}
        id={name + "yes"}
        value="yes"
        onClick={handleChangeRadioInputOption}
        checked={selectedOption === "yes"}
      />
      <label htmlFor={name + "yes"}>Yes</label>
      <input
        type="radio"
        name={name + "no"}
        id={name + "no"}
        value="no"
        onClick={handleChangeRadioInputOption}
        checked={selectedOption === "no"}
      />
      <label htmlFor={name + "no"}>No</label>
    </>
  );
};

export default RadioInput;
