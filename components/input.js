export default function Input({ label, ...props }) {
  return (
    <label className="block leading-loose">
      <span className="block">{label}</span>
      <input
        type="text"
        placeholder="e.g. elonmusk"
        className="block w-full"
        {...props}
      />
    </label>
  );
}
