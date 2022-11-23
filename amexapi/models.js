module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            password:String,
            date:String,
            country: Object,
            accept: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("user", schema);
    return User;
};
