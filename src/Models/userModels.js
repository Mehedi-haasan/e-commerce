 const data =[
   {
    id:1,
    discount:5,
    heading:"Pubg Top Up",
    price:550,
    stock:"In Stock",
    image:[
           {
            image:"data:image/jpeg;base64,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",
           },
           {
             image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
           },
           {
             image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
           },
           {
             image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
           }
    ],
    colour:[
        {
            colour:"Red",
            type:"colour",
            value:"Red",

        },
        {
            colour:"Yellow",
            type:"colour",
            value:"Yellow",

        },
        {
            colour:"White",
            type:"colour",
            value:"White",

        },
        {
            colour:"Black",
            type:"colour",
            value:"Black",

        },
    ],
    size:[
        {
            size:"25 Diamonds",
            price:35
        },
        {
            size:"50 Diamonds",
            price:60,
        },
        {
            size:"115 Diamonds",
            price:75,
        },
        {
            size:"300 Diamonds",
            price:100
        },
        {
            size:"1200 Diamonds",
            price:400,
        },
        {
            size:"Lavel Up Pass",
            price:750
        },
    ],
    input:[
        {
            name:"Name",
            type:"text",
            placeholder:"Enter your name"
        },
        {
            name:"Email",
            type:"email",
            placeholder:"Enter your email"
        }
    ],
    rules:[
        {
            rule:"Maximum Login 1 Device",
        },
        {
            rule:"Streaming from one device at a time",
        },
        {
            rule:"If you want to change the device you have to logout from previous device then login new device",
        },
        {
            rule:"Video Quality: Ultra-HD (up to 4k)",
        },
    ],
    rating:4,
    category:"Game",
   }
]

module.exports = {data}


// INSERT INTO size (id, size) VALUES (2, "["{size:"25 diamonds",price:35}","{size:"50 diamonds",price:60}"]");

// INSERT INTO size2 (size) VALUES ('{"name": "small", "value": 10}');