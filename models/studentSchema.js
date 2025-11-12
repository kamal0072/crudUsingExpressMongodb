import mongoose, { mongo } from "mongoose";
// student schema
const librarySchema = mongoose.Schema({
    name: { type: String, required: true, trim: true, unique: true },
    age: { type: Number, required: true },
    fees: {
        type: mongoose.Decimal128, required: true, validate: [
            (value) => value >= 500,
            "Minimum fees is 500"]
    },
});
// Student Model
const LibraryModel = mongoose.model("library", librarySchema);

// ways to insert Documents
// const singleDoc = new LibraryModel({
//     name: "Pooja singh",
//     age: 38,
//     fees: 5000
// });
// await singleDoc.save();

// export const studentDoc = async () => {
//     const student = new LibraryModel({
//         name: "Pooja singh",
//         age: 38,
//         fees: 5000
//     });
//     const stu = await student.save();
//     console.log(stu);
// };

// export const studentDoc = async () => {
//     try {
//         const result = await LibraryModel.insertMany([
//             { name: 'Peter', age: 30, fees: 300 },
//             { name: 'Alexa', age: 58, fees: 2200 },
//             { name: 'pinky', age: 68, fees: 2200 },
//             { name: 'sona', age: 18, fees: 9200 },
//         ]);
//         console.log("data inserted.", result);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

//ways to retrieve documents
export const allstudentDoc = async () => {
    // const res = await LibraryModel.find({}, { age: 1, name: 1, fees: 1, _id: 0 });
    // const res = await LibraryModel.find({ name: "Pooja singh" }, { age: 1, name: 1, fees: 1, _id: 0 });
    // const res = await LibraryModel.find().countDocuments();
    // console.log(res);
    // res.forEach(dt => {
    //     console.log(dt.name, dt.age)
    // })
    // const res = await LibraryModel.find().select("name age fees -_id");
    // only value of decimal field fees
    // const res = await LibraryModel.find().select("name age -_id")
    // const res = await LibraryModel.find({}, { fees: 1, _id: 0 });
    // const res = await LibraryModel.find({}, "name age -_id");
    // find by id
    // const res = await LibraryModel.findById("6911cff8c967d625366ed041");
    // console.log(res.name);
    // console.log(res.age);
    // // console.log(typeof res.fees.toString());
    // console.log(parseInt(res.fees.toString()));

    // findByIdAndUpdate
    // const res = await LibraryModel.findByIdAndUpdate(
    //     "6911cff8c967d625366ed041",
    //     { name: "komal kumar", fees: 1200 },
    //     { new: true });
    // console.log(res);

    // findByIdAndDelete
    // const res = await LibraryModel.findByIdAndDelete(
    //     "6911cff8c967d625366ed041");
    // console.log(res);

    // const res = await LibraryModel.distinct("name")
    // console.log(res)

    // aggregate
    const res = await LibraryModel.aggregate([
        { $match: { age: { '$gte': 30 } } },
        { $group: { _id: "$age", count: { $sum: 1 } } }
    ])
    console.log(res);
}
// export default LibraryModel;
export default LibraryModel;

