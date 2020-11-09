class KeyGrabber {

    constructor()
    {
        this.bind_contexts_ = new Map();
        this.current_context_ = undefined;
    }

    addBindContext(context_name, bind_map)
    {
        if (this.bind_contexts_.has(context_name))
            return 1;

        this.bind_contexts_.set(context_name, bind_map);

        if (this.bind_contexts_.prototype.size === 1)
            this.current_context_ = this.bind_contexts_.entries().next();

        return 0;
    }

    selectBindContext(context_name)
    {
        var context = this.bind_contexts_.get(context_name);
        if (context === undefined)
            return 1;

        this.current_context_ = context;

        return 0;
    }

    getCommand()
    {

    }
}