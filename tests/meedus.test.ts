import dayjs from "dayjs";
import { checkAvailableBadges } from "../src/services/badgesService";

const isBetweenPlugin = require("dayjs/plugin/isBetween");
dayjs.extend(isBetweenPlugin);
const sender = "3P6Ksahs71SiKQgQ4qaZuFAVhqncdi2nvJQ";

describe("items", () => {
  it("foo", async () => checkAvailableBadges(sender), 5000000);
});
