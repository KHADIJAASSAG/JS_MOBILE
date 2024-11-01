"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Format = exports.Status = void 0;
var Status;
(function (Status) {
    Status["Read"] = "Read";
    Status["ReRead"] = "Re-read";
    Status["DNF"] = "DNF";
    Status["CurrentlyReading"] = "Currently reading";
    Status["ReturnedUnread"] = "Returned Unread";
    Status["WantToRead"] = "Want to read";
})(Status || (exports.Status = Status = {}));
var Format;
(function (Format) {
    Format["Print"] = "Print";
    Format["PDF"] = "PDF";
    Format["Ebook"] = "Ebook";
    Format["AudioBook"] = "AudioBook";
})(Format || (exports.Format = Format = {}));
class Book {
    constructor(title, author, pages, pagesRead, price, status, format, suggestedBy) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.pagesRead = pagesRead;
        this.price = price;
        this.status = status;
        this.format = format;
        this.suggestedBy = suggestedBy;
        this.finished = pagesRead >= pages;
    }
    currentlyAt() {
        return this.pagesRead;
    }
    getReadingPercentage() {
        return (this.pagesRead / this.pages) * 100;
    }
}
exports.Book = Book;
