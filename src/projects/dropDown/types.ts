export interface DropDownOption {
  title: string;
  value: string;
}

export interface CustomDropDownProps {
  options: DropDownOption[];
  onSelect: (option: DropDownOption) => void;
  isSearchable?: boolean;
}
