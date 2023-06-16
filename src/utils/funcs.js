import { gsap } from "gsap";

export const sortById = (arrObj) => arrObj.sort((a, b) => b.id - a.id);

export const animation = (elementRef) => {
  const element = elementRef.current;
  let tl = gsap.timeline();
  tl.to(element, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power3.out",
  });
};
