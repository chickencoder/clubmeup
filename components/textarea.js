export default function TextArea({ label, ...props }) {
  return (
    <label className="block leading-loose">
      <span className="block">{label}</span>
      <textarea className="block w-full" rows="4" {...props} />
    </label>
  );
}
