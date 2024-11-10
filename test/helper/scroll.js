import { driver } from "@wdio/globals";

export default async function slideUp(fromY, toY) {
  await driver
    .action("pointer")
    .move({ x: 410, y: fromY })
    .down()
    .pause(200)
    .move({ x: 410, y: toY })
    .up()
    .perform();
}
