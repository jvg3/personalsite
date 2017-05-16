var Overview = Overview || {}

Overview.Projects = class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {

        var asset_paths = this.props.asset_paths
        var selected_proj = this.state.selected_proj || {}
        return (
            <div className="projects fx-col fx-expand fx-hc fx-vc">
                <div className=" fx-row fx-expand-w fx-hsa fx-vc">
                    { ['tipyourself', 'scion', 'scapegoat'].map( (proj, i) =>
                        <div
                            key={proj}
                            onMouseEnter={() => this.setProj(proj)}
                            onClick={() => this.setProj(proj)}
                            className={"proj-wrap fx-row fx-hc fx-vc" + (proj === selected_proj.id ? " active" : "")}>
                            <img src={asset_paths[proj]}/>
                        </div>
                    ) }
                </div>
                { this.infoCard() }
                { this.state.photo_viewer_open ? <PhotoViewer photos={photos}/> : null }
            </div>
        )
    }

    infoCard() {

        var selected_proj = this.state.selected_proj

        if (selected_proj) {
            return (
                <div className="info-card animated fadeIn">
                    <div className="info-header fx-row fx-hsb">
                        <div>{selected_proj.name}</div>
                        <div
                            className="info-close"
                            onClick={() => this.setState({ selected_proj: null })}>
                            X
                        </div>
                    </div>
                    <div className="info-content">{selected_proj.info}</div>
                </div>
            )
        }
    }

    setProj(proj) { this.setState( { selected_proj: eval("this." + proj + "()") } ) }

    tipyourself() {
        return {
            id: "tipyourself",
            name: "Tip Yourself",
            info:
                <div>
                    iOS app with Ruby on Rails backend. Synapse Pay API as POS. Allowed users to maintain a ‘Tip Jar’ where they could tip themselves for constructive behavior.
                    <a className="proj-link" href="https://www.tipyourself.com/" target="_blank">View Marketing Website -></a>
                </div>
        }
    }

    scion() {
        return {
            id: "scion",
            name: "Scion Intelligence",
            info:
                <div>
                    Management/Analytics software for a large student housing company. Long running project with many concurrent technologies.
                    Since December 2016 I have been the sole developer working on the platform.
                    I have worked to rebuild the front-end in React, as well as streamline the database structure (by removing Mongo and using PostgreSQL as the primary database, additionally using Redis as a cache.) '
                    <div className="proj-link" onClick={ () => this.setState({ photo_viewer_open: true }) }>View Screencaps -></div>
                </div>
        }
    }

    scapegoat() {
        return {
            id: "scapegoat",
            name: "Scapegoat",
            info:
                <div>
                    Crowdsourced ‘Smart Scheduler’ tool for students. Suggests classes and organizations based on preferences, friend participation and major track.
                    <a className="proj-link" href="http://scapegoat.co/" target="_blank">View Marketing Website -></a>
                </div>
        }
    }

}