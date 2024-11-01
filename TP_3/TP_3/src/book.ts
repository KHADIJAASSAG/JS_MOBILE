export enum Status {
    Read = "Read",
    ReRead = "Re-read",
    DNF = "DNF",
    CurrentlyReading = "Currently reading",
    ReturnedUnread = "Returned Unread",
    WantToRead = "Want to read"
}

export enum Format {
    Print = "Print",
    PDF = "PDF",
    Ebook = "Ebook",
    AudioBook = "AudioBook"
}

export class Book {
    public finished: boolean;

    constructor(
        public title: string,
        public author: string,
        public pages: number,
        public pagesRead: number,
        public price: number,
        public status: Status,
        public format: Format,
        public suggestedBy: string
    ) {
        this.finished = pagesRead >= pages;
    }

    currentlyAt(): number {
        return this.pagesRead;
    }

    getReadingPercentage(): number {
        return (this.pagesRead / this.pages) * 100;
    }
}
