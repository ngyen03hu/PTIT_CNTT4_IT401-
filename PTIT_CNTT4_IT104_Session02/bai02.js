function greetingWithWeather(name, weather) {
    if (weather === "sunny") {
        console.log(`Chao ${name}! hom nay troi nang tuyen voi!`)
    } else if (weather === "rainy") {
        console.log(`Chao  ${name}! hom nay troi mua , nho mang o nhe!`)
    } else {
        console.log(`Chao ${name}!Hom nay thoi tiet  khong xac dinh !`)
    }
}
console.log(greetingWithWeather("Nguyen an", "sunny"));
console.log(greetingWithWeather("Le Nam", "rainy"));
console.log(greetingWithWeather("Tran Tan", "cloudy"));