import express from "express";
import cors from "cors";
import formatEmailText from "./utils/formatEmailText.js";
import sendEmail from "./utils/sendEmail.js";

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const formattedData = formatEmailText(req.body);

  const to = "babenko.vitaly12@gmail.com";
  const subject = "Výsledek formuláře";
  const text = formattedData;

  try {
    await sendEmail(to, subject, text);
    res.json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error sending mail`, error });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
