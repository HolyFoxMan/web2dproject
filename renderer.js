class Renderer {

    constructor()
    {

        this.canvas_ = undefined;

        const CANVAS_DOM = "canvas-element-id",
              GL = "webgl",
              GL_OPTIONS = {
                antialias:  false,
                depth:      false,
                alpha:      false   
            };

        var canvas_element = document.getElementById(CANVAS_DOM);
        try {

            this.canvas_ = canvas_element.getContext(GL, GL_OPTIONS);

        } catch (e) {
            console.log("Cannot get render context");
        }
    }
}