let phoneBooks = [];

const addContact = (name, phone, email) => {
    const contat = {
        name: name,
        phone: phone,
        email: email,

    };
    phoneBooks.push(contat);
};
const displayContact = () => {
    console.log(" danh sach dien thoai ");
    for (let contat of phoneBooks) {
        console.log(`Ten${contat, name} , SDT${contat.phone} Email${contat.email}`);
    };

};

addContact("Vương", "0123456789", "vuong@example.com");
displayContact();