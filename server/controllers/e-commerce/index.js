const homePageData = require("./data");

const getProductData = async (req, res) => {
  try {
    const { tag, id } = req.query;
    const data = homePageData[tag].find((product) => product.id == id);
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(401).json({ error: "No Data found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProductList = async (req, res) => {
  try {
    const { tag } = req.query;
    const data = homePageData[tag];
    if (data?.length) {
      res.status(200).json({ data });
    } else {
      res.status(401).json({ error: "No Data found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getHomePageData = async (req, res) => {
  try {
    res.status(200).json({ data: homePageData });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { tag, id } = req.body;
    console.log("ADD:::", req.body);
    const product = homePageData[tag].find((product) => product.id == id);
    const isExist = homePageData.cartData.find(
      (data) => data.id === product.id && data.tag === product.tag
    );
    if (!isExist) {
      homePageData.cartData.push({ ...product, count: 1 });
    }
    res.status(200).json({ data: homePageData.cartData });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { tag, id, type } = req.body;
    switch (type) {
      case "REMOVE": {
        const index = homePageData.cartData.findIndex(
          (product) => product.tag === tag && product.id === id
        );
        if (index !== -1) {
          homePageData.cartData.splice(index, 1);
          res
            .status(200)
            .json({
              message: "Succesfully removed",
              data: homePageData.cartData,
            });
        }
        return;
      }
      case "INCREASE": {
        homePageData.cartData.forEach((product) => {
          if (product.tag === tag && product.id === id) {
            product.count++;
          }
        });
        res
          .status(200)
          .json({
            message: "Succesfully Increased",
            data: homePageData.cartData,
          });
        return;
      }
      case "DECREASE": {
        homePageData.cartData.forEach((product) => {
          if (product.tag === tag && product.id === id) {
            product.count--;
          }
        });
        res
          .status(200)
          .json({
            message: "Succesfully Decreased",
            data: homePageData.cartData,
          });
        return;
      }
      case "CLEAR": {
        homePageData.cartData = [];
        res.status(200).json({ message: "Cart Cleared", data: [] });
      }
      default:
        return res.status(401).json({ error: "Error Occured" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const confirmOrder = async (req, res) => {
  try {
    homePageData.cartData = [];
    res.status(200).json({ message: "Order Placed Sucessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getProductData,
  getProductList,
  getHomePageData,
  addToCart,
  updateCartItem,
  confirmOrder,
};
