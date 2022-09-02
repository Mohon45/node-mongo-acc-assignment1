const users = require("../user.json");

// get a one random user
module.exports.getRandomUser = (req, res) => {
  try {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    res.status(200).json({
      success: true,
      messages: "Success",
      data: randomUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error.",
    });
  }
};

// get a all users
module.exports.getAllUsers = (req, res) => {
  try {
    const { limit } = req.query;
    if (limit) {
      res.status(200).json({
        success: true,
        messages: "Success",
        data: users.slice(0, limit),
      });
    } else {
      res.status(200).json({
        success: true,
        messages: "Success",
        data: users,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error.",
    });
  }
};

// save a single user
module.exports.saveATool = (req, res) => {
  try {
    const { gender, name, contact, address, photoUrl } = req.body;
    if (gender && name && contact && address && photoUrl) {
      const id = users.length + 1;
      const newUser = {
        id: id,
        gender: gender,
        name: name,
        contact: contact,
        address: address,
        photoUrl: photoUrl,
      };
      users.push(newUser);
      res.status(200).send({
        success: true,
        messages: "Success",
      });
    } else {
      res.status(404).send({
        success: false,
        error: "All input data not Found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Internal server error.",
    });
  }
};

// update a single user by id
module.exports.updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const newUser = users.find((user) => user.id === Number(id));
    const { gender, name, contact, address, photoUrl } = req.body;
    if (gender) {
      newUser.gender = gender;
    } else if (name) {
      newUser.name = name;
    } else if (contact) {
      newUser.contact = contact;
    } else if (address) {
      newUser.contact = address;
    } else if (photoUrl) {
      newUser.name = photoUrl;
    }
    res.status(200).send({
      success: true,
      messages: "Success",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Internal server error.",
    });
  }
};

// update a multiple user by multiple id
module.exports.updateMultipleUser = (req, res) => {
  try {
    res.end();
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Internal server error.",
    });
  }
};

module.exports.deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    tools = users.filter((user) => user.id !== Number(id));

    res.status(200).send({
      success: true,
      messages: "Success",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Internal server error.",
    });
  }
};
