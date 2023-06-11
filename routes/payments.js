const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

// create a webhook endpoint for cash free
router.post("/webhook", async (req, res) => {
  try {
    console.log(req.body);
    const form_url = req.body.form.form_url;
    // url of the form https://payments-test.cashfree.com/forms/intern1-campaign1

    const campaingname = form_url.split("/").pop();
    // separate intern1 and campaign1
    const [internID, campaingID] = campaingname.split("-");
    const amount = parseInt(req.body.order.order_amount);

    const status = req.body.order.order_status;
    if (status === "PAID") {
      // update the user's fundscollected and fundstonextmilestone
      User.findOneAndUpdate(
        { _id: internID, "campaings.campaing": campaingID },
        {
          $inc: {
            "campaings.$.fundscollected": amount,
          },
        },
        { new: true }
      ).exec();
    }

    res.status(200).json({ status: "Fund added to user" });
  } catch (err) {
    console.log(err);
    res.status(400).send("failed");
  }
});

module.exports = router;
