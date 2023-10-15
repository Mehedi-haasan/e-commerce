


const register=(req, res)=>{
    const user=red.body;
    console.log(req.body);
    res.send("Form Submited")
}


// INSERT INTO size (size) VALUES (ARRAY['{"name": "small", "value": 10}'::jsonb,'{"name": "medium", "value": 20}'::jsonb,'{"name": "large", "value": 30}'::jsonb]);

// INSERT INTO size (size) VALUES (ARRAY[
//     '{"size": "25 Diamonds", "price": 35}'::jsonb,
//     '{"size": "50 Diamonds", "price": 60}'::jsonb,
//     '{"size": "120 Diamonds", "price": 75}'::jsonb
// ]);