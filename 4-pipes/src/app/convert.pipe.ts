import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convert",
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, args: string): any {
    if (!value) return null;
    switch (args) {
      case "km":
        return value * 1.60934;
      case "m":
        return value * 1.60934 * 1000;
      case "cm":
        return value * 1.60934 * 1000000;
      default:
        throw new Error("Target unit not supported");
    }
  }
}
