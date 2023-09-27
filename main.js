const ham = document.querySelector(".ham");
let listItem = document.querySelectorAll(".links-wrapper li");
let navOPen = false;
ham.classList.add("bar-icon");
ham.addEventListener("click", () => {
	// console.log(navOPen);
	let mm = gsap.matchMedia();
	mm.add("(max-width: 800px)", () => {
		if (navOPen) {
			let hamAnime = gsap.timeline({
				onComplete: function () {
					ham.classList.remove("x-icon");
				},
			});
			navOPen = false;
			hamAnime.to(".links-wrapper li", {
				opacity: 0,
				// x: 20,
				stagger: 0.3,
			});
			hamAnime.to(".nav-link-container", {
				x: 300,
				ease: "back.out(1.7)",
			});

			hamAnime.to(".ham", {
				rotation: 90,
				duration: 0.4,
			});
			hamAnime
				.to(".ham", {
					scale: 0,
				})

				.then(() => {
					ham.classList.add("bar-icon");

					hamAnime.to(".ham", {
						scale: 1,
						duration: 0.3,
						ease: "back.out(1.7)",
					});
					hamAnime.to(".ham", {
						rotation: 0,
						duration: 0.3,
						ease: "back.out(1.7)",
					});
					// let listItem = document.querySelectorAll(".links-wrapper li");
					listItem.forEach((item) => {
						item.style.opacity = 1;
					});
				});
		} else {
			let hamAnime = gsap.timeline({
				onComplete: function () {
					ham.classList.remove("bar-icon");
				},
			});
			navOPen = true;
			hamAnime.to(".ham", {
				rotation: 0,
				ease: "back.out(1.7)",
			});
			hamAnime.to(".nav-link-container", {
				x: 0,
				ease: "circ.out",
			});
			hamAnime.from(".links-wrapper li", {
				opacity: 0,
				y: 20,
				stagger: 0.3,
			});
			// hamAnime.to(".ham", {
			// 	rotation: 720,
			// 	duration: 0.7,
			// });
			hamAnime
				.to(".ham", {
					scale: 0,
					duration: 0.3,
				})

				.then(() => {
					ham.classList.add("x-icon");
					hamAnime.to(".ham", {
						scale: 1,
						ease: "back.out(1.7)",
					});
					// let listItem = document.querySelectorAll(".links-wrapper li");
					// listItem.forEach((item) => {
					// 	item.style.position = "relative";
					// 	item.style.right = "20px";
					// });
				});
		}
	});
});
