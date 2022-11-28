import '../css/section-text.css'
function SectionText(props) {
    return(
        <div className="container">
            <p className="paragraph">
                {props.text}
            </p>
        </div>
    )
}

export default SectionText