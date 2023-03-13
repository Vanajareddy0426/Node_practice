const person= require('./person')

console.log(person.name)


// const express = require('express')
// const app =express()
// app.use(express.json())


// app.listen(8000,() => {
//     console.log("server is up")
// })


// var contacts = [
//     {
//         id:'1',
//         name:'vanaja'
//     }
// ]

// app.get('/contact',(req,res) =>
// {
//     res.send({
//         success:true,
//         message:'data sent successfully',
//         data:contacts

//     })
// })

// app.post('/contact',(req,res) =>{
//     var name = req.body.name
//     if(name){
//     contacts.push({
//         id:(contacts.length+1).toString(),
//         name:name
//     })
//     res.send({
//         success:true,
//         message:'data added successfully'
//     })
//     }
//     else{
//         res.send({
//             sucess:false,
//             message:'validation error',
//             errors:[
//                 {
//                     field:"name",
//                     message:"cannot be empty"
//                 }
//             ]
//         })
//     }
// })
// app.delete('/contact/:id',(req,res) => {
//     var id = req.params.id
//     console.log(id)
//     console.log(req.params.id)

//     var newContacts = contacts.filter((el) => Number(el.id) != id)
//     contacts =newContacts

//     res.send({
//         success:true,
//         message:"data deleted successfully"
//     })
// })
// app.put('/contact/:id',(req,res) =>{
//     var id = req.params.id
//     var name = req.body.name
//     if (name)
//     {
//         var index = contacts.findIndex(el => Number(el.id) ==id)

//         contacts[index]= {
//             ...contacts[index],
//             name:name
//         }
//         res.send({
//             success:true,
//             message:"data updated successfully"
//         })
//     }
//     else{
//         res.send({
//             sucess:false,
//             message:'validation error',
//             errors:[
//                 {
//                     field:"name",
//                     message:"cannot be null"
//                 }
//             ]
//         })
//     }
// })