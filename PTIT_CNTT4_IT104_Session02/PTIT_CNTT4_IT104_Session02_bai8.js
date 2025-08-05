function displayUserInfo(user) {
    const {
        name,
        age,
        location: { city, country },
        job: { title = "unknown", company = "unknown" } = {},
        contact: { email = "unknown", phone = "unknown" } = {}
    } = user;

    return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}
console.log(displayUserInfo({
    name: "John",
    age: 25,
    location: {
        city: "Ha NOi",

        country: "Viet Nam "

    },
    contact: {
        email: "john@gmail.com",
        phone: "012345678"
    },
    job: {
        title: "Developer",
        company: "Tech Cory"
    }
}));
