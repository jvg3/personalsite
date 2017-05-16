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

    setProj(proj) { this.setState({selected_proj: eval("this." + proj + "()")}) }

    tipyourself() {
        return {
            id: "tipyourself",
            name: "Tip Yourself",
            info: 'iOS app with Ruby on Rails backend. Synapse Pay API as POS. Allowed users to maintain a ‘Tip Jar’ where they could tip themselves for constructive behavior'
        }
    }

    scion() {
        return {
            id: "scion",
            name: "Scion Intelligence",
            info: 'Management/Analytics software for a large student housing company. Long running project with many concurrent technologies including Postgres, MongoDB, Redis, Sidekiq and React.'
        }
    }

    scapegoat() {
        return {
            id: "scapegoat",
            name: "Scapegoat",
            info: 'Crowdsourced ‘Smart Scheduler’ tool for students. Suggests classes and organizations based on preferences, friend participation and major track.'
        }
    }

}