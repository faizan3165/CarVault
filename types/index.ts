import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer?: string;
  setManufacturer?: (manufacturer: string) => void;
  selected?: string;
  setSelected?: (selected: any) => void;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (value: any) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface SearchButtonProps {
  otherClasses: string;
}

export interface AlertProps {
  alertMsg: string;
  setAlertMsg: (alertMsg: string) => void;
}

export interface FilterProps {
  year: number;
  limit: number;
  fuel: string;
  manufacturer: string;
  model: string;
}

export interface ShowMoreProps {
  pageNum: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}
