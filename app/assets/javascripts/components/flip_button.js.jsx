FlipButton = class FlipButton extends React.Component {

    render() {

        return (
            <a onClick={ () => this.props.onClick() } className="flip-btn-wrapper animated fadeIn">
              <div className="flip-btn">
                <div className="flip-btn-face flip-btn-back">
                    <div className="search-tile back fx-row fx-vc fx-hc fx-vsb fx-expand">{this.props.text}</div>
                </div>
                <div className="flip-btn-face flip-btn-mid"></div>
                <div className="flip-btn-face flip-btn-front">
                    <div className="search-tile front fx-row fx-vc fx-hc fx-vsb fx-expand">{this.props.text}</div>
                </div>
              </div>
            </a>
        )

    }

}