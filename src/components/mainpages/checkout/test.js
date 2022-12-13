
const tests = [{
        category : "637ce157a5ce680be0f66b3e",
        checked : false,
        createdAt : "2022-11-22T16:29:38.924Z",
        description : "A pet shop or pet store is a retail business which sells animals and pet care resources to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums.",
        images : {
            public_id: 'test/yi7alpwblw7hpby6jklv', 
            url : 'https://res.cloudinary.com/dkiofoako/image/upload/v1669134662/test/yi7alpwblw7hpby6jklv.jpg'
        },
        quantity : 2,
        sold : 0 ,
        title : "Spring Boots",
        types : [{
            amount : 12,
            name: "250kg",
            price : 300000,
            _id : "637cf8f26d34d1484c6a8ed8"
        }],
        updatedAt : "2022-11-28T14:41:45.602Z",
        __v : 0,
        _id : "637cf8f26d34d1484c6a8ed9"
    },
    {
        category : "637ce298a5ce680be0f66b3f",
        checked : false,
        createdAt : "2022-11-22T16:25:38.852Z",
        description : "A pet shop or pet store is a retail business which sells animals and pet care resources to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums.",
        images : {
            public_id: 'test/gp9vf4ubp4vbqtuqmhmc', 
            url : 'https://res.cloudinary.com/dkiofoako/image/upload/v1669134386/test/gp9vf4ubp4vbqtuqmhmc.jpg'
        },
        quantity : 3,
        sold : 0 ,
        title : "Duke & Daisy",
        types : [{
            amount : 20,
            name: "250kg",
            price : 300000,
            _id : "637cf8026d34d1484c6a8ec8"
        }],
        updatedAt : "2022-11-22T16:25:38.852Z",
        __v : 0,
        _id : "637cf8026d34d1484c6a8ec9"
    }
]
var result = [];
for(const test of tests){
    var obj = {product_id:test._id,type_id:test._id,amount:test.quantity}
    result.push(obj)
}
console.log(result)

