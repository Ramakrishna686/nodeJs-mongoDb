module.exports = app => {
    const registredUser = require("../controllers/registredUsers.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create-user", registredUser.create);
  
    // Retrieve all registredUser
    router.get("/", registredUser.findAll);
  
    // Retrieve all published registredUser
    // router.get("/published", registredUser.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", registredUser.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", registredUser.update);
    
  
    // Delete a Tutorial with id
    router.delete("/:id", registredUser.delete);
  
    // Create a new Tutorial
    router.delete("/", registredUser.deleteAll);
  
    app.use("/api/users", router);
  };
  