import React, {useState} from 'react';

function Slide({title, text}) {

    return (
        <div id="slide" className="card text-center">
            <h1 data-testid="title">{title}</h1>
            <p data-testid="text">{text}</p>
        </div>
    )
}

function Slides({slides}) {

    const [currentSlide,setCurrentSlide] = useState(0);
    const {title, text} = slides[currentSlide];

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" 
                className="small outlined"
                disabled={currentSlide === 0}
                onClick={() => setCurrentSlide(0)}
                >
                    Restart
                </button>
                <button data-testid="button-prev" 
                className="small"
                disabled={currentSlide === 0}
                onClick={() => setCurrentSlide(currentSlide - 1)}>
                    Prev
                </button>
                <button data-testid="button-next" 
                className="small"
                disabled={currentSlide === slides.length - 1}
                onClick={() => setCurrentSlide(currentSlide + 1)}>
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;
