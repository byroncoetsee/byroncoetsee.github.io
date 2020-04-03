// WIP
export class Product {
    constructor(json) {
        this.title = json.title;
        this.currentPrice = json.currentPrice;
        this.priceToBeat = json.rrp;
        this.offerId = json.offerId;
        this.gtin = json.gtin;
        this.url = json.productTakealotURL;
        this.status = json.status;
        this.barCode = json.mpBarcode;
        this.minPrice = json.minPrice;
        this.preferredSalePrice = json.maxPrice;
        this.increment = json.increment;
        this.brand = json.brand;
        this.buybox = json.buyBox;

        // name: item.title,
        // price: item.currentPrice,
        // priceToBeat: item.rrp,
        // offerId: item.offerId,
        // gtin: item.gtin,
        // url: item.productTakealotURL,
        // status: item.status,
        // barCode: item.mpBarcode,
        // min: item.minPrice,
        // max: item.maxPrice,
        // increment: item.increment,
        // brand: item.brand,
        // buybox: item.buyBox,
    }
}
