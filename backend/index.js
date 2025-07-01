import app from "./app.js";
import main from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

await main();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
