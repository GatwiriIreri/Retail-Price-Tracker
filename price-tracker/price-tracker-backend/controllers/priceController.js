const Price = require('../models/Price');

// @desc    Get current best prices
// @route   GET /api/prices/best
// @access  Public
exports.getBestPrices = async (req, res) => {
  try {
    const bestPrices = await Price.aggregate([
      {
        $sort: { date: -1 }
      },
      {
        $group: {
          _id: "$product",
          latestPrice: { $first: "$$ROOT" },
          minPrice: { $min: "$price" }
        }
      },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },
      {
        $project: {
          "product.name": 1,
          "product.category": 1,
          "product.unit": 1,
          currentPrice: "$latestPrice.price",
          minPrice: 1,
          supplier: "$latestPrice.supplier",
          date: "$latestPrice.date"
        }
      }
    ]);

    res.status(200).json({
      success: true,
      count: bestPrices.length,
      data: bestPrices
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};