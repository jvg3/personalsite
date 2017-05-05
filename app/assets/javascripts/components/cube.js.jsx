Cube = class Cube extends React.Component {

    constructor(props) {
        super(props)
        this.state = { rotate: 0, accept_input: true }
        this.accept_input = true
    }

    render() {

        var home = <Overview.Home background_img_path={this.props.background_img_path}/>
        var about = <Overview.About propic_path={this.props.propic_path} resume_path={this.props.resume_path}/>

        return (
            <div className="cube-container fx-col" onWheel={ (e) => this.onWheel(e) }>
                <div className="fluid-menu fx-col">
                    { ['home', 'about', 'projects', 'contact'].map( (section, i) =>
                        this.menuItem(section, i)
                    ) }
                </div>
                <div className="cube-wrap">
                    { this.cubeFace('cube-face-front', home) }
                    { this.cubeFace('cube-face-bottom', about) }
                    { this.cubeFace('cube-face-back', <div/>) }
                    { this.cubeFace('cube-face-top',  <div/>) }
                </div>
            </div>
        )
    }

    onWheel(e) {

        e.preventDefault();
        e.stopPropagation();

        if (this.accept_input) {
            this.rotate(e.deltaY > 0 ? 1 : -1)
            this.accept_input = false
            setTimeout( () => this.accept_input = true, 1500)
        }

    }

    rotate(n) {

        var rotate = (this.state.rotate || 0) + n
        this.setState({ rotate: rotate })

        var cube = $('.cube-wrap')

        TweenLite.to(cube, 1, { rotationX: rotate*90 });

    }

    cubeFace(klass, content) {

        return (
            <div className={klass + " cube-face fx-row fx-vc fx-hc"}>
                <div className="background-img fx-row fx-vc fx-hc"></div>
                { content }
            </div>
        )

    }

    menuItem(section, i) {

        var rotate = this.state.rotate || 0
        var faceNum = (rotate+4)%4
        var rotateDiff = i - faceNum
        var klass = "fluid-menu-item" + ( faceNum === i ? " active" : "" )

        return (<div className={klass}><FlipButton key={i} onClick={ () => this.rotate(rotateDiff) } text={section.capitalize()}/></div>)
    }

}