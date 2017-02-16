var Overview = Overview || {}

Overview.Home = class Home extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        var item = this.state.item || null

        return (
            <div className="overview section fx-column">
                <div className="header">FULL. STACK.</div>
                <div className="icons fx-row">
                    {['cloud', 'database', 'server', 'desktop', 'mobile'].map((icon) =>
                        (<div
                            onMouseEnter={() => this.updateCard(icon)}
                            className={"icon fx-1 fa fa-" + icon}>
                        </div>)
                    )}
                </div>
                <div className={"info-card " + (item || "closed")}>
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
            </div>
        )
    }

    updateCard(item) {
        this.setState({item: item})
    }

    headerForItem() {

        var item = this.state.item || ''

        switch(item) {
            case 'cloud': return 'CLOUD/HOSTING'
            case 'server': return 'SERVER-SIDE/API DEVELOPMENT'
            case 'desktop': return 'FRONT-END WEB DEVELOPMENT'
            case 'mobile': return 'NATIVE MOBILE IOS + ANDROID'
        }
        return item.upcase()
    }


}