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
            <div className="home section fx-col">
                <div className="header">{"LORUM IPSUM"/*FULL. STACK.*/}</div>
                <div className="icons fx-row">
                    {icons.map((icon) =>
                        <div
                            onMouseEnter={() => this.updateCard(icon)}
                            className={"icon fx-1 fx-row fx-vc fx-hc fa fa-" + icon}>
                        </div>
                    )}
                </div>
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