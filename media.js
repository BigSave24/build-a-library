// Parent Class
class Media {
    constructor(title){
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get title(){
        return this._title
    }

    // Ratings Methods
    get ratings(){
        return this._ratings
    }

    getAverageRating(){
        let ratingsCount = this._ratings.length
        let totalRatings = this._ratings.reduce((acc, curr) => acc + curr)

        return totalRatings/ratingsCount
    }

    addRating(newRating){
        this._ratings.push(newRating)
    }

    // Checkout Methods
    get isCheckedOut(){
        return this._isCheckedOut
    }

    set isCheckedOut(isCheckedOutStatus){
        this._isCheckedOut = isCheckedOutStatus
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut
    }
}


class Book extends Media {
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author
    }

    get pages(){
        return this._pages
    }
}


class Movie extends Media {
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director
    }

    get runTime(){
        return this._runTime
    }
}


class CD extends Media {
    constructor(title, artist, songs){
        super(title);
        this._artist = artist;
        this._songs = songs
    }

    get artist(){
        return this._artist
    }

    get songs(){
        return this._songs
    }
}


// Test Classes
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)

console.log(historyOfEverything)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

console.log('===========================')

const speed = new Movie('Speed', 'Jan de Bont', 116)
console.log(speed)

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

console.log('===========================')
