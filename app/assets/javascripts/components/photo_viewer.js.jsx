PhotoViewer = class PhotoViewer extends React.Component {

    constructor (props) {

        super(props)
        this.state = {
            photo_index: 1,
            photos: this.props.photos
        }

    }

    render () {

        var photo_index = this.state.photo_index
        var photos = this.state.photos
        var photo = photos[photo_index]
        var left = (photo_index - 1) >= 0 ? photos[photo_index - 1] : ""
        var right = (photo_index + 1) < photos.length ? photos[photo_index + 1] : ""

        return (
            <div className={"photo-viewer text-white noselect animated fadeIn" + (this.props.open ? "" : " hidden")}>
                <div className="fa fa-times close pointer" onClick={ () => this.props.close() }/>
                <div className="view-container fx-row fx-vc fx-hsb">
                    <div onClick={ () => this.nextImage(-1) } className={"fa fa-chevron-left" + (photo_index == 0 ? " noshow" : "")}></div>
                    <img className="left" src={left}/>
                    <img className="active" src={photo}/>
                    <img className="right" src={right}/>
                    <div onClick={ () => this.nextImage(1) } className={"fa fa-chevron-right" + (photo_index == photos.length - 1 ? " noshow" : "")}></div>
                </div>
                <div className="ellipses fx-row fx-hc fx-vc">
                    { _.range(this.state.photos.length).map( (ellipse, i) =>
                        <div key={i} className={"ellipse" + (photo_index === ellipse ? " active" : "")}>&bull;</div>
                    ) }
                </div>
            </div>
        )
    }

    nextImage (step) {

        var next_step = this.state.photo_index + step

        if (next_step >= 0 && next_step <= this.state.photos.length - 1) {

            var img = $('.photo-viewer img.active')

            if (step == 1) {

                var right = $('.photo-viewer img.right')
                TweenLite.to(img, 1, { x: "-50%", opacity: 0 })
                TweenLite.to(right, 1, { x: "-50%", opacity: 1, onComplete: () => this.setState({ photo_index: next_step }, this.reset()) } )

            } else {

                var left = $('.photo-viewer img.left')
                TweenLite.to(img, 1, { x: "50%", opacity: 0 })
                TweenLite.to(left, 1, { x: "50%", opacity: 1, onComplete: () => this.setState({ photo_index: next_step }, this.reset()) } )

            }


        }
    }

    reset () {

        var left = $('.photo-viewer img.left')
        var img = $('.photo-viewer img.active')
        var right = $('.photo-viewer img.right')

        TweenLite.to(left, 0, { x: "0%", opacity: 0 })
        TweenLite.to(img, 0, { x: "0%", opacity: 1 })
        TweenLite.to(right, 0, { x: "0%", opacity: 0 })

    }

}