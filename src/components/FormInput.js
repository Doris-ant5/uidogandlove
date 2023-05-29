
const FormInput = ({ label, name, value, placeholder, id, type, onChange, error }) => {
    return (
        <React.Fragment>
                label={label}
                name={name}
                value={value}
                placeholder={placeholder}
                id={id}
                type={type}
                onChange={onChange}
                error={error} />
        </React.Fragment>
    )
}

export default FormInput