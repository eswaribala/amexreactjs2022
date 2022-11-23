module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            fileName: String,
            ext:String,
            path: String,
            size: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const File = mongoose.model("file", schema);
    return File;
};
