import React from "react";

export const Jumbotron = () => {
    const jumbotronStyle = {
        background: "#F5F5F5",
    }
    return (
        <div className="jumbotron bg-secondary-subtle px-3 pt-1 pb-5 mb-3" style={jumbotronStyle}>
            <h1 className="display-4"><b>A Warm Welcome!</b></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum voluptatem suscipit dolorum. Fuga nam
                facere obcaecati, necessitatibus ea impedit ullam mollitia harum aperiam repellat natus, nemo autem sunt
                exercitationem soluta.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    )
};
