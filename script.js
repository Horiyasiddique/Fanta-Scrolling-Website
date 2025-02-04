let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#second-page",
    start: "0% 95%",
    end: "50% 50%",
    scrub: "true",
  },
});

tl.to(
  "#fanta",
  {
    top: "110%",
    left: "-2%",
    scrub: 3,
  },
  "orange"
);

tl.to(
  "#orange-cut",
  {
    top: "163%",
    left: "14%",
  },
  "orange"
);

tl.to(
  "#orange",
  {
    width: "16%",
    top: "163%",
    right: "10%",
  },
  "orange"
);

tl.to(
  "#leaf",
  {
    top: "102%",
    left: "80%",
    width: "15%",
  },
  "orange"
);

tl.to(
  "#leaf2",
  {
    top: "99%",
    left: "0%",
    width: "15%",
  },
  "orange"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#third-page",
    start: "4% 95%",
    end: "20% 50%",
    scrub: "true",
    // markers: true
  },
});

tl2.from(
  "#lemon1",
  {
    top: "110%",
    left: "-96%",
    rotate: "-90deg",
  },
  "page3"
);

tl2.from(
  "#sprite",
  {
    top: "110%",
    left: "-96%",
    rotate: "-90deg",
  },
  "page3"
);

tl2.from(
  "#lemon2",
  {
    top: "110%",
    left: "96%",
    rotate: "90deg",
  },
  "page3"
);

tl2.from(
  "#pepsi",
  {
    top: "110%",
    left: "96%",
    rotate: "90deg",
  },
  "page3"
);

tl2.to(
  "#orange-cut",
  {
    top: "208%",
    left: "40%",
  },
  "page3"
);

tl2.to(
  "#fanta",
  {
    top: "205%",
    left: "35%",
  },
  "page3"
);
