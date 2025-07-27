const CustomInput = ({ type, name, onChange }) => {
    return (
        <div className="w-full rounded-lg px-2 py-3 border focus-within:border-blue-500">
            <input className="w-full h-full bg-transparent" type={type} name={name} onChange={onChange} />
        </div>
    )
}

export default CustomInput