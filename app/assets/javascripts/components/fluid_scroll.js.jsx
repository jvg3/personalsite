FluidScroll = class FluidScroll extends React.Component {

    componentDidMount() {

        var _this = this

        $(".fluid-scroll").fluidscroll({
            // onBetween: function( currentFrame, nextFrame ) {
            //     _this.setState({ currentFrame: nextFrame.data('anchor') })
            // }
        })
        // window.addEventListener('scroll', this.handleScroll)
    }

    render() {

        var frameClass = "frame fluid-frame fx-row fx-vc fx-hc"
        // var currentFrame = this.state.currentFrame || 'home'
        // <Overview.Home/>
        // <Overview.About/>
                        // <a href={"#" + section} key={i} className={section == currentFrame ? 'active' : ''}>{section.capitalize()}</a>
                        // <li><a href={"#" + section} key={i}><FlipButton text={section.capitalize()}/></a></li>

        return (
            <div className="fluid-scroll fx-col">
                <div className="background-img fx-row fx-vc fx-hc"></div>
                <div className="fluid-menu fx-col">
                    { ['home', 'about', 'projects', 'contact'].map( (section, i) =>
                        <div className="fluid-menu-item"><FlipButton url={"#" + section} text={section.capitalize()}/></div>
                    ) }
                </div>
                <div className="fluid-surface">
                    <div className={frameClass} data-anchor="home"><Overview.Home background_img_path={this.props.background_img_path}/></div>
                    <div className={frameClass} data-anchor="about"><Overview.About propic_path={this.props.propic_path} resume_path={this.props.resume_path}/></div>
                    <div className={frameClass} data-anchor="projects">Frame 3</div>
                    <div className={frameClass} data-anchor="contact">Frame 4</div>
                </div>
            </div>
        )
    }

}