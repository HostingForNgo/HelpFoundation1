const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/HelpFoundation");

const teamMemberSchema = mongoose.Schema({
    name: String,
    secondText: String,
    description: String,
    img: String
})
const testimonialSchema = mongoose.Schema({
    testimonial: String
})
const gallerySchema = mongoose.Schema({
    title: String,
    date: String,
    description: String,
    images: Array
})
const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    subject: String,
    message: String
})
const blogSchema = mongoose.Schema({
    heading: String,
    blog: String,
    date: String,
    images:Array
})
const jobsSchema = mongoose.Schema({
    JobTitle: String,
    location: String,
    jobDescription: String,
    qualifications: Array,
    openPositions: String
})
const jobApplicationsSchema = mongoose.Schema({
    fullName: String,
    qualification: String,
    age: String,
    resume: String
})
const projectsSchema = mongoose.Schema({
    heading: String,
    volunteer: Boolean,
    description: String,
    images:Array
})
const eventSchema = mongoose.Schema({
    title: String,
    date: String,
    fundRaised: Number,
    description:String,
    images:Array
})
const lifeAffected = mongoose.Schema({
    title: String,
    description: String,
    count:String,
})

const TeamMemberModel = mongoose.model("team", teamMemberSchema)
const TestimonialModel = mongoose.model("testimonial", testimonialSchema)
const GalleryModel = mongoose.model("Gallerie", gallerySchema)
const MessageModel = mongoose.model("message", messageSchema)
const BlogModel = mongoose.model("blog", blogSchema)
const JobModel = mongoose.model("job", jobsSchema)
const JobApplicationsModel = mongoose.model("jobApplication", jobApplicationsSchema)
const ProjectsModel = mongoose.model("project", projectsSchema)
const EventModel = mongoose.model("event", eventSchema)
const lifeAffectedModel = mongoose.model("lifeAffected", lifeAffected)

module.exports = {
    connection,
    TeamMemberModel,
    TestimonialModel,
    GalleryModel,
    MessageModel,
    BlogModel,
    JobModel,
    JobApplicationsModel,
    ProjectsModel,
    EventModel,
    lifeAffectedModel
}