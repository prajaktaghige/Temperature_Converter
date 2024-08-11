import { Component, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",  // Ensure this matches the HTML tag
  templateUrl: "./temperature-converter.component.html",
  styleUrls: ["./temperature-converter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  c = "";
  f = "";

  constructor() {}

  ngOnInit() {}

  onChange(value: string, type: "c" | "f") {
    if (value === "") {
      this.c = "";
      this.f = "";
      return;
    }
  
    const temperature = Number(value);
    if (type === "c") {
      this.f = ((temperature * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temperature - 32) * 5) / 9).toFixed(1);
    }
  }
  
}
