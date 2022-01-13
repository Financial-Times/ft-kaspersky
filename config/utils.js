const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptopS: '930px',
	laptop: '1024px',
	laptopM: '1220px',
	laptopL: '1440px',
	desktop: '2560px',
};

const ts = Date.now();

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptopS: `(min-width: ${size.laptopS})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopM: `(min-width: ${size.laptopM})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

export function animateValue(id, start, end, duration) {
	if (start === end) return;
	var range = end - start;
	var current = start;
	var increment = end > start ? 1 : -1;
	var stepTime = Math.abs(Math.floor(duration / range));
	var obj = document.getElementById(id);
	var timer = setInterval(function () {
		current += increment;
		obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

export const ARTICLE_URL = `https://ft.com/partnercontent/kaspersky/article.json?ts=${ts}`;
export const REPORT_URL = `https://ft.com/partnercontent/kaspersky/report.json?ts=${ts}`;
