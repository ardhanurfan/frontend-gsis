import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const TextField = ({
  label,
  placeholder,
  type,
  style,
  onChange,
  value,
}: {
  label: string;
  placeholder: string;
  type: string;
  style: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
}) => {
  const [currType, setCurrType] = useState("password");
  const [icon, setIcon] = useState(<AiFillEyeInvisible></AiFillEyeInvisible>);

  const handleToggle = () => {
    if (currType === "password") {
      setIcon(<AiFillEye></AiFillEye>);
      setCurrType("text");
    } else {
      setIcon(<AiFillEyeInvisible></AiFillEyeInvisible>);
      setCurrType("password");
    }
  };

  return (
    <div className={style + " w-full"}>
      <label htmlFor={label} className="text-primaryText mb-2">
        {label}
      </label>
      {type == "password" ? (
        <div className="relative flex items-center">
          <input
            type={currType}
            id={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required
            className="field-text-mobile w-full border-none placeholder:text-seccondaryBlue rounded-[10px] bg-[#F2F4FF] p-[12px] text-slate-900 focus:border-2 focus:border-primaryBlue lg:field-text lg:p-[20px]"
          />
          <span
            className="absolute flex justify-around items-center right-[20px] text-lg lg:text-2xl text-primaryBlue"
            onClick={handleToggle}
          >
            {icon}
          </span>
        </div>
      ) : (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
          className="field-text-mobile w-full border-none placeholder:text-seccondaryBlue rounded-[10px] bg-[#F2F4FF] p-[12px] text-slate-900 focus:border-2 focus:border-primaryBlue lg:field-text lg:p-[20px]"
        />
      )}
    </div>
  );
};

export default TextField;
