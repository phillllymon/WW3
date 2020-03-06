import React from 'react';

class Stars extends React.Component {
    constructor(props) {
        super();
        this.state = {rating: props.rating};
        this.arr = [];
        const max = props.max ? props.max : 5;
        for (let i = 1; i <= max; i++) {
            this.arr.push(i);
        }
        this.previewRating = this.previewRating.bind(this);
        this.restoreRating = this.restoreRating.bind(this);
    }

    previewRating(n) {
        this.setState({rating: n});
    }

    restoreRating() {
        this.setState({rating: this.props.rating});
    }

    render () {
        return (
            <div onMouseLeave={this.restoreRating}>
                {
                    this.arr.map((n) => {
                        return (
                            <div 
                                key={n} 
                                className={n <= this.state.rating ? 
                                    "star yellow" :
                                    "star grey"
                                }
                                onMouseEnter={() => this.previewRating(n)}
                            >
                                *
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Stars;