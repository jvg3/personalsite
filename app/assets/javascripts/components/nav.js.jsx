Nav = class Nav extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        var menuClass = "nav-menu " + (this.state.selectedItem || "") + (this.state.open ? " open" : " closed")
        var updateMenu = this.updateMenu.bind(this)
        var toggleMenu = this.toggleMenu.bind(this)
        var selectedItem = this.state.selectedItem || "closed"
        var menuHelpers = {
            updateMenu: updateMenu,
            toggleMenu: toggleMenu
        }

        return (
            <div className="nav fx-col">
                <div className="nav-bar fx-row fx-hr">
                    <Nav.Option
                        name="Home"
                    />
                    <Nav.Option
                        name="About"
                    />
                    <Nav.Option
                        name="Projects"
                        menuStyle={"Projects"}
                        menuHelpers={menuHelpers}/>
                    <Nav.Option
                        name="Contact"
                        menuStyle={"Contact"}
                        menuHelpers={menuHelpers}/>
                </div>
                <div
                    onMouseEnter={() => toggleMenu(true)}
                    onMouseLeave={() => toggleMenu(false)}
                    className={menuClass}>
                    {selectedItem}
                </div>
            </div>
        )
    }

    updateMenu(item) {
        this.setState({selectedItem: item})
    }

    toggleMenu(open) {
        this.setState({open: open})
    }

}

Nav.Option = class Option extends React.Component {

    render() {

        var menuHelpers = this.props.menuHelpers || {}
        var name = this.props.name || "TODO"
        var menuStyle = this.props.menuStyle || false
        var updateMenu = menuHelpers.updateMenu || (() => null)
        var toggleMenu = menuHelpers.toggleMenu || (() => null)

        return (
            <div
                className="nav-option"
                onMouseLeave={() => toggleMenu(false)}
                onMouseEnter={() => {
                    updateMenu(menuStyle)
                    toggleMenu(!!menuStyle)
                }}>
                <a href={"/" + name.downcase()}>{name.upcase()}</a>
            </div>
        )
    }

}