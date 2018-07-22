export default class Shoe {
    imageUrl: string;
    price: number;
    sizes: string[];
    name: string;
    active = false;
    id = this.guid();

    constructor(imageUrl: string, price: number, sizes: string[], name: string) {
        this.imageUrl = imageUrl;
        this.price = price;
        this.sizes = sizes;
        this.name = name;
    }

    private guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    private s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}
