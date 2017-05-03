Footer = class Footer extends React.Component {

    render() {
        return (
            <div className="footer fx-row fx-hc">
                <a className="footer-option" target="_blank" href={this.props.resume_path}>
                    RESUME
                    <div className="fa fa-download"></div>
                </a>
            </div>
        )
    }
}