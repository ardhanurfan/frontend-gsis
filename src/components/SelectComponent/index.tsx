import Select, {
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  components,
} from "react-select";
import dropdownarrow from "../../assets/dropdown.svg";
import dropdownarrowsm from "../../assets/dropdown-sm.svg";
import "./style.css";
import { useEffect, useState } from "react";
import { get } from "../../API/api";

interface SelectComponentProps {
  placeholder: string;
  type: string;
  onChange: any;
  value?: string;
  multiple?: boolean;
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
  onChange,
  multiple,
}: SelectComponentProps) => {
  const [options, setOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);

  const [selected, setSelected] = useState<string[]>([]);

  const getUniversityData = async () => {
    try {
      const univ = await get("universities");
      const data = univ.data?.data;
      const temp = [...options];
      data.forEach((element: any) => {
        temp.push({
          value: element.nama_universitas,
          label: element.nama_universitas,
        });
      });
      setOptions(temp);
    } catch (error) {
      console.log(error);
    }
  };
  const getMemberAllData = async () => {
    try {
      const users = await get("get-gsic-invite");
      const data = users.data?.data;
      const temp = [...options];
      data.forEach((element: any) => {
        temp.push({
          value: element.email,
          label: element.email,
        });
      });
      setOptions(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type == "Year") {
      const temp = [...options];
      for (let index = 2023; index >= 2000; index--) {
        temp.push({ value: index.toString(), label: index.toString() });
      }
      setOptions(temp);
    } else if (type == "University") {
      getUniversityData();
    } else if (type == "Member Gsic") {
      getMemberAllData();
    }
  }, []);

  return (
    <>
      <div className="w-full remove-input-txt-border">
        <Select
          isMulti={multiple}
          isOptionDisabled={() => selected.length >= 2}
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
          maxMenuHeight={200}
          isClearable={true}
          isSearchable={true}
          name={type}
          placeholder={placeholder}
          options={options}
          onChange={(e: any) => {
            multiple ? onChange(e) : onChange(e.value);
            setSelected(e);
          }}
          // defaultInputValue={value}
          defaultValue={value == null ? null : { value: value, label: value }}
        />
      </div>
    </>
  );
};

export default SelectComponent;
