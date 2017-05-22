var Overview = Overview || {}

Overview.Contact = class Contact extends React.Component {

    render () {

        return (
            <div className="fx-col contact fx-expand fx-vc fx-hc">
                <div className="bus-card fx-col">
                    <div className="bus-header  fx-vc fx-row">
                        <img src={this.props.asset_paths.bus_card} />
                        <div className="fx-1">John Gregory - Software Developer</div>
                    </div>
                    <div className="bus-content fx-1 fx-col">
                        <div className="bus-icons fx-row">
                            <a target="_blank" href="https://www.linkedin.com/in/john-gregory-177245a3/">
                                <div className="fa fa-linkedin-square"></div>
                            </a>
                            <a target="_blank" href="https://www.facebook.com/john.wizard">
                                <div className="fa fa-facebook-square"></div>
                            </a>
                            <a target="_blank" href="mailto:johnvgregory3@gmail.com">
                                <div className="fa fa-envelope-square"></div>
                            </a>
                            <a target="_blank" href="https://github.com/jvg3/personalsite" className="fx-row fx-vc">
                                <div className="fa fa-github"></div>
                                (View Source)
                            </a>
                        </div>
                        <div className="cell fx-col fx-1 fx-vc">
                            <div><b>Cell:</b> +1 319.651.1906</div>
                            <div><b>Email:</b> johnvgregory3@gmail.com</div>
                        </div>
                        <div className="bus-footer">
                            This site was custom built with React and Ruby on Rails. Hosted on Heroku.
                        </div>
                    </div>
                </div>
                <Footer resume_path={this.props.asset_paths.resume}/>
            </div>
        )
    }

}