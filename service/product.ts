class ProductService {
    productDAO: any;
    notificationService: any;
    constructor(productDAO, notificationService) {
        this.productDAO = productDAO;
        this.notificationService = notificationService;
    }
    createProduct(description, price, amount_left, category_id, image) {
        this.notificationService.sendAll(description);
        return this.productDAO.createProduct(
            description,
            price,
            amount_left,
            category_id,
            image
        );
    }

    getProduct() {
        return this.productDAO.getProduct();
    }

    getOneProduct(id) {
        return this.productDAO.getOneProduct(id);
    }

    updateProduct(id, description, price, amount_left, category_id, image) {
        this.notificationService.sendAll(id);
        return this.productDAO.updateProduct(
            id,
            description,
            price,
            amount_left,
            category_id
        );
    }
    deleteProduct(id) {
        this.notificationService.sendAll(id);
        return this.productDAO.deleteProduct(id);
    }
}

export { ProductService };
