const express= require("express");
const { handleAllUsers, handlePostUsers, handleGetUserById, handleUpdateRequest, handleDeleteRequest } = require("../controllers/user")
//on a router level, we have a defined keyword to write routes
const router = express.Router();

// router.get("/", async (req,res)=> { //server side rendering for browsers supporting HTML
//     const allDbUsers = await User.find({}); //empty flower braces= all content
//     const html= 
//         `<ol>
//         ${allDbUsers.map((User) => `<li>${User.firstName}- ${User.email}</li>`).join("")}
//         </ol>`;
//     return res.send(html);
// });

router.route("/").get(handleAllUsers)
                .post(handlePostUsers);
// router.get("/", async (req,res)=> { //client side rendering with API
//     const allDbUsers= await User.find({});
//     //console.log("I am in GET Route", req.myName); //Handling the request and response by middleware
//    // console.log(req.headers); //display headers from the postman request
//     res.setHeader("X-MyName", "Sai Reddy"); //Sending or Creating custom headers //add X to your custom headers as good pratice
//     return res.json(allDbUsers); //list all users with path /api/users
// });

// router.get("/api/users/:id", (req, res) =>{ //fetching the id dynamically as api/users/id does not work
//     const id= Number(req.params.id);  //list the user with path /api/users/:id and id
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });

// router.post("/", handlePostUsers);
// router.post("/", async (req,res) =>{  //the actual router will be added as /users
//    const body= req.body;
//    if(!body || !body.first_name || !body.job_title ||!body.email || !body.gender){
//     return res.status(400).json({Error: "Mention all the details"});
//    }
// //    users.push({...body, id:users.length+1});
// //    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
// //     return res.status(201).json({status: "Success" , id : users.length});
// //    })
//    const newUser= await User.create({
//     firstName: body.first_name,
//     jobTitle : body.job_title,
//     email : body.email,
//     gender : body.gender,
//    });

// //    console.log("result", newUser);

//    return res.status(201).json({ msg: "success"});
// });

// router.patch("/api/users/:id", (req,res) =>{
//     //Todo change the user data
//     return res.json({status: pending});
// });

// router.delete("/api/users/:id", (req,res) =>{
//     //Todo delete the user
//     return res.json({status: pending});
// });

//the route for get, patch, and delete are same so we can also write


router.route("/:id")
                    .get(handleGetUserById)
                    .patch(handleUpdateRequest)
                    .delete(handleDeleteRequest);
                   
// router.route("/:id").
//     get( async (req, res) =>{ //fetching the id dynamically as api/users/id does not work
//     // const id= Number(req.params.id);  //list the user with path /api/users/:id and id
//     const user= await User.findById(req.params.id);
//     //const user = users.find((user) => user.id === id);
//     if (!user) return res.status(404).json({Message: "User Not Found"});
//     return res.json(user);
//     })
//     .patch(async (req,res) =>{
//     // const id= Number(req.params.id);
//     await User.findByIdAndUpdate(req.params.id, {job_title: "Bose"});
//     //const user = users.find((user) => user.id === id);
//     // const gotUser = users[user];
//     // const body = req.body;
//     // const updatedUser = { ...gotUser, ...body};
//     // users[user] = updatedUser;
//     //  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     //   return res.json({ status: "Success", updatedUser});
//     // });
//     return res.json({ status: "Success"});
//     })
//     .delete(async (req,res) =>{
//     await User.findByIdAndDelete(req.params.id);
//     // const id= req.params.id * 1;
//     // const userId = users.find(user => user.id === id);
//     // const delUser = users.splice(userId, 1); //delete the ID
//     // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     // return res.json({ status: "success", delUser });  //write data into file
//     // });
//     return res.status(201).json({ status: "success"});
// });

module.exports = router;