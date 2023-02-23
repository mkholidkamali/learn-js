
{
    // Map Class
    const map = new Map();
    map.set('Name', 'Kholid Kamali');
    map.set('Address', 'Indonesia');

    console.log(map);
    console.log(map.get('Name'));
    console.log(map.get('Address'));

    map.forEach((value, key) => {
        console.log(key, value);
    });
}