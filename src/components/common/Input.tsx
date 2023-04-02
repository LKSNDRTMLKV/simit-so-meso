interface Props {
    name: string,
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    label: string,
    placeholder?: string,
    className?: string | undefined,
}


const Input = ({ name, value, handleChange, type = "text", label, placeholder, className, ...props }: Props) => {
    return (
        <div className="flex flex-col space-y-2">
            {label ?
                <label htmlFor={name} className="text-sm font-medium text-neutral-500">
                    {label}
                </label> :
                null
            }
            <input
                type={type}
                name={name}
                id={name}
                value={value ?? ""}
                onChange={handleChange}
                placeholder={placeholder}
                className={className ?
                    className :
                    `w-full px-3 py-2 text-neutral-900 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                {...props}
            />
        </div>
    );
};

export default Input;
