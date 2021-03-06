import { Product } from "../db/models/product";
class ProductDAO {
    createProduct(description, price, amount_left, category_id, image) {
        return new Product({
            description,
            price,
            amount_left,
            category_id,
            image,
        }).save();
    }

    getProduct() {
        return Product.find().populate({ path: "category_id", select: "name" });
    }

    getOneProduct(id) {
        return Product.findById(id).populate({
            path: "category_id",
            select: "name",
        });
    }

    updateProduct(id, description, price, amount_left, category_id, image) {
        return Product.findOneAndUpdate(
            { _id: id },
            {
                $set: { description, price, amount_left, category_id, image },
            },
            { new: true }
        );
    }
    deleteProduct(id) {
        return Product.deleteOne({ id });
    }
}

const productDAO = new ProductDAO();

export { productDAO };
