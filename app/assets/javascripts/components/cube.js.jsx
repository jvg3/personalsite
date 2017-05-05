Cube = class Cube extends React.Component {

    constructor(props) {
        super(props)
        this.state = { rotate: 0, accept_input: true }
        this.accept_input = true
    }

                    // <div className="cube-face cube-face-left fx-row fx-vc fx-hc">5</div>
                    // <div className="cube-face cube-face-right fx-row fx-vc fx-hc">6</div>
    render() {
        return (
            <div className="cube-container" onWheel={ (e) => this.onWheel(e) }>
                <div className="background-img fx-row fx-vc fx-hc"></div>
                <div className="cube-wrap">
                    <div className="cube-face cube-face-front fx-row fx-vc fx-hc"><Overview.Home background_img_path={this.props.background_img_path}/></div>
                    <div className="cube-face cube-face-bottom fx-row fx-vc fx-hc"><Overview.About propic_path={this.props.propic_path} resume_path={this.props.resume_path}/></div>
                    <div className="cube-face cube-face-back fx-row fx-vc fx-hc">3</div>
                    <div className="cube-face cube-face-top fx-row fx-vc fx-hc">4</div>
                </div>
            </div>
        )
    }

    onWheel(e) {

        e.stopPropagation();

        if (this.accept_input) {
            this.rotate(e.deltaY > 0 ? 1 : -1)
            this.accept_input = false
            setTimeout( () => this.accept_input = true, 1000)
        }

    }

    rotate(n) {

        var rotate = (this.state.rotate || 0) + n
        this.setState({ rotate: rotate })

        var cube = $('.cube-wrap')
        TweenLite.to(cube, 1, { rotationX: rotate*90 });
    }

}