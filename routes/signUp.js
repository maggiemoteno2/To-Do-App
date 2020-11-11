const RegistryModel = require('./../models/registryModel');

const userSignUp = function (server) {
 server.post("/signUp", async (req, res) => {
    try {
      const signUpDetailsSchema = new RegistryModel ({
        password: req.body.password,
        email: req.body.email
      });
      const userSignUpDetails = await signUpDetailsSchema.save({ password: req.body.password, email: req.body.email});
      res.status(201).json(userSignUpDetails);
      console.log(userSignUpDetails)
    } catch (e) {
      console.log(e)
      res.status(500)
    }
  })
}



module.exports = { userSignUp }