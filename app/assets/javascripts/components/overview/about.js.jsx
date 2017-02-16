var Overview = Overview || {}

Overview.About = class About extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="about section fx-col fx-hc">
                <div className="header">About</div>
                <div className="info-card">
                    <div className="info-header">HEADER</div>
                    <div className="info-content fx-row fx-hsa fx-vc">
                        <div className="about-image">
                            <img src={this.props.image_path}></img>
                        </div>
                        <div className="content">{ipsum()}</div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}