module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
        gender: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const reigistredUser = mongoose.model("registered_users", schema);
    return reigistredUser;
  };
  