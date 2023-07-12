const Input = ({ register, label, placeholder, name, type, errors }) => {
  return (
    <div className="mt-4 py-2 px-4 rounded-lg bg-gray-100">
      <label htmlFor={name} className="flex items-center text-sm">
        {label}
        {errors && errors[name]?.message && (
          <span className="ml-2 text-red-500 text-xs">
            {errors[name]?.message}
          </span>
        )}
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
