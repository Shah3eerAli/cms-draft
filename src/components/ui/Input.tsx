interface InputProps {
  register: any;
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  errors?: Record<string, any>;
}

const Input: React.FC<InputProps> = ({ register, label, placeholder, name, type, errors }) => {
  return (
    <div className="mt-4 py-2 px-4 rounded-lg bg-gray-100">
      <label htmlFor={name} className="flex items-center text-sm">
        {label}
        {(errors && errors[name]?.message) && <span className="ml-2 text-red-500 text-xs">
          *
        </span>}
      </label>
      <input
        id={name}
        {...register(name)}
        type={type || "text"}
        className={"bg-transparent text-lg w-full outline-none"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
