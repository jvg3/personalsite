Footer = class Footer extends React.Component {

    render() {
        return (
            <div className="footer fx-row fx-hc">
                <div className="footer-option">
                    <a href={this.props.resume_path} target="_blank">RESUME</a>
                    <div className="fa fa-download"></div>
                </div>
                <div className="footer-option">CONTACT</div>
            </div>
        )
    }
}