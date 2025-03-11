import '../styles/custom_switch.css'

const CustomSwitch = ({ onChange }) => {
    return (
        <label className="switch">
            <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />
            <span className="slider round"></span>
        </label>
    )
}

export default CustomSwitch