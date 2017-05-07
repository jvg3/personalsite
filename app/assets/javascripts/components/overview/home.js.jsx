var Overview = Overview || {}

Overview.Home = class Home extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        var item = this.state.item || null
        var icons = ['cloud', 'database', 'server', 'desktop', 'mobile']

        return (
            <div className="home section fx-col fx-vsa">
                <div className="header">FULL. STACK.</div>
                <div className="icons fx-row">
                    {icons.map((icon) =>
                        <div
                            key={icon}
                            onMouseEnter={() => this.updateCard(icon)}
                            onClick={() => this.updateCard(icon)}
                            className={"icon fx-1 fx-row fx-vc fx-hc fa fa-" + icon}>
                        </div>
                    )}
                </div>
                { item ? null : <div className="look-at-me fa fa-caret-up flash-up"/> }
                <div className={"info-card fx-col " + (item || "closed")}>
                    <div className="info-header fx-row fx-hsb">
                        <div>{this.headerForItem(item)}</div>
                        <div
                            className="info-close"
                            onClick={() => this.updateCard(null)}>
                            X
                        </div>
                    </div>
                    <div className="info-content large fx-col fx-hc fx-vsa fx-1">
                        <div className="tech-icons fx-row fx-expand-w fx-1 fx-vc fx-hsa">
                            <div className="large fx-1"><b>Key Techs:</b></div>
                            <div className="fx-row fx-3">
                                { this.techsForItem(item).map( (tech, i) =>
                                    <div  key={tech.path} className="tech-wrap fx-1 fx-col fx-hc">
                                        <div className="large"><b>{tech.name}</b></div>
                                        <img src={tech.path}/>
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div className="large fx-1">{this.contentForItem(item)}</div>
                    </div>
                </div>
                <div className="fa fa-angle-down"></div>
                {/*<Footer resume_path={this.props.resume_path} />*/}
            </div>
        )
    }

    updateCard(item) { this.setState({item: item}) }

    headerForItem(item) {

        switch(item) {
            case 'cloud': return 'CLOUD/HOSTING'
            case 'server': return 'SERVER-SIDE DEVELOPMENT'
            case 'desktop': return 'FRONT-END WEB DEVELOPMENT'
        }
        return (item || '').upcase()
    }

    contentForItem(item) {

        switch(item) {
            case 'cloud': return 'Experience configuring and deploying and heroku instances from scratch. Have worked with dynamic AWS S3 storage and EC2 computing.'
            case 'database': return 'Experience with both sql (Postgresql) and Nosql (MongoDB) setup, queries, restoration, migration, etc'
            case 'server': return 'Development of backend systems for web apps and JSON APIs to communicate with mobile apps, primarily in Ruby on Rails.'
            case 'desktop': return 'Strong Javascript skills, particularly in React. Familiar with HTML, CSS, ECMAScript 6 syntax and animations.'
            case 'mobile': return 'Swift and Java (XCode and Android Studio) native mobile app development '
        }

    }

    techsForItem(item) {

        var asset_paths = this.props.asset_paths

        switch(item) {
            case 'cloud': return [
                { name: 'Heroku', path: asset_paths.heroku },
                { name: 'AWS', path: asset_paths.aws }
            ]
            case 'database': return [
                { name: 'PostgreSQL', path: asset_paths.postgres },
                { name: 'Redis', path: asset_paths.redis },
                { name: 'MongoDB', path: asset_paths.mongo }
            ]
            case 'server': return [
                { name: 'Ruby on Rails', path: asset_paths.rails },
                { name: 'Meteor', path: asset_paths.meteor }
            ]
            case 'desktop': return [
                { name: 'React', path: asset_paths.react },
                { name: 'Javascript', path: asset_paths.javascript },
                { name: 'HTML', path: asset_paths.html },
                { name: 'SCSS', path: asset_paths.scss }
            ]
            case 'mobile': return [
                { name: 'Android', path: asset_paths.android },
                { name: 'iOS', path: asset_paths.ios }
            ]
        }

        return []

    }

}