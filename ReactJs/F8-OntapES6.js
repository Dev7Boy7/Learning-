// 004 -  Arrow function :

    const logger = (log) => {
        console.log(log);
    };

    logger('Message...');

    const sum = (a, b) => {
        return a + b;
    };

    const sum1 = (c, d) => c + d;

    const sum2 = (a, b) => {
        return {
            a: a,
            b: b,
        }
    };

    const sum3 = (a, b) => ({a: a, b: b});

    console.log(sum2(2,3));

    console.log(sum3(2,5));

    const logger1 = log => console.log(log);

    logger1('nguyencaotri')


    const course = {
        name: 'Javascript basic',
        getName: function() {
            return this;
        }
    }


    const Family = function(name, year) {
        this.name = name;
        this.year = year;
    }

    const tricao = new Family("nguyencaotri", 1993);

    console.log(tricao);

//--------------------------------------------------------------------------------------------------------------------------------------------------

// 006 - Enhanced Object :

// 1. Định nghĩa key value cho object
    var name = "Javascript";
    var price = 1000;

    // var course = {
    //     name: name,
    //     price: price,
    // };

    var course = {
        name,
        price,
    }
    console.log(course);

// 2. Định nghĩa method cho object
    var name = "Javascript";
    var price = 1000;

    // var course = {
    //     name: name,
    //     price: price,
    // };

    var course = {
        name,
        price,
        // getName: function() {
        //     return name;
        // }
        getName() {return name;},
    };
    console.log(course.getName());

// 3. Định nghĩa key cho object dưới dạng biến 
    var fielname = 'new-name';
    var fielprice = 'price';

    const course1 = {
        [fielname]: "Javascript",
        [fielprice]: 1000
    };

    console.log(course1);

//---------------------------------------------------------------------------------------------------------------------------------------------------

    const obj1 = [
        ['name', 'Son Dang'], 
        ['age', 21], 
        ['address', 'Ha Noi']
     ];

    console.log(obj1);

    const arrToObj = x => {
        const aaa = {};
        x.forEach(element => 
            aaa[element[0]] = element[1]
        );
        return aaa;
    }

    console.log(arrToObj(obj1));

//---------------------------------------------------------------------------------------------------------------------------------------------------

// 008 - Destructuring, Rest 

    var array = ['nguyencaotri', 'nguyenthanhtai', 'lexuantien', 'nguyenthithuy'];

    // var a = array[0];
    // var b = array[1];
    // var c = array[2];   

    // var [a,b,c] = array;

    // // Nếu không muốn lấy hết phần tử
    // var [a, , c] = array;

    var[a,b, ...rest] = array;

    console.log(a, b);

    console.log(rest);

    var course = {
        name: 'nguyencaotri',
        year: 1993,
        address: '46 Lotu'
    };

    // var {name, year, address} = course;

    // Nếu không muốn lấy hết phần tử

    var {name, ...rest} = course;

    console.log(name);  

    console.log(rest); // Có thể áp dụng để tạo một Obj mới xóa đi một hoặc nhiều phần tử

    var course2 = {
        name: 'nguyencaotri',
        year: 1993,
        address: '46 Lotu',
        // school: {
        //     cap3: 'tranphu',
        //     daihoc: 'YkhoaPNT',
        //     name: "tuhoc"
        // }
        description: 'codingF8'
    };

    // var {name: a, year, address, school: {cap3,daihoc,name}} = course2;

    // console.log(a, year, address, cap3, daihoc,name);

    var {name, description = 'default-description'} = course2;

    console.log(name, description);

//---------------------------------------------------------------------------------------

    const { 
        a = 'default', 
        b, 
        ...rest 
    } = {
        b: 'val1',
        c: 'val2',
        d: 'val3'
    };

    console.log(a, b, rest); 


