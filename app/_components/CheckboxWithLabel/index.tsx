import { Checkbox as RadixCheckbox } from "@radix-ui/themes";

type Props = {
  size?: "1" | "2" | "3";
  label: string;
  status: boolean;
  handleClick: () => void;
};
export default function CheckboxWithLabel({ size = "1", label, status, handleClick }: Props) {
  return (
    <>
      <RadixCheckbox size={size} id="c1" checked={status} onClick={handleClick} />
      <label htmlFor="c1">{label}</label>
    </>
  );
}
