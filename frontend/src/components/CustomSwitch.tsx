import '../styles/custom_switch.css'

const CustomSwitch = ({ onChange, checked = false }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
            <span className="slider round"></span>
        </label>
    )
}

export default CustomSwitch