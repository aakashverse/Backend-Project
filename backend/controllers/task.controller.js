const Task = require("../models/task.model");

// new task
exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user.id });
//   console.log(task);
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
//   console.log("All task: ", tasks);
  res.json(tasks);
};

// update task
exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(task);
};

// destroy task
exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: "Deleted" });
};