const express = require("express");
const router = express.Router();
const Asset = require("../models/assetModel");
const verifyToken = require("../middleware/authMiddleware");

router.get("/assets", verifyToken, async (req, res) => {
  try {
    const details = await Asset.find({});
    res.json(details);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get("/assets/:id", async (req, res) => {
  const assetId = req.params.id;
  try {
    const details = await Asset.findOne({ assetId: assetId });
    if (!details) {
      return res.status(404).send("Asset not found");
    }
    res.json(details);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.post("/assets", async (req, res) => {
  try {
    const data = req.body;
    const result = await Asset.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Server error");
  }
});

// router.post('/assets/maintenance', async (req, res) => {
//     const { assetId, assetName, location, warranty, status } = req.body;
//     try {
//         const newAsset = new Asset({
//             assetId,
//             assetName,
//             location,
//             warranty,
//             status: status || 'Repair', // Default status to 'Repair'
//         });
//         await newAsset.save();
//         res.status(201).send('Asset added for maintenance successfully');
//     } catch (error) {
//         res.status(500).send('Server error');
//     }
// });


router.put("/assets/:id", async (req, res) => {
  const data = req.body;
  const assetId = req.params.id;
  console.log(assetId);
  console.log(data);
  try {
    const result = await Asset.findOneAndUpdate(
      { assetId: assetId },
      data,
      { new: true, runValidators: true }
    );
    if (!result) {
      return res.status(404).send("Asset not found");
    }
    res.json(result); // Return the updated asset
  } catch (error) {
    res.status(500).send("Server error");
  }
});


router.delete("/assets/:id", verifyToken, async (req, res) => {
  const assetId = req.params.id;
  try {
    const result = await Asset.findOneAndDelete({ assetId: assetId });
    if (!result) {
      return res.status(404).send("Asset not found");
    }
    res.send("Asset deleted successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
