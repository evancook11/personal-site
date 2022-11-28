import '../css/section-header.css'
function SectionHeader(props) {

    return (
        <div className="header">
            <h3 className="text">{props.text}</h3>
        </div>
    )
}

export default SectionHeader