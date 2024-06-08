import React, { useState } from 'react';
import { FrameWork } from '@/app/interfaces';
import Select, { GroupBase, StylesConfig } from 'react-select';

function FrameworksDropdown({ frameWorks }: { frameWorks: FrameWork[] }) {
  const [
    selectedOptions,
    setSelectedOptions,
  ] = useState<string[]>();

  const handleChange = (e: any) => {
    setSelectedOptions(e.map((i: { value: string; }) => i.value));
  };

  const options = frameWorks.map(
    ({ name, id }) => ({ value: id, label: name }),
  ) as unknown as readonly (string | GroupBase<string>)[];

  const colourStyles: StylesConfig = {
    control: (styles: any) => ({
      ...styles, backgroundColor: '#4f4f4f', color: 'white', boxShadow: 'none', border: 'none', caretColor: 'white',
    }),
    placeholder: (styles, { isFocused }) => ({ ...styles, color: isFocused ? 'gray' : 'white' }),
    option: (styles: any) => ({
      ...styles,
      backgroundColor: 'transparent',
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#3C3C3C',
        cursor: 'pointer',
      },
    }),
    menu: (styles: any) => ({ ...styles, backgroundColor: '#4f4f4f', left: '0' }),
    input: (styles: any) => ({
      ...styles, outline: 'none', cursor: 'text', color: 'white',
    }),
    indicatorsContainer: (styles: any) => ({ ...styles, padding: '0', color: 'red' }),
    multiValue: (styles: any) => ({
      ...styles, backgroundColor: '#301E35', borderRadius: '4px', backgroundImage: 'linear-gradient(90deg, #8042BF, #B44480)',
    }),
    multiValueLabel: (styles: any) => ({ ...styles, color: 'white' }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      ':hover': {
        ...styles[':hover'],
        backgroundColor: 'none',
        color: 'white',
      },
      color: '#ffffffd1',
    }),
    clearIndicator: (styles: any) => ({
      ...styles,
      ':hover': {
        ...styles[':hover'],
        color: 'white',
      },
      color: '#ffffffd1',
    }),
    dropdownIndicator: (styles: any) => ({
      ...styles,
      ':hover': {
        ...styles[':hover'],
        color: 'white',
      },
      color: '#ffffffd1',
    }),
  };
  return (
    <Select
      options={options}
      className="w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white"
      styles={colourStyles}
      isMulti
      isSearchable
      placeholder="Principais frameworks"
      onChange={(e: any) => handleChange(e)}
    />
  );
}

export default FrameworksDropdown;
