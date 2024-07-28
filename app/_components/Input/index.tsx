export default function Input({ label }: { label: string }) {
  // radix-uiのtextFieldを使う
  return (
    <input id="outlined-basic">
      <label>{label}</label>
    </input>
  );
}
