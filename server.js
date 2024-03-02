import express from "express"
const app = express()
app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', './views')


const data = [
    { 
        name: "Michael Choi",
        createdAt: "January 15th 2013",
        message: "This is my message. This is my message. This is my message. This is my message. This is my message."
    },
    { 
        name: "Michael Choi",
        createdAt: "January 23rd 2013",
        message: "This is my message. This is my message. This is my message. This is my message. This is my message."
    },
    { 
        name: "Cory Whiteland",
        createdAt: "January 20th 2013",
        message: "This is my message. This is my message. This is my message. This is my message. This is my message."
    },
    { 
        name: "Cory Whiteland",
        createdAt: "January 1st 2013",
        message: "This is my message. This is my message. This is my message. This is my message. This is my message."
    },
    { 
        name: "Cory Whiteland",
        createdAt: "January 3st 2013",
        message: "This is my message. This is my message. This is my message. This is my message. This is my message."
    },
    { 
        name: "Cory Whiteland",
        createdAt: "April 19 2013",
        message: "This is my message. This is my message. This is my message. This is my message. This is my message."
    },
];

data.sort((a, b) => {
    const dateA = new Date(a.createdAt.replace(/(st|nd|rd|th)/, ''));
    const dateB = new Date(b.createdAt.replace(/(st|nd|rd|th)/, ''));
    return dateB - dateA;
});

app.get("/",(req,res) =>{
   res.render('index', { posts: data })
})


app.listen(3000, () =>{
    console.log("Listening on port 3000");
})
