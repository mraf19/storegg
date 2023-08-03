type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
};

export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  ...nativeProps
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-describedby={name}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
