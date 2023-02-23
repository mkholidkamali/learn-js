
{
    // Convert
    const person = {
        first: 'Kholid',
        last: 'Kamali',
        address: {
            country: 'Indonesia',
            city: "Subang"
        }
    }
    const string = JSON.stringify(person);
    const json   = JSON.parse(string);
    console.log(string);
    console.log(json);
}