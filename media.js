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

    toggleCheckedOutStatus(setCheckoutStatus){
        this._isCheckedOut = setCheckoutStatus
    }
}


class Book extends Media {
    constructor(author, pages){
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

// class Movie 
// director runTime 

// class CD
// artist songs 


