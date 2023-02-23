
{
    // Create
    // const date1 = new Date();
    // console.log(date1.getDate());
    // const date2 = new Date(2003, 09, 09);
    // console.log(date2);
    // const date3 = new Date(1676988638224);
    // console.log(date3.toLocaleDateString());
}

{
    // Epoch & Unix TimeStamp
    // const date1 = new Date();
    // console.log(date1.getTime());
    // const date2 = Date.now();
    // console.log(date2);
}

{
    // Parsing
    const date1 = Date.parse("2003-09-09");
    const date  = new Date(date1);
    console.log(date);
}

{
    // Setter & Getter
    const date = new Date();
    date.setFullYear(2020);
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getFullYear());
    console.log(date.getHours());
    console.log(date.getMilliseconds());
    console.log(date.getMinutes());
    console.log(date.getMonth());
}