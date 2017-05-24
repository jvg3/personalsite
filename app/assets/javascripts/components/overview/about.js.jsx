var Overview = Overview || {}

Overview.About = class About extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        var numDays = moment('2017-06-15').diff(moment(), 'days')
        var asset_paths = this.props.asset_paths

        return (
            <div className="about section fx-col fx-hc fx-vsa">
                <div className="header">About</div>
                <div className="info-card fx-1 fx-col">
                    <div className="info-header">About</div>
                    <div className="info-content fx-row fx-hsa fx-vc fx-1">
                        <div className="about-image fx-1">
                            <img src={asset_paths.propic}></img>
                        </div>
                        <div className="content fx-col fx-vsa">
                            <div className="title large">
                                I am a midwest-grown, San Francisco-bound software developer
                                with a passion for all things technology.
                            </div>
                            <div>
                                I will be relocating to the bay area in
                                <b className="large">{"   " + numDays + "   "}</b>
                                days and will be looking for full time employment.
                                <br/>
                                Since graduation I have spent my time in Chicago, IL working for a startup dev shop -
                                building a variety of web and mobile apps.
                                <br/>
                                <br/>
                                Ruby (on Rails) and Javascript are my core, but I am adaptable - and eager - to work with
                                new technologies and frameworks.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="look-at-me fa fa-caret-down flash-down"/>
                <Footer resume_path={asset_paths.resume}/>
            </div>
        )
    }

}