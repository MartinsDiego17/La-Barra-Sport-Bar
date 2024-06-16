const { user } = require('../db');

const createUser = async ({ name, image, email, isAdmin }) => {

    console.log("NOMBRE DESDE EL BACK: ", name);
    console.log("IMAGEN DESDE EL BACK: ", image);
    console.log("EMAIL DESDE EL BACK: ", email);
    console.log("ADMIN DESDE EL BACK: ", isAdmin);

    const response = await user.create({
        name,
        image,
        email,
        isAdmin
    });

    return response;

}

module.exports = createUser;