import { useEffect, useState } from "react";

interface DropdownProps {
  selected: string;
  onSelect: (value: string) => void;
}

export function Dropdown({ selected, onSelect }: DropdownProps) {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    fetch("/fake_api/companies-lookup.json")
      .then((res) => res.json())
      .then((data) => {
        const ops = data.map((obj: any) => obj.ticker);
        setOptions(ops);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="border p-1 rounded"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
