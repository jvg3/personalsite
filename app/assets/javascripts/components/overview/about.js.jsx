var Overview = Overview || {}

Overview.About = class About extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        return (
            <div className="about section fx-col fx-hc">
                <div className="header">IAmA</div>
                <div className="info-card fx-1 fx-col">
                    <div className="info-header">HEADER</div>
                    <div className="info-content fx-row fx-hsa fx-vc fx-1">
                        <div className="about-image fx-1">
                            <img src={this.props.image_pathfds}></img>
                        </div>
                        <div className="content">{ipsum()}</div>
                    </div>
                </div>
                <Footer resume_path={this.props.resume_path}/>
            </div>
        )
    }

}