import useToggle from "../../hooks/useToggle";

interface Props {
  value?: boolean;
}
export default function Toggle({value}: Props) {
  const { toggle, handleToggle } = useToggle(value);

  return (
    <div>
      {toggle ? "On" : "Off"}
      <button type="button" onClick={handleToggle}></button>
    </div>
  );
}
