var Overview = Overview || {}

Overview.Home = class Home extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        var item = this.state.item || null
        var icons = ['cloud', 'database', 'server', 'desktop', 'mobile']

        // <img src={this.props.background_img_path}/>

        return (
            <div className="home section fx-col">
                <div className="header">FULL. STACK.</div>
                <div className="icons fx-row">
                    {icons.map((icon) =>
                        <div
                            onMouseEnter={() => this.updateCard(icon)}
                            className={"icon fx-1 fx-row fx-vc fx-hc fa fa-" + icon}>
                        </div>
                    )}
                </div>
                { item ? null : <div className="look-at-me fa fa-caret-up flash-up"/>}
                <div className={"info-card fx-1 " + (item || "closed")}>
                    <div className="info-header fx-row fx-hsb">
                        <div>{this.headerForItem()}</div>
                        <div
                            className="info-close"
                            onClick={() => this.updateCard(null)}>
                            X
                        </div>
                    </div>
                    <div className="info-content">{ipsum()}</div>
                </div>
                {/*<Footer resume_path={this.props.resume_path} />*/}
            </div>
        )
    }

    updateCard(item) { this.setState({item: item}) }

    headerForItem() {

        var item = this.state.item || ''

        switch(item) {
            case 'cloud': return 'CLOUD/HOSTING'
            case 'server': return 'SERVER-SIDE DEVELOPMENT'
            case 'desktop': return 'FRONT-END WEB DEVELOPMENT'
        }
        return item.upcase()
    }

    contentForItem() {

        var item = this.state.item || ''

        switch(item) {
            case 'cloud': return 'Experience configuring and deploying and heroku instances from scratch. Have worked with dynamic AWS S3 storage and EC2 computing.'
            case 'database': return 'Experience with both SQL (PostgreSQL) and NoSQL (MongoDB) setup, queries, and app integration'
            case 'server': return 'Development of '
            case 'desktop': return 'FRONT-END WEB DEVELOPMENT'
            case 'mobile': return 'NATIVE MOBILE IOS + ANDROID'
        }

    }


}