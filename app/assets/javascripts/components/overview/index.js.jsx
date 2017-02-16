var Overview = Overview || {}

Overview.Index = class Index extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        var item = this.state.item || null

        return (
            <div className="overview fx-column">
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
                        <div>{this.headerForItem(item)}</div>
                        <div
                            className="info-close"
                            onClick={() => this.updateCard(null)}>
                            X
                        </div>
                    </div>
                    <div className="info-content">CONTENT</div>
                </div>
            </div>
        )
    }

    updateCard(item) {
        this.setState({item: item})
    }

    headerForItem(item) {
        switch(item) {
            case "cloud": return "CLOUD/HOSTING"
            case "server": return "SERVER-SIDE/API DEVELOPMENT"
            case "desktop": return "FRONT-END WEB DEVELOPMENT"
            case "mobile": return "NATIVE MOBILE IOS + ANDROID"
        }
        return item ? item.upcase() : ""
    }


}