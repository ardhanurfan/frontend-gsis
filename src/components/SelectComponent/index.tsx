import Select, {
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  components,
} from "react-select";
import dropdownarrow from "../../assets/dropdown.svg";
import dropdownarrowsm from "../../assets/dropdown-sm.svg";
import "./style.css";
import { useEffect, useState } from "react";

interface SelectComponentProps {
  placeholder: string;
  type: string;
  value: any;
}

const indicatorSeparatorStyle = {
  alignSelf: "stretch",
  backgroundColor: "white",
  marginBottom: 2,
  marginTop: 2,
  width: 2,
};

const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={dropdownarrow} className="hidden lg:block" alt="" />
      <img src={dropdownarrowsm} className="lg:hidden" alt="" />
    </components.DropdownIndicator>
  );
};

const SelectComponent = ({
  placeholder,
  type,
  value,
}: SelectComponentProps) => {
  // const options = [
  //   { value: "ITB", label: "Institut Teknologi Bandung" },
  //   { value: "UI", label: "Universitas Indonesia" },
  //   { value: "UGM", label: "Universitas Gadjah Mada" },
  //   { value: "Undip", label: "Universitas Dipenogoro" },
  //   { value: "ITB", label: "Institut Teknologi Bandung" },
  //   { value: "UI", label: "Universitas Indonesia" },
  //   { value: "UGM", label: "Universitas Gadjah Mada" },
  //   { value: "Undip", label: "Universitas Dipenogoro" },
  //   { value: "ITB", label: "Institut Teknologi Bandung" },
  //   { value: "UI", label: "Universitas Indonesia" },
  //   { value: "UGM", label: "Universitas Gadjah Mada" },
  //   { value: "Undip", label: "Universitas Dipenogoro" },
  // ];

  const [dat, setDat] = useState("");
  const [options, setOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);

  useEffect(() => {
    const temp = [...options];
    for (let index = 2023; index >= 2000; index--) {
      temp.push({ value: index.toString(), label: index.toString() });
    }
    setOptions(temp);
  }, []);

  return (
    <>
      <div className="w-full remove-input-txt-border">
        <Select
          className="basic-single"
          classNamePrefix="text-color"
          components={{ DropdownIndicator, IndicatorSeparator }}
          styles={{
            clearIndicator: (base, state) => ({
              ...base,
              color: state.isFocused ? "white" : "white",
              "&:hover": {
                color: "grey",
              },
            }),
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "#005CBA",
              overflow: "hidden",
              border: "none",
              paddingTop: "8px",
              paddingBottom: "8px",
              borderRadius: "8px",
            }),
            singleValue: (base) => ({
              ...base,
              color: "white",
            }),
            valueContainer: (base) => ({
              ...base,
              color: "white",
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: "1em",
              color: "white",
              fontWeight: 400,
            }),
            input: (base) => ({
              ...base,
              fontSize: "1em",
              color: "white",
              fontWeight: 400,
            }),
          }}
          isClearable={true}
          isSearchable={true}
          name={type}
          placeholder={placeholder}
          options={options}
          onChange={(e: any) => value(e.value)}
        />
      </div>
    </>
  );
};

export default SelectComponent;
